import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import {
  IActionCreate,
  IActionMove,
  IActionResize,
} from '@globalTypes/actionTypes';

import { generateId } from '@globalUtils/index';

import { EditorState, editorInitialState } from './editorInitialState';

export const editorPath = 'editor';

const initialState: EditorState = editorInitialState;

export const editorSlice = createSlice({
  name: editorPath,
  initialState,
  reducers: {
    addLayer: (state) => {
      const newLayerId = Object.keys(state.layers).length + 1;
      state.layers[newLayerId] = {
        views: {},
      };
    },
    changeCurrentLayer: (state, action: PayloadAction<number>) => {
      state.currentLayer = action.payload;
    },
    changeHoveredView: (state, action: PayloadAction<string | null>) => {
      state.hoveredViewID = action.payload;
    },
    changeSelectedView: (state, action: PayloadAction<string | null>) => {
      state.selectedViewID = action.payload;
    },
    move: (state, action: PayloadAction<IActionMove>) => {
      const { viewId, point } = action.payload;
      const currentLayer = state.currentLayer;
      const view = state.layers[currentLayer].views[viewId];
      view.rect.left = point.x;
      view.rect.top = point.y;
    },
    resize: (state, action: PayloadAction<IActionResize>) => {
      const { viewId, width, height, left, top } = action.payload;
      const currentLayer = state.currentLayer;
      const view = state.layers[currentLayer]?.views[viewId];

      if (!view) {
        return;
      }

      // Helper function to constrain values
      const constrainValue = (
        value: number,
        min: number,
        max: number
      ): number => {
        return Math.max(min, Math.min(value, max));
      };

      // Update rectangle dimensions
      const newWidth = left >= view.rect.left + width ? 0 : width;
      const newHeight = top <= view.rect.top + height ? height : 0;

      const newLeft = left >= view.rect.left + width ? view.rect.left : left;
      const newTop = top <= view.rect.top + newHeight ? top : view.rect.top;

      // Update view.rect immutably
      view.rect = {
        ...view.rect,
        width: constrainValue(newWidth, 0, Number.MAX_SAFE_INTEGER), // todo: create state variable of screen size w,f,t,l to replace MAX_SAFE_INTERGER
        height: constrainValue(newHeight, 0, Number.MAX_SAFE_INTEGER),
        left: constrainValue(newLeft, 0, Number.MAX_SAFE_INTEGER),
        top: constrainValue(newTop, 0, Number.MAX_SAFE_INTEGER),
      };
    },
    create: (state, action: PayloadAction<IActionCreate>) => {
      const { view } = action.payload;
      const currentLayer = state.currentLayer;
      const newId = generateId();
      state.layers[currentLayer].views[newId] = view;
    },
  },
});

export const {
  addLayer,
  changeCurrentLayer,
  changeHoveredView,
  changeSelectedView,
  create,
  move,
  resize,
} = editorSlice.actions;

export const editorReducer = editorSlice.reducer;
