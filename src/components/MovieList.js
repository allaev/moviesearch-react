import React from 'react';

import MovieItem from './MovieItem';
import './MovieList.css';

const MovieList = (props) => {
  const renderedList = props.movies.map((movie) => {
    return <MovieItem onMovieSelect={props.onMovieSelect} key={movie.id} movie={movie} />;
  });

  return <div className="list">{renderedList}</div>;
};

export default MovieList;
