
import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container1 = styled.div`
  display: flex;
  align-items: center;
  width: 1060px;
  height: 230px;
  background: #E4E4E4;
  overflow-x: auto;
  overflow-y: hidden;
`;

const ImageBox = styled.div`
  margin: 10px;
`;

const Image = styled.img`
  width: 190px;
  height: 190px;
`;

function Contents2() {
  const imageLinks = [
    "/images/ax.png",
    "/images/ag.jpg",
    "/images/k.jpg",
    "/images/ad.png",
    "/images/am.png",
    "/images/at.png",
    "/images/al.png",
    "/images/av.png",
    "/images/an.png",
  ];

  return (
    <div>
      <Container1>
        {imageLinks.map((src, index) => (
          <ImageBox key={index}>
          <Link to={`/ContentPage${src}`}>
            <Image src={src} alt={`Image ${index}`} />
          </Link>
        </ImageBox>
        
        ))}
      </Container1>
    </div>
  );
}

export default Contents2;
