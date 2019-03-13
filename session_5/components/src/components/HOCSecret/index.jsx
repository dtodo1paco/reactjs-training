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
        >
          <div>some common content</div>
        </WrappedComponent>
      );
    }
  }
  return HOC;
}

export default withSecret;