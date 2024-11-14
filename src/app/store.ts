import { configureStore } from '@reduxjs/toolkit';
import { TvShowsReducer } from '../containers/TvShows/TvShowsSlice.ts';


export const store = configureStore({
  reducer:{
    TvShows: TvShowsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;