import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContainerWrapper = styled.div` 
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text1 = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Text2 = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Text3 = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 462px;
  height: 200px;
  background: #E4E4E4;
  margin-right: 50px;
  padding: 15px;
  z-index: 0;
`;

const Container2 = styled.div`
  display: flex;
  width: 484px;
  height: 200px;
  padding: 15px;
  background: #E4E4E4;
  position: relative; 
  overflow: hidden; 
`;

const Container3 = styled.div`
  display: flex;
  align-items: center;
  width: 1060px;
  height: 230px;
  background: #E4E4E4;
  overflow-x: auto;
  overflow-y: hidden;
`;

const SlideBox = styled.div`
  width: 50px;
  height: 100%;
`;

const ImageBox = styled.div`
  margin: 10px;
`;

const Image = styled.img`
  width: 190px;
  height: 190px;
`;

const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const SlideshowImage = styled.img`
  width: 200px;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const Comment = styled.p`
  position: absolute;
  bottom: 40%;
  left: 50%;
  transform: translateX(-9%);
  font-size: 18px;
  font-weight: bold;
  color: #000;
  text-align: center;
  background-color: #ffff;
`;

const P1 = styled.p`
  font-size: 16px;
  margin: 10px; 
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const autoSlideDelay = 5000; // 이미지가 자동으로 슬라이드되는 딜레이(ms)

function Contents1() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/images/q.jpg",
    "/images/ab.png",
    "/images/ax.png",
    "/images/ad.png",
    "/images/ae.png",
    "/images/af.png",
    "/images/ag.jpg",
    "/images/ah.jpg",
    "/images/ai.jpg",
    "/images/aj.png",
    "/images/ak.jpg",
  ];

  const comments = [
    "해외여행 시 필수 준비물✈️",
    "미리 펫샴푸 추천😶‍🌫️",
    "6월의 제철 과일&야채🍎🍌🌽",
    "한적하고 여유로운 여행지 추천",
    "청년 취업 지원하나요⁉️❓",
    "💸주식부자 프로젝트💸",
    "🏙️공공주택 품격을 높이다.",
    "2023 경제정책방향📈",
    "집없이 편안한 제주도 가족여행👩🏻‍👧🏻‍👦🏻",
    "2030 1인가구 관광트렌드는??",
    "경주여행 힐링코스🚗",
  ];

  useEffect(() => {
    // 이미지 슬라이드를 위한 타이머 설정
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoSlideDelay);

    // 컴포넌트 언마운트 시 타이머 클리어
    return () => {
      clearInterval(timer);
    };
  }, [images]);

  return( 
    <div>
      <ContainerWrapper>
        <Container>
          <Text1>오늘의 토픽 순위👑</Text1>
          <Container1>
            <StyledLink to={{ pathname: "/detail/청년", state: { topic: "청년" } }}>
              <P1>1. 청년</P1>
            </StyledLink>
            <StyledLink to={{ pathname: "/detail/대학교", state: { topic: "대학교" } }}>
              <P1>2. 대학교</P1>
            </StyledLink>
            <StyledLink to={{ pathname: "/detail/해외여행", state: { topic: "해외여행" } }}>
              <P1>3. 해외여행</P1>
            </StyledLink>
            <StyledLink to={{ pathname: "/detail/고양이", state: { topic: "고양이" } }}>
              <P1>4. 고양이</P1>
            </StyledLink>
            <StyledLink to={{ pathname: "/detail/베이킹", state: { topic: "베이킹" } }}>
              <P1>5. 베이킹</P1>
            </StyledLink>
          </Container1>
        </Container>

        <Container>
          <Text2>추천 이슈👍</Text2>
          <Container2>
            <SlideContent>
              <StyledLink to={`/ContentPage${images[currentImageIndex]}`}>
                <SlideshowImage src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
              </StyledLink>
              <SlideBox>
                <Comment>{comments[currentImageIndex]}</Comment>
              </SlideBox>
            </SlideContent>
          </Container2>
        </Container>
      </ContainerWrapper>
      <Text3>오늘의 카드 뉴스✅</Text3>
      <Container3>
        <ImageBox>
          <StyledLink to={`/ContentPage${images[0]}`}>
            <Image src="/images/aa.png" alt="Image 1" />
          </StyledLink>
        </ImageBox>
        <ImageBox>
          <StyledLink to={`/ContentPage${images[1]}`}>
            <Image src="/images/ab.png" alt="Image 2" />
          </StyledLink>
        </ImageBox>
        <ImageBox>
          <StyledLink to={`/ContentPage${images[2]}`}>
            <Image src="/images/ac.png" alt="Image 3" />
          </StyledLink>
        </ImageBox>
        <ImageBox>
          <StyledLink to={`/ContentPage${images[3]}`}>
            <Image src="/images/ad.png" alt="Image 4" />
          </StyledLink>
        </ImageBox>
        <ImageBox>
          <StyledLink to={`/ContentPage${images[4]}`}>
            <Image src="/images/ae.png" alt="Image 5" />
          </StyledLink>
        </ImageBox>
        <ImageBox>
          <StyledLink to={`/ContentPage${images[5]}`}>
            <Image src="/images/af.png" alt="Image 6" />
          </StyledLink>
        </ImageBox>
      </Container3>
    </div>
  );
}

export default Contents1;
