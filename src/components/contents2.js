import React from "react";
import styled from 'styled-components';

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

function Contents2 (){
    return (
       <div>
        <Container1>
        <ImageBox>
          <Image src="/images/ax.png" alt="Image 6" />
        </ImageBox>
        <ImageBox>
          <Image src="/images/ag.jpg" alt="Image 6" />
        </ImageBox>
        <ImageBox>
          <Image src="/images/k.jpg" alt="Image 6" />
        </ImageBox>
        <ImageBox>
          <Image src="/images/ad.png" alt="Image 6" />
        </ImageBox>
        <ImageBox>
          <Image src="/images/am.png" alt="Image 6" />
        </ImageBox>
        <ImageBox>
          <Image src="/images/at.png" alt="Image 6" />
        </ImageBox>
        <ImageBox>
          <Image src="/images/al.png" alt="Image 6" />
        </ImageBox>
        <ImageBox>
          <Image src="/images/av.png" alt="Image 6" />
        </ImageBox>
        <ImageBox>
          <Image src="/images/an.png" alt="Image 6" />
        </ImageBox>
        </Container1>
       </div>
    );
}

export default Contents2;