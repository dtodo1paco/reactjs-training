import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import './styles.css';

class Header extends React.Component {
  render() {
    return (
        <header>
          <h1><Link to="/">Home</Link></h1>
          <SearchBar />
        </header>
    );
  }
};

export default Header;