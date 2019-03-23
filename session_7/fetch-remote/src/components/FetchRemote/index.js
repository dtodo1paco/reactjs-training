import React  from 'react';
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      items: []
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    fetch(this.props.url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            loading: false,
            items: result.items
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
    const { error, loading, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
        {
          items.map(item => (
            <li key={item.id}>
              {item.name} {item.description}
            </li>
          ))
        }
        </ul>
      );
    }
  }
}

export default MyComponent;