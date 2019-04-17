import React from 'react';

import './MovieItem.css';

const MovieItem = (props) => {
  return (
    <div onClick={() => props.onMovieSelect(props.movie)} className="item">
      <p>{props.movie.title}</p>
      <img src={`https://image.tmdb.org/t/p/w185/${props.movie.poster_path}`} alt={props.movie.title} />
    </div>
  );
};

export default MovieItem;
