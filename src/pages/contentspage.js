import React, { useState } from 'react';
import Header from '../components/header';
import List from '../components/list';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ContainerBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 90px;
  margin-top: 70px;
`;

const Text1 = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Text2 = styled.p`
  font-size: 15px;
  margin-bottom: 20px;
`;

const ContainerWrapper = styled.div`
  display: flex;
  font-weight: bold;
  flex-direction: column;
  
`;

const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 1060px;
  height: 500px;
  background: #e4e4e4;

`;

const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 350px;
  background: #ffffff;
  margin-left: 90px;
  margin-top: 70px;
  cursor: pointer; 
`;

const AdverTise = styled.div`
  display: flex;
  flex-direction: column;
  width: 462px;
  height: 600px;
  background: #e4e4e4;
`;

const ContentPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // 현재 슬라이드의 인덱스를 추적

  const images = [
    '/images/aa.png',
    '/images/a1.png',
    '/images/a2.png',
    '/images/a3.png',
    '/images/a4.png',
    '/images/a5.png',
  ];

  const handleImageClick = (index) => {
    setCurrentSlide(index); // 클릭한 이미지의 인덱스를 현재 슬라이드로 설정
  };

  return (
    <div>
      <Header />
      <ContainerBox>
        <List />
        <ContainerWrapper>
          <Container1>
          
            <ImageBox>
              <Carousel
                selectedItem={currentSlide} // 현재 슬라이드의 인덱스를 선택된 항목으로 설정
                showThumbs={false}
                autoPlay={false} // 자동 재생 비활성화
                infiniteLoop={false} // 무한 루프 비활성화
                onClickItem={handleImageClick} // 이미지 클릭 시 핸들러 호출
              >
                {images.map((image, index) => (
                  <div key={index}>
                    <Image src={image} alt="Image" />
                  </div>
                ))}
              </Carousel>
            </ImageBox>
            <TextBox>
            <Text1>주식투자 성공 꿀팁!</Text1>
              <Text2>1. 주식투자의 원칙 지키기</Text2>
              <Text2>2. 많은 정보 수집하기</Text2>
              <Text2>3. 본전에 대한 집착 버리기</Text2>
              <Text2>4. 투자의 정석은 분산투자!</Text2>
              <Text2>5. 현금 보유 비중 유지하기</Text2>
            </TextBox>
          </Container1>
        </ContainerWrapper>
        <AdverTise>광고</AdverTise>
      </ContainerBox>
    </div>
  );
};

export default ContentPage;
