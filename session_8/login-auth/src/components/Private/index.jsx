import React from 'react';
import Button from '../Button';
import Fetch from '../AxiosRemote';

class Private extends React.Component {
  render() {
    return (
      <div> private component for {JSON.stringify(this.props.data)}
        <Fetch url={this.props.url}
          render={(data) => {
            return <div>
              {JSON.stringify(data)}
            </div>
          }}
          error={(error) => <div>{error.message}</div>}
        >
          <Button label="Click here"/>
        </Fetch>

      </div>
    );
  }
}

export default Private;