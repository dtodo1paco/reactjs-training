import React from 'react';
import './styles.css';

import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const url = "/username/" + e.currentTarget[0].value;
    this.props.history.push(url);
  }

  render() {
    return (
      <div className="search-page">
        <form onSubmit={this.handleSubmit}>
          <input ref="userInput" className="search-page__input" type="text" />
          <button type="button" className="search-page__button">Search</button>
        </form>
      </div>
    );
  }
};

export default withRouter(SearchBar);