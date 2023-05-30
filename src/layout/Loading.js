/*eslint-disable */
import React from 'react';
import styled from 'styled-components';
import Spinner from '../assets/images/spinner.gif';

// styled-components
const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.div`
    font-family: 'HSSaemaul-Regular';
    font-size: larger;
    margin-top: 12px;
`;

export default() => {
    return (
      <Background>
        <img src={Spinner} alt="로딩중" width="4%" />
        <LoadingText>로딩중...</LoadingText>
      </Background>
    );
};