import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

const Div = styled.div`
  display: flex;
  justify-content: center;
  height: 150px;

  `;

const LogoBox = styled.div`
  margin: 20px;
  margin-right: auto 5px;
`;

const TopBox = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  margin: 15px;
  border-bottom: 2px solid gray;
`;

const InnerBox1 = styled.div` 
margin-right: 10px;
`;

const InnerBox2 = styled.div`
`;

const Text1 = styled.h1`
  font-size: 50px;
  font-weight: bold;
`;

const Text2 = styled.p`
  font-size: 20px;
  font-weight: 540;
`;

const Logo = styled.img` /* Anw 로고 */
  width: 120px;
  height: 120px;
`;

function Header() {
    return (
      <Div>
        <LogoBox>
        <Link to="/">
        <Logo src="/images/Anw.png" alt="로고" />
      </Link>
        </LogoBox>
        
        <TopBox>
          <InnerBox1>
            <Text1>ALLNEWS</Text1>
          </InnerBox1>
          <InnerBox2>
            <Text2>모든 이슈를 담고 있는,</Text2>
          </InnerBox2>   
        </TopBox>
      
      </Div>
    );
  }
  
  export default Header;
  