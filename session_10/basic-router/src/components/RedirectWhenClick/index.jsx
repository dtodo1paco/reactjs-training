import React from 'react'
import { Redirect } from 'react-router-dom';

class RedirectWhenClick extends React.Component {
  state = {
    redirect: false
  }

  handleClick = () => {
    this.setState({redirect: true})

  }
  render() {
    const { redirect } = this.state;
    return (
      <React.Fragment>
        <button type="button" onClick={this.handleClick}>Click</button>
        {redirect && <Redirect to={{
          pathname: '/login',
          state: {
            referer: this.props.match.url
            }
        }} />}
      </React.Fragment>
    )
  }
}


export default RedirectWhenClick;
