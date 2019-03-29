import React from 'react';
import ErrorBoundary from '../util/ErrorBoundary';

class LazyTestError extends React.Component {
  state = {
    BuggyCounter: null,
  }
  componentWillMount() {
    import('../BuggyCounter/index.jsx')
    .then(
        bcModule => {
          this.setState({BuggyCounter: bcModule.default})
        }
    )
    .catch( e => console.error("Unable to load module: " + e));
  }
  render() {
    const { BuggyCounter } = this.state;
    return (
      <ErrorBoundary>
      {BuggyCounter && <BuggyCounter />}
      {!BuggyCounter && <div>Loading...</div>}
      </ErrorBoundary>
    )
  }
}
export default LazyTestError;