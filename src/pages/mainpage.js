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

function MainPage() {
 
    return (
        <div>
        <Header/>

        <ContainerBox>
        <List>
        </List>
        <Contents1/>
        </ContainerBox>
        
      </div>
    );
  }

export default MainPage;
