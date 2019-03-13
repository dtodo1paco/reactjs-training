import React, { Component } from 'react';

class EventHandler extends Component {

  constructor(props){
    super(props);
    this.state = { windowWith: window.innerWidth };
  }
  handleResize = (event) => {
    this.setState({ windowWith: window.innerWidth })
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    return(
      <div>
        <h1>Window Width</h1>
        <h1>{this.state.windowWith}</h1>
      </div>
    )
  }
}

export default EventHandler;
