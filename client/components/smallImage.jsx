import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function SmallImage(props) {
  const { image } = props;

  return (
    <ListItem>
      <ImageDiv>
        <StyledImage alt="small_product_image" src={image} />
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
  border: 1px solid #CCC;
  border-radius: 3px;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
  background-color: #FFF;
`;

const StyledImage = styled.img`
  vertical-align: middle;
`;

// border: 2px solid #777 !important;
SmallImage.propTypes = {
  image: PropTypes.string.isRequired,
};
