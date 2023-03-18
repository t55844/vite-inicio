import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import visitorSlicer from './slicer/visitorSlicer';

export const store = configureStore({
  reducer: {
    visitor: visitorSlicer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
