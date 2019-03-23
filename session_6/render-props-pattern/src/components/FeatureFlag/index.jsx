import React from 'react';
import './styles.css';


function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.random() < 0.5 ? false : true);
    }, 1000);
  });
}

class FeatureFlag extends React.Component {
  state = {
    enabled: void 0, // undefined
  }

  async updateFlag () {
    const enabled = await getData(); // maybe select flag or url via props
    console.log("enabled: " + enabled);
    this.setState({ enabled });
  }

  componentDidMount() {
    this.updateFlag()
  }

  render() {
    const { enabled } = this.state;
    if(enabled) return this.props.render();
    else if(enabled === false) return this.props.else();
    else return null; // while enabled is pending
  }
}
export default FeatureFlag;

