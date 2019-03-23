import React from 'react';
/*
La función de este componente es recoger datos de una URL
remota que me viene dada en propiedades.
Qué información necesita mantener el componente de forma
privada ?
- data

 */
function getData(url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({item: {title: 'a remote item', description: 'fetch from ' + url}});
    }, 2000);
  });
}

class FetchComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }
  componentDidMount()  {
    console.log("lanzo la petición a la url: " + this.props.url);
    getData(this.props.url)
    .then(result => {
        console.log("ya tengo los datos!!! viva vivaaaa!!!");
        this.setState({
          data: result
        });
      })
    .catch( e => {

      })
  }
  render() {
    const { data } = this.state;
    if (!data) return <div>No results yet</div>;
    //return <div>{data}</div>
    return this.props.renderLikeThis(data);
  }

}

export default FetchComponent;