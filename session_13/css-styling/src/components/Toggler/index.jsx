import React from 'react';

const alertTypes = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
]

export default class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageType: 'info'
    }
  }
  changeType = type => {
    this.setState({messageType: type})
  }

  render() {
    const { messageType } = this.state;
    const cn = `alert alert-${messageType}`
    return (
      <div>
        <div className={cn} role="alert">
          This is a {messageType} alert—check it out!
        </div>
        <div className="btn-group" role="group" aria-label="Alert types">
          {
            alertTypes.map( type =>
              <button
                key={type}
                type="button"
                className={"btn btn-"+type}
                onClick={() => {this.changeType(type)}}
              >{type}
              </button>
            )
          }
        </div>
      </div>
    )
  }


}