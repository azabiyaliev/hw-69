import { TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { fetchTvShows, search, selectTvShows } from './TvShowsSlice.ts';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';


const TvShows = () => {

  const dispatch = useAppDispatch();
  const TvShows = useAppSelector(selectTvShows);

  const change = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    dispatch(search(value));
  };

  useEffect(() => {
     dispatch(fetchTvShows());
  },[dispatch]);
  console.log(TvShows);

  return (
    <form>
      <TextField
        id="outlined-uncontrolled"
        label="Search for TV shows"
        name="name"
        value={TvShows}
        onChange={change}
      />
      <div className="position-absolute">
        {TvShows}
      </div>
    </form>
  );
};

export default TvShows;