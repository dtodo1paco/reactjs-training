import React, { Component } from 'react';
import './styles.css';
import WrapperList from '../WrapperList';

const LIST = ["one", "two", "three", "four", "five"];


class WrapperConsumer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleEmpty = this.handleEmpty.bind(this);
    this.state = {
      list: null,
    };
  }
  handleEmpty () {
    this.setState({list: null}, console.log("Empty list..."));
  }

  handleClick () {
    this.setState({list: []}, console.log("Fetching data..."));

    setTimeout( () => {
      this.setState({list: LIST}, console.log("data arrived!"))
    }, 3000);  // async fill of list
  }

  render() {
    return (
      <div>
        <WrapperList list={this.state.list} />
        <button onClick={this.handleClick}>Update</button>
        <button onClick={this.handleEmpty}>Empty</button>
      </div>
    );
  }
}

export default WrapperConsumer;
