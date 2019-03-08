import React from 'react';
import './MyComponent';
import SubComponensito from './MySubComponent';

class MyComponent extends React.Component {
  render() {
    return (
      <div className="MyComponent"> Hello from Component
        <SubComponensito />
      </div>
    )
  }
}

export default MyComponent;