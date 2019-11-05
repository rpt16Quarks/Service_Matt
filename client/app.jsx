import React from 'react';
import queryString from 'query-string';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ImageList from './components/imageList';
import MainImage from './components/MainImage';
import './styles/button.css';
import './styles/carousel.css';
import './styles/foreground.css';
import './styles/icons.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'default',
      images: [{
        small: '',
        large: '',
      }],
      selected: 0,
      mainIndex: 0,
    };
    this.selectImage = this.selectImage.bind(this);
    this.imageMouseEnter = this.imageMouseEnter.bind(this);
    this.imageMouseLeave = this.imageMouseLeave.bind(this);
    this.changeImage = this.changeImage.bind(this);
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
      mainIndex: imageID,
    });
  }

  imageMouseEnter(e) {
    const imageID = Number(e.target.id);
    this.setState({
      mainIndex: imageID,
    });
  }

  imageMouseLeave() {
    const { selected } = this.state;
    this.setState({
      mainIndex: selected >= 0 ? selected : 0,
    });
  }

  changeImage(e) {

  }

  render() {
    const { images, name, selected, mainIndex } = this.state;
    const imgString = images[mainIndex];
    console.log(imgString);
    return (
      <div>
        <p>
          Product Name:
          {name}
        </p>
        <Container>
          <MainImage image={imgString.large} />
          <PhotoPickerDiv>
            <ImageList
              images={images}
              selectImage={this.selectImage}
              selected={selected}
              mouseEnter={this.imageMouseEnter}
              mouseLeave={this.imageMouseLeave}
            />
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

const PhotoPickerDiv = styled.div`
  height: 79px;
  margin-top: 20px;
  text-align: center;
`;

App.propTypes = {
  location: PropTypes.objectOf(PropTypes.object).isRequired,
};
