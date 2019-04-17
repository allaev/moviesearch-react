import React from 'react';

const MovieItem = (props) => {
  return (
    <div>
      <h3>{props.movie.title}</h3>
      <img src={`https://image.tmdb.org/t/p/w185/${props.movie.poster_path}`} alt={props.movie.title} />
    </div>
  );
};

export default MovieItem;
