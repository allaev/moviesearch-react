import React, { Component } from 'react';
import SearchBar from './SearchBar';
import tmdb from '../api/tmdb';

class App extends Component {
  state = { movies: [] };

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

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
