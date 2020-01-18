import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
    </div>
    <div>movies.map(movie=>
    <div>this.movie.title</div>
    <div>this.movie.time</div>
    <ul>this.movie.genres.map(data=>
<li>{data}</li>) </ul>
    )</div>
  );
};

export default Movies;
