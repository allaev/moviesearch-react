import React, { Component } from 'react';
import SearchBar from './SearchBar';
import tmdb from '../api/tmdb';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

class App extends Component {
  state = { movies: [], selectedMovie: null  };

  onTermSubmit = async term => {
    const response = await tmdb.get('/movie', {
      params: {
        query: term
      }
    });

    this.setState({
      movies: response.data.results
    });
  };

  onMovieSelect = (movie) => {
    this.setState({ selectedMovie: movie });
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <MovieDetail movie={this.state.selectedMovie} />
        <MovieList onMovieSelect={this.onMovieSelect} movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
