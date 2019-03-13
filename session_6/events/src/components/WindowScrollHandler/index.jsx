import React, { Component } from 'react';

const NUMBERS = Array.from({length: 10000}, (v, k) => Math.floor(Math.random() * (100 + 100 + 100)) - 99 );

class EventHandler extends Component {

  constructor(props){
    super(props);
    this.state = { page: 1, pageSize: 20 };
  }
  handleScroll = (event) => {
    const page = this.state.page;
    const windowHeight = window.innerHeight;
    const scrollTop = document.documentElement.scrollTop;
    if (windowHeight + scrollTop === document.documentElement.offsetHeight) {
      console.log("next page: " + (page+1));
      this.setState({page: page + 1});
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  partialList () {
    const { page, pageSize } = this.state;
    const beginAt = 0; // (page-1) * pageSize;
    const endAt = pageSize* page;
    const partialList = NUMBERS.slice(beginAt, endAt );
    console.log("rendering: " + partialList.length + " elements from " + beginAt + " to " + endAt);
    return partialList;
  }

  render() {
    const partialList = this.partialList();
    return(
      <div>
        <h1>List</h1>
        <ol>
        {
          partialList.map( (item, i) => (
              <li key={i}>{item}</li>
            )
          )
        }
        </ol>
      </div>
    )
  }
}

export default EventHandler;
