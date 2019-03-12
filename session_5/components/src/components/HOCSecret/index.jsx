import React from 'react';

const withSecret = (WrappedComponent) => {
  class HOC extends React.Component {
    handleClick = () => {
      console.log("clicked");
    }
    render() {
      return (
        <WrappedComponent
          {...this.props}
          superSecret={'thesecretoflife'}
          onClick={this.handleClick}
        />
      );
    }
  }
  return HOC;
}

export default withSecret;