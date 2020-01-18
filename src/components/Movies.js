import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
    </div>
    <div>
    <div>this.movies.title</div>
    <div>this.movies.time</div>
    <ul>this.movies.genres.map(data=>
<li>data</li>) </ul>
    </div>
  );
};

export default Movies;
