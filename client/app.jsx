import React from 'react';
import queryString from 'query-string';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ImageList from './components/imageList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'default',
      images: [{
        small: '',
        large: '',
      }],
      selected: null,
    };
    this.selectImage = this.selectImage.bind(this);
  }

  componentDidMount() {
    const { location: { search } } = this.props;
    const params = queryString.parse(search);
    console.log(params);
    fetch(`/images?id=${params.prod_id}`, {
      method: 'get',
    })
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        this.setState({
          name: jsonData.name,
          images: jsonData.images,
        });
      });
  }

  selectImage(e) {
    const imageID = Number(e.target.id);
    this.setState({
      selected: imageID,
    });
  }

  render() {
    const { images, name, selected } = this.state;
    const imgString = images[images.length - 1];
    console.log(imgString);
    return (
      <div>
        <p>
          Product Name:
          {name}
        </p>
        <Container>
          <MainPhotoDiv>
            <LargeImg src={imgString.large} />
          </MainPhotoDiv>
          <PhotoPickerDiv>
            {/* <img alt="small_product_image" src={imgString.small} /> */}
            <ImageList images={images} selectImage={this.selectImage} selected={selected} />
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
  text-align: center;
`;

App.propTypes = {
  location: PropTypes.string.isRequired,
};
