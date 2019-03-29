import React from 'react';
import ErrorBoundary from '../util/ErrorBoundary';
import BuggyCounter from '../BuggyCounter';

class TestError extends React.Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <BuggyCounter />

          <BuggyCounter />

        </ErrorBoundary>
      </div>
    )
  }
}

export default TestError;