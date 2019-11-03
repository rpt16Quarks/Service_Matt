import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function MainImage({ image }) {
  return (
    <MainPhotoDiv>
      <LargeImg src={image} />
    </MainPhotoDiv>
  );
}

export default MainImage;

const MainPhotoDiv = styled.div`
  border: 1px solid #ccc;
  background: #f8f8f8;
  background-color: white;
  background-size: contain;
  min-width: 500px;
  height: 500px;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
`;

const LargeImg = styled.img`
  max-width: 500px;
  max-height: 500px;
`;

MainImage.propTypes = {
  image: PropTypes.string.isRequired,
};
