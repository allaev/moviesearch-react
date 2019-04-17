import React from 'react';
import './MovieDetail.css';

const MovieDetail = ({ movie }) => {
  if (!movie) {
    return <div className='loading'>Loading...</div>
  }

  const reverseDate = (moviedate) => {
    return moviedate.split("-").reverse().join("-");
  }

  return (
    <div className="moviedetail">
      <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="{movie.title}" />
      <h1>{movie.title}</h1>
      <div className="description">
        <span>Original Title: </span>
        <p>{movie.original_title}</p>
      </div>
      <div className="description">
        <span>Release Date: </span>
        <p>{reverseDate(movie.release_date)}</p>
      </div>
      <div className="description">
        <span>Overview: </span>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
