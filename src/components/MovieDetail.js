import React from 'react';

const MovieDetail = ({ movie }) => {
  if (!movie) {
    return <div>Loading...</div>
  }

  const reverseDate = (moviedate) => {
    return moviedate.split("-").reverse().join("-");
  }

  return (
    <div>
      <div>
        <h3>{movie.original_title}</h3>
        <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="{movie.title}" />
        <div>Release Date:</div>
        <p>{reverseDate(movie.release_date)}</p>
        <div>Overview:</div>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
