import React from 'react';

import MovieItem from './MovieItem';

const MovieList = (props) => {
  const renderedList = props.movies.map((movie) => {
    return <MovieItem key={movie.id} movie={movie} />;
  });

  return <div>{renderedList}</div>;
};

export default MovieList;
