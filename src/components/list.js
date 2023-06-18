import React, { useState } from 'react';
import styled from 'styled-components';
import DetailList from './detaillist';

const Div = styled.div`
display: flex;
flex-direction: row;
gap: 50px;
`;

const ContainerWrapper = styled.div` 
  display: flex;

`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #dedede;
  width: 130px;
  height: 100%;
  margin-right: 10px;
`;

const ListItem = styled.div`
  height: 26px;
  padding: 15px;
  background-color: #f0f0f0;
  margin: 8px;
  display: flex;
  justify-content: center;
  border-radius: 16px;
  cursor: pointer;
  position: relative;
`;

const Text1 = styled.p` //오늘의 토픽 순위
font-size: 20px;
font-weight: bold;
margin-bottom: 10px;
`;

const Text2 = styled.p` //추천 순위
font-size: 20px;
font-weight: bold;
margin-bottom: 10px;
`;

const Container1 = styled.div`
width: 462px;
height: 250px;
background: #E4E4E4;
margin-right: 50px;
z-index: 0;
`;

const Container2 = styled.div`
width: 580px;
height: 250px;
background: #E4E4E4;
`;

function List() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemHover = (index) => {
    setActiveItem(index);
  };

  const handleItemLeave = () => {
    setActiveItem(null);
  };

  const items = [
    { title: '정책', details: ['경제', '일자리', '청년'] },
    { title: '학교', details: ['초등학교', '중학교', '고등학교', '대학교'] },
    { title: '문화', details: ['Detail 7', 'Detail 8', 'Detail 9', 'Detail 10'] },
    { title: '여행', details: ['Detail 7', 'Detail 8', 'Detail 9', 'Detail 10'] },
    { title: '건강', details: ['Detail 7', 'Detail 8', 'Detail 9', 'Detail 10'] },
    { title: '음식', details: ['Detail 7', 'Detail 8', 'Detail 9', 'Detail 10'] },
    { title: '취미', details: ['Detail 7', 'Detail 8', 'Detail 9', 'Detail 10'] },
    { title: '애완동물', details: ['Detail 7', 'Detail 8', 'Detail 9', 'Detail 10'] },
  ];

  return (
    <Div>
    <ListBox>
      {items.map((item, index) => (
        <ListItem
          key={index}
          onMouseEnter={() => handleItemHover(index)}
          onMouseLeave={handleItemLeave}
        >
          {item.title}
          {activeItem === index && <DetailList details={item.details} />}
        </ListItem>
      ))}
    </ListBox>
    <ContainerWrapper>
        <Container>
          <Text1>오늘의 토픽 순위👑</Text1>
          <Container1></Container1>
        </Container>
        <Container>
          <Text2>추천 이슈👍</Text2>
          <Container2></Container2>
        </Container>
      </ContainerWrapper>
    
    
    </Div>
  );
}

export default List;

