import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
    </div>
    <div>movies.map(movie=>
      <div>{movie.title}</div>
      <div>{movie.time}</div>
    <ul>this.movie.genres.map(data=>
<li>{data}</li>) </ul>
    )</div>
  );
};

export default Movies;
