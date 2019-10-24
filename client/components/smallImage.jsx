import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function SmallImage({ image, id, selectImage, selected }) {
  return (
    <ListItem>
      <ImageDiv onClick={selectImage} selected={selected}>
        <StyledImage alt="small_product_image" src={image} id={id} />
      </ImageDiv>
    </ListItem>
  );
}

export default SmallImage;

const ListItem = styled.li`
  display: inline-block;
`;

const ImageDiv = styled.div`
  height: 74px;
  width: 76px;
  margin: 0;
  border: ${({ selected }) => {
    if (selected) {
      return `2px solid #777 !important`;
    } else {
      return `1px solid #CCC`;
    }
  }};
  border-radius: 3px;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
  background-color: #FFF;

  &: hover{
    border: 1px solid #777;
  }
`;

const StyledImage = styled.img`
  vertical-align: middle;
`;

// border: 2px solid #777 !important;
SmallImage.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  selectImage: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};
