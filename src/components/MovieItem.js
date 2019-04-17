import React from 'react';

const MovieItem = (props) => {
  return (
    <div>
      <h3>{props.movie.title}</h3>
      <a href="#" onClick={() => props.onMovieSelect(props.movie)}>
        <img src={`https://image.tmdb.org/t/p/w185/${props.movie.poster_path}`} alt={props.movie.title} />
      </a>
    </div>
  );
};

export default MovieItem;
