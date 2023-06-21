import React from 'react';
import Header from '../components/header';
import List from '../components/list';
import styled from 'styled-components';
import Contents1 from '../components/contents1';


const ContainerBox = styled.div`
display: flex;
flex-direction: row;
gap: 32px;

`;

const AdverTise = styled.div`
display: flex;
  flex-direction: column;
  width: 462px;
  height: 600px;
  background: #E4E4E4;
`;

function MainPage() {
 
    return (
        <div>
        <Header/>

        <ContainerBox>
        <List>
        </List>
        <Contents1/>
        <AdverTise>광고</AdverTise>
        </ContainerBox>
        
      </div>
    );
  }

export default MainPage;
