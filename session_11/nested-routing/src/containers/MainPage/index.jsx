import React, { Component } from 'react';
import './styles.css';

import Persons from '../../components/Persons';
import { Route, Switch, Link } from 'react-router-dom';
import Home from '../../components/Home';
import About from '../../components/About';
import TopicList from '../../components/TopicList';
class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personToView, persons } = this.props;
    return (
      <div className="mainPage row">
        <ul>
          <li><Link to='/persons/'>Persons</Link></li>
          <li><Link to='/topics/'>Topics</Link></li>
        </ul>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Topics" component={TopicList} />
        <Route path="/Topics/:topicId" component={TopicList} />
      </div>
    );
  }
}

export default MainPage;