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
  background-color: white;
  min-width: 500px;
  max-height: 500px;
`;

const LargeImg = styled.img`
  width: 100%;
`;

MainImage.propTypes = {
  image: PropTypes.string.isRequired,
};
