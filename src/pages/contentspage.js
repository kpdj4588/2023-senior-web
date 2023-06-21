import React from 'react';
import Header from '../components/header';
import List from '../components/list';
import styled from 'styled-components';




const ContainerBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  

`;

const TextBox = styled.div`
display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

const Text1 = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;


const ContainerWrapper = styled.div` 
  display: flex;
    flex-direction: column;
    
`;

const Container1 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 1060px;
  height: 500px;
  background: #E4E4E4;
  
  
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
width: 330px;
height: 350px;
background: #FFFFFF;
margin-left: 30px;
overflow-x: auto;
  overflow-y: hidden;
`;

const ImageContainer = styled.div`
display: flex;
flex-direction: row;
`;

function ContentPage() {
 

  return (
    <div>
      <Header />
      <ContainerBox>
          <List />
          <ContainerWrapper>
            <Container1>
                <TextBox>
                <Text1>주식투자 성공 꿀팁!</Text1>
                </TextBox> 
                <ImageContainer>
                    <ImageBox>
                    <Image src="/images/aa.png" alt="Image" />
                    </ImageBox>
                <ImageBox>
                    <Image src="/images/aa.png" alt="Image" />
                    <Image src="/images/a1.png" alt="Image" />
                    <Image src="/images/a2.png" alt="Image" />
                </ImageBox>
                <TextBox>
                    <Text1>간단한 설명</Text1>
                </TextBox>
                </ImageContainer>

                </Container1>
                
                    
            
            
      
          </ContainerWrapper>
      </ContainerBox>
    </div>
  );
}

export default ContentPage;
