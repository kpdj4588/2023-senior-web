import React from 'react';
import styled from 'styled-components';

const DetailListContainer = styled.ul`
  position: absolute;
  top: 16%;
  left: 100%;
  display: flex;
  flex-direction: row;
  background-color: #f0f0f0;
  padding: 8px;
  margin-top: -8px;
  margin-left: 10px;
  z-index: 1;
`;

const DetailItem = styled.li`
  margin: 10px;
  list-style-type: none;
  white-space: nowrap;
`;

function DetailList({ details }) {
  return (
    <DetailListContainer>
      {details.map((detail, index) => (
        <DetailItem key={index}>{detail}</DetailItem>
      ))}
    </DetailListContainer>
  );
}

export default DetailList;
