import React from "react";
import styled from 'styled-components';

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 1040px;
  height: 200px;
  background: #E4E4E4;
  margin-right: 50px;
  margin-bottom: 2px;
  padding: 10px;
  z-index: 0;
`;

const ImageBox = styled.div`
  display: flex;
`;

const ImageItem = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 10px;
`;

function Gallery({ detail }) {
  let images = [];

  if (detail === '청년') {
    images = [
      '/images/aa.png',
      '/images/ab.png',
      '/images/ac.png',
    ];
  } else if (detail === '대학교') {
    images = [
      '/images/university1.jpg',
      '/images/university2.jpg',
      '/images/university3.jpg',
    ];
  }

  return (
    <div>
      <Container1>
        <ImageBox>
          {images.map((image, index) => (
            <ImageItem key={index} src={image} alt={`Image ${index}`} />
          ))}
        </ImageBox>
      </Container1>
    </div>
  );
}

export default Gallery;
