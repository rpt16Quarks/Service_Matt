import React from 'react';
import queryString from 'query-string';
import styled from 'styled-components';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'default',
      images: [{
        small: '',
        large: ''
      }]
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
        this.setState({
          name: jsonData.name,
          images: jsonData.images
        });
      });
  }

  
  render() {
    const imgString = this.state.images[this.state.images.length - 1];
    console.log(imgString);
    return (
      <div>
        <p>Product Name: {this.state.name}</p>
        <Container>
          <MainPhotoDiv>
            <LargeImg src={imgString.large}></LargeImg>
          </MainPhotoDiv>
          <PhotoPickerDiv>
            <img src={imgString.small}></img>
          </PhotoPickerDiv>
        </Container>
      </div>
    );
  }
}

export default App;

const Container = styled.div`
  width: 500px;
  background: #f8f8f8;
`;

const MainPhotoDiv = styled.div`
  border: 1px solid #ccc;
  background-color: white;
  min-width: 500px;
  max-height: 500px;
`;

const LargeImg = styled.img`
  width: 100%;
`;

const PhotoPickerDiv = styled.div`
  height: 79px;
  margin-top: 20px;
`;