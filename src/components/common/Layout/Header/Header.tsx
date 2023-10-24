'use client';

import { MY_IMAGE } from '@/generated/images';
import { styled } from 'styled-components';

const Container = styled.div`
  width: 100%;
  background-color: white;
  position: fixed;
  height: 50px;
  z-index: 3;
  box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.3);
`;

const Content = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  height: 100%;
  @media screen and (max-width: 1124px) {
    width: 80%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const ImgBox = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-contents: center;
  img {
    height: 20px;
    margin: auto;
    cursor: pointer;
  }
`;

const InputBox = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  input {
    width: 100%;
    border: 0.3px solid #e6e6e6;
    border-radius: 20px;
    padding: 10px;
    padding-left: 20px;
  }
`;

function Header() {
  return (
    <Container>
      <Content>
        <ImgBox>
          <img src={MY_IMAGE.HOME_IMG.NAVBAR} />
        </ImgBox>
        <InputBox>
          <input placeholder="무엇을 하고 놀까요?" type="text" />
        </InputBox>
        <ImgBox>
          <img src={MY_IMAGE.HOME_IMG.CART} />
        </ImgBox>
      </Content>
    </Container>
  );
}

export default Header;
