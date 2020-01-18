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
    <div>this.movies.genres.map(data=> <ul>
<li>data</li>
      </ul>) </div>
    </div>
  );
};

export default Movies;
