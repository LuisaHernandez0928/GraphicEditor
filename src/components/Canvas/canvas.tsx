import { useWindowSize } from '@uidotdev/usehooks';
import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CURSOR_DICT } from '@constants/index';

import { ECursorType, EEdge, IPoint, IRect, IView } from '@globalTypes/types';

import {
  calculareNoneEdgeResize,
  calculateBottomLeftResize,
  calculateBottomResize,
  calculateBottomRightResize,
  calculateLeftResize,
  calculateRightResize,
  calculateTopLeftResize,
  calculateTopResize,
  calculateTopRightResize,
} from '@globalUtils/geometry';
import { Rect } from '@globalUtils/index';

import {
  changeSelectedView,
  changeHoveredView,
  move,
  resize,
} from '@reducers/editorReducer';

import { CanvasElement } from '@components/GenericCanvasElement/canvasElement';

import { RootState } from '@src/store';

const PROXIMITY_OFFSET = 10;

const Canvas = (): React.ReactElement => {
  const dispatch = useDispatch();

  const size = useWindowSize();

  const canvas = useRef<HTMLDivElement>(null);

  const [canvasLeft, setCanvasLeft] = useState<number>(0);
  const [canvasTop, setCanvasTop] = useState<number>(0);

  const [isViewBeingMoved, setIsViewBeingMoved] = useState<boolean>(false);
  const [isViewBeingResized, setIsViewBeingResized] = useState<boolean>(false);
  const [idViewBeingResized, setIdViewBeingResized] = useState<string | null>(
    null
  );
  const [
    cursorOffsetRelativeToView,
    setCursorOffsetRelativeToView,
  ] = useState<IPoint>({ x: 0, y: 0 });

  const [nearestEdge, setNearestEdge] = useState<EEdge>(EEdge.NONE);
  const [cursor, setCursor] = useState<ECursorType>(ECursorType.DEFAULT);

  const layer = useSelector(
    (state: RootState) => state.editor.layers[state.editor.currentLayer]
  );

  const selectedViewID = useSelector(
    (state: RootState) => state.editor.selectedViewID
  );

  const hoveredViewID = useSelector(
    (state: RootState) => state.editor.hoveredViewID
  );

  useEffect(() => {
    const canvasElement = canvas.current;
    if (!canvasElement) return;
    const casvasBound = canvasElement.getBoundingClientRect();
    setCanvasLeft(casvasBound.left);
    setCanvasTop(casvasBound.top);
  }, [size]);

  useEffect(() => {
    if (nearestEdge === EEdge.NONE && isViewBeingMoved)
      setCursor(ECursorType.MOVE);
    else setCursor(CURSOR_DICT[nearestEdge]);
  }, [nearestEdge, isViewBeingMoved]);

  const adjustRelativePoint = (e: MouseEvent<HTMLDivElement>): IPoint => {
    return {
      x: Math.max(0, Math.round(e.clientX - canvasLeft)),
      y: Math.max(0, Math.round(e.clientY - canvasTop)),
    };
  };

  const findViewContainedInEvent = (
    e: MouseEvent<HTMLDivElement>
  ): IView | undefined => {
    const p: IPoint = adjustRelativePoint(e);

    return Object.values(layer.views).find((view) =>
      new Rect(view).isPointContained(p, PROXIMITY_OFFSET)
    );
  };

  const detectProximity = (e: MouseEvent<HTMLDivElement>) => {
    const p: IPoint = adjustRelativePoint(e);
    const nearestEdge = new Rect(
      layer.views[selectedViewID || '']
    ).getNearestPivot(p, PROXIMITY_OFFSET);

    setIdViewBeingResized(selectedViewID);
    setNearestEdge(nearestEdge);
  };

  const processHover = (e: MouseEvent<HTMLDivElement>) => {
    const view = findViewContainedInEvent(e);
    if (view == null && hoveredViewID != null)
      dispatch(changeHoveredView(null));
    else if (view != null && hoveredViewID !== view.id)
      dispatch(changeHoveredView(view.id));
  };

  const processMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!selectedViewID) return;
    const p: IPoint = adjustRelativePoint(e);
    p.x -= cursorOffsetRelativeToView.x;
    p.y -= cursorOffsetRelativeToView.y;
    dispatch(move({ viewId: selectedViewID, point: p }));
  };

  const processResize = (e: MouseEvent<HTMLDivElement>) => {
    if (!idViewBeingResized) return;

    const adjustedPoint: IPoint = adjustRelativePoint(e);
    const viewRect = layer.views[idViewBeingResized || ''].rect;

    const EDGE_DICT: Record<EEdge, IRect> = {
      l: calculateLeftResize(viewRect, adjustedPoint),
      r: calculateRightResize(viewRect, adjustedPoint),
      t: calculateTopResize(viewRect, adjustedPoint),
      b: calculateBottomResize(viewRect, adjustedPoint),
      tl: calculateTopLeftResize(viewRect, adjustedPoint),
      br: calculateBottomRightResize(viewRect, adjustedPoint),
      bl: calculateBottomLeftResize(viewRect, adjustedPoint),
      tr: calculateTopRightResize(viewRect, adjustedPoint),
      n: calculareNoneEdgeResize(viewRect),
    };
    const { width, height, left, top } = EDGE_DICT[nearestEdge];

    dispatch(
      resize({
        viewId: idViewBeingResized,
        width,
        height,
        left,
        top,
      })
    );
  };

  const handleCanvasMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isViewBeingResized) processResize(e);
    else if (isViewBeingMoved) processMove(e);
    else {
      if (selectedViewID) detectProximity(e);
      processHover(e);
    }
  };

  const handleCanvasMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    const foundView = findViewContainedInEvent(e);
    if (!foundView) {
      dispatch(changeSelectedView(null));
      return;
    }
    const { x, y } = adjustRelativePoint(e);
    setCursorOffsetRelativeToView({
      x: x - foundView.rect.left,
      y: y - foundView.rect.top,
    });
    if (nearestEdge !== EEdge.NONE) setIsViewBeingResized(true);
    else setIsViewBeingMoved(true);
    dispatch(changeSelectedView(foundView.id));
  };

  const handleMouseUp = () => {
    setIsViewBeingMoved(false);
    setIsViewBeingResized(false);
    setCursorOffsetRelativeToView({
      x: 0,
      y: 0,
    });
  };
  return (
    <div
      ref={canvas}
      style={{
        width: '100%',
        height: '100%',
        border: '1px solid black',
        borderRadius: '12px',
        overflow: 'hidden',
        position: 'relative',
        cursor: cursor,
      }}
      onMouseMove={handleCanvasMouseMove}
      onMouseDown={handleCanvasMouseDown}
      onMouseUp={handleMouseUp}
    >
      {Object.keys(layer.views).map((viewKey) => {
        const view = layer.views[viewKey];
        return (
          <CanvasElement
            key={viewKey}
            isSelected={view.id === selectedViewID}
            isHovered={view.id === hoveredViewID}
            data={view}
          />
        );
      })}
    </div>
  );
};

export default Canvas;
