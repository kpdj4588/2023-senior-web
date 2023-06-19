import React from 'react';
import Header from '../components/header';
import List from '../components/list';
import styled from 'styled-components';
import Contents2 from '../components/contents2';
import Contents3 from '../components/contents3';



const ContainerBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;

`;

const Text1 = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ContainerWrapper = styled.div` 
  display: flex;
    flex-direction: column;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
`;

function DetailPage(props) {
  const { match } = props;
  const detail = match.params.detail;

  return (
    <div>
      <Header />
      <ContainerBox>
          <List />
          <ContainerWrapper>

            <Container>
            <Text1>전체보기</Text1>
            <Contents2/>
            <Text1>{detail}</Text1>
            <Contents3 topic={detail} />
            </Container>
          </ContainerWrapper>
      </ContainerBox>
    </div>
  );
}

export default DetailPage;

