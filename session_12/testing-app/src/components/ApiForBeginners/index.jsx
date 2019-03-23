import React  from 'react';
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      data: []
    };
  }

  handleClick = () => {
    this.setState({loading: true});
    fetch(this.props.url)
      .then(res => res.json())
      .then(
      (result) => {
        this.setState({
          loading: false,
          data: result
        });
      },
      (error) => {
        this.setState({
          loading: false,
          error
        });
      }
    )
      .catch( e => {
        this.setState({loading: false, error: e})
      });
  }

  render() {
    const { error, loading, data } = this.state;
    if (data)
      return (
        <div>
          <button onClick={this.handleClick}>Click me</button>
        </div>
      );

  }
}

export default MyComponent;