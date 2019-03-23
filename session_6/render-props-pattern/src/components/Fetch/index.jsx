import React from 'react';
import './styles.css';

function getData(url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({item: {title: 'a remote item', description: 'fetch from ' + url}});
    }, 2000);
  });
}

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: void 0, // undefined
      error: void 0, // undefined
      loading: false,
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.url && this.props.url !== prevProps.url){
      this.fetchData(this.props.url);
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      this.setState({ loading: true });
      const response = await getData(this.props.url);
      this.setState({ data: response });
      this.setState({ loading: false });
    }
    catch (err) {
       this.setState({ error: err })
    }
  }

  render() {
    const { error, data, loading } = this.state;
    if (loading) return <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    if (error) return this.props.error(error);
    if (data) return this.props.render(data);
    else return null;
  }
}

export default Fetch;

