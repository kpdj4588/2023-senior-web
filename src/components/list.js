import React, { useState } from 'react';
import styled from 'styled-components';
import DetailList from './detaillist';

const Div = styled.div`
display: flex;
flex-direction: row;
gap: 50px;
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
    { title: '학교', details: ['고등학교', '대학교'] },
    { title: '문화', details: ['음악', '패션'] },
    { title: '여행', details: ['국내여행', '해외여행'] },
    { title: '미용', details: ['코스메틱'] },
    { title: '음식', details: ['요리', '베이킹'] },
    { title: '취미', details: ['스포츠', '영화'] },
    { title: '애완동물', details: ['고양이', '강아지'] },
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

    </Div>
  );
}

export default List;

