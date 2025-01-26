import { IPoint, IRect } from '@globalTypes/types';

export function calculateTopLeftResize(view: IRect, point: IPoint): IRect {
  return {
    width: view.width + view.left - point.x,
    height: view.height + view.top - point.y,
    left: point.x,
    top: point.y,
  };
}

export function calculateTopRightResize(view: IRect, point: IPoint): IRect {
  return {
    width: point.x - view.left,
    height: view.height + view.top - point.y,
    left: view.left,
    top: point.y,
  };
}

export function calculateBottomLeftResize(view: IRect, point: IPoint): IRect {
  return {
    width: view.width + view.left - point.x,
    height: point.y - view.top,
    left: point.x,
    top: view.top,
  };
}

export function calculateBottomRightResize(view: IRect, point: IPoint): IRect {
  return {
    width: point.x - view.left,
    height: point.y - view.top,
    left: view.left,
    top: view.top,
  };
}

export function calculateTopResize(view: IRect, point: IPoint): IRect {
  return {
    width: view.width,
    height: view.height + view.top - point.y,
    left: view.left,
    top: point.y,
  };
}

export function calculateLeftResize(view: IRect, point: IPoint): IRect {
  return {
    width: view.width + view.left - point.x,
    height: view.height,
    left: point.x,
    top: view.top,
  };
}

export function calculateRightResize(view: IRect, point: IPoint): IRect {
  return {
    width: point.x - view.left,
    height: view.height,
    left: view.left,
    top: view.top,
  };
}

export function calculateBottomResize(view: IRect, point: IPoint): IRect {
  return {
    width: view.width,
    height: point.y - view.top,
    left: view.left,
    top: view.top,
  };
}

export function calculareNoneEdgeResize(view: IRect): IRect {
  return {
    width: view.width,
    height: view.height,
    left: view.left,
    top: view.top,
  };
}
