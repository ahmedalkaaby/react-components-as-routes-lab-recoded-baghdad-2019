import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
    <h1>Directors Page</h1>
    {directors.map(director =>
      <div>
        <div>{director.name}</div>
        <ul>{director.movies.map(data =>
          <li>{data}</li>)}</ul>
      </div>)}
    </div>
  );
}

export default Directors
