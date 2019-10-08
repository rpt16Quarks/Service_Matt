import React from 'react';
import queryString from 'query-string';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'default',
      images: []
    };
  }

  componentDidMount() {
    const params = queryString.parse(this.props.location.search);
    console.log(params);
    fetch(`/images?id=${params.prod_id}`, {
      method: 'get'
    })
      .then(response => response.json())
      .then(jsonData => {
        console.log(jsonData);
        this.setState(jsonData);
      });
  }

  render() {
    return <p>Product Name: {this.state.name}</p>;
  }
}

export default App;