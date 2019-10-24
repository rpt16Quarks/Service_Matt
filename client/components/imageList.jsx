import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SmallImage from './smallImage';

function ImageList({ images, selectImage, selected }) {
  // const { images } = props;
  const listItems = [];

  for (let i = 0; i < images.length; i += 1) {
    listItems.push(
      <SmallImage
        image={images[i].small}
        id={i}
        selectImage={selectImage}
        selected={selected === i}
      />,
    );
  }

  return (
    <SelectorList>
      {listItems}
    </SelectorList>
  );
}

export default ImageList;

const SelectorList = styled.ul`
  list-style-type: none;
  padding-inline-start: 0px;
`;

ImageList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectImage: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};
