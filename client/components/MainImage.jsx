import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function MainImage({ image, changeImage, numOfImages, selected }) {
  return (
    <MainPhotoDiv className="carousel carousel_container">
      <button id="prev" onClick={changeImage} className="carousel__control carousel__control--prev" aria-label="Previous Slide - Top Products" disabled={selected === 0}>
        <svg aria-hidden="true" className="icon icon--chevron-left-small" focusable="false">
          <use href="#icon-chevron-left" />
        </svg>
      </button>
      <LargeImg src={image} />
      <button id="next" onClick={changeImage} className="carousel__control carousel__control--next" aria-label="Next Slide - Top Products" disabled={selected === numOfImages - 1}>
        <svg aria-hidden="true" className="icon icon--chevron-right-small" focusable="false">
          <use href="#icon-chevron-right" />
        </svg>
      </button>
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

const ButtonLeft = styled.button`
  opacity: 0.3 !important;
`;

MainImage.propTypes = {
  image: PropTypes.string.isRequired,
  changeImage: PropTypes.func.isRequired,
  numOfImages: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
};
