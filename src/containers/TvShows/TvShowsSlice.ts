import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store.ts';
import axiosAPI from '../../axiosAPI.ts';

interface TvShowsState {
  title: string;
  isFetching: boolean;
  error: boolean;
}

const initialState: TvShowsState = {
  title: '',
  isFetching: false,
  error: false,
};

export const selectTvShows = (state: RootState) => state.TvShows.title;

export const fetchTvShows = createAsyncThunk("TvShows/fetchTvShows", async () => {
    const {data:TvShows} = await axiosAPI.get(initialState.title);
    return TvShows;
});

export const TvShowsSlice = createSlice({
  name: "TvShows",
  initialState,
  reducers:{
    search: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    }
  },
  extraReducers:(builder) => {
    builder
      .addCase(fetchTvShows.pending, (state) => {
        state.isFetching = true;
        state.error = false;
      })
      .addCase(fetchTvShows.fulfilled, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchTvShows.rejected, (state) => {
        state.isFetching = false;
        state.error = true;
      });

  }
});

export const TvShowsReducer = TvShowsSlice.reducer;
export const {search} = TvShowsSlice.actions;