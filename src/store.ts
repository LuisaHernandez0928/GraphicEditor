import { configureStore } from '@reduxjs/toolkit';

import { editorPath, editorReducer } from '@reducers/editorReducer';

export const store = configureStore({
  reducer: {
    [editorPath]: editorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
