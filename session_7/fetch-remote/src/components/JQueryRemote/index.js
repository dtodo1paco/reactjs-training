import React  from 'react';
import jquery from 'jquery'
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
    jquery.ajax({
      url: this.props.url,
      dataType: 'json', // no need to parse
      cache: false,
      success: function(data) {
        this.setState({
          loading: false,
          items: data.items
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
        this.setState({
          loading: false,
          error: err.toString()
        })
      }.bind(this)
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