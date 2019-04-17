import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  onInputChange = event => {
    this.setState({term: event.target.value});
  };

  render() {
    return (
      <div className="searchbar">
        <form onSubmit={this.onFormSubmit}>
          <input value={this.state.term} onChange={this.onInputChange} type="text" placeholder="Enter the movie name" aria-label="Search term" />
          <button type="submit" className="button">Search</button>
        </form>
      </div>
    )
  }
}

export default SearchBar;
