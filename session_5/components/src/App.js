import React, { Component } from 'react';

import './App.css';
import ControlledForm from './components/ControlledForm'
import UnControlledForm from './components/UnControlledForm'
import NavBar from './components/StatefulNavBar';
import Button from './components/StatelessButton';
import HistoryMessage from './components/HistoryMessage';
import WrapperConsumer from './components/WrapperConsumer';

import { Hello, PureHello } from './components/PureHello';

const links = [
  {label:'home', href:'/'},
  {label:'contact', href:'/contact'},
  {label:'login', href:'/login'},
];

class App extends Component {
  render() {
    return (
      <div className="App">

      {/**
       <h3>Wrapper</h3>
       <WrapperConsumer />
      **/}
        <PureHello />
        <Hello />
      {/**
        <h3>Pure components</h3>
        <HistoryMessage />


        <h3>Controlled form</h3>
        <ControlledForm />
        <hr/>
        <h3>UnControlled form</h3>
        <UnControlledForm />
        <hr/>
        <h3>Stateful NavBar</h3>
        <NavBar links={links} />
        <h3>Stateless Button</h3>
        <Button type="danger" label="Delete" onClick={() => console.log("button danger clicked")} />
        <Button type="info" label="Send" onClick={() => console.log("button info clicked")} />

        {/** **/}
      </div>
    );
  }
}

export default App;
