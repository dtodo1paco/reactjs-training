import React from 'react';
import { Link } from 'react-router-dom';

import { isAuth } from '../../util/storage';

function Header() {
  return (
    <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#nowhere">My App</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to='/'>Home</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to='/countries'>Countries</Link>
          </li>
          <li className="nav-item active">
            {!isAuth() && <Link className="nav-link" to='/login'>Login</Link> }
            {isAuth() && <Link className="nav-link" to='/logout'>Logout</Link> }
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

  );
}


export default Header;