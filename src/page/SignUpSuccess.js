import ss from "../SignUpSuccess.module.css";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'
import styled, { css } from "styled-components";
import React, { useState } from "react";
import undo from './undo.png';
import styles from "../Login.module.css";

const Background = styled.div`
  background-color: #fff1a8;
  height: 100vh;
`;

const Wrap = styled.div`
  background-color: white;
  height: 100%;
  margin: auto;
  width: 600px;
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Title = styled.div`
  padding-left: 80px;
  margin-left:40px;
  font-size: 30px;
  font-weight: bold;
`;
const Button = styled.button`
  margin-top:15vh;
  font-size: 200%;
  background-color: #FFE27A;
  color: black;
  width: 87%;
  height: 7vh;
  border-radius: 10px;
  border-style: hidden;
  transition: 1s;
  font-family: "godic";
  font-weight: 600;
  &:hover {
  background: #ffc800;
  height: 10vh;
  }
`;

function SignUpSuccess(props) {


  return (
    <Background>
      <Wrap>
        <Header>
          <HeaderRow>
          <div id="menuBar2">
        <div><Link to={props.undo}><button id="undo"><img src={undo} alt="Undo"></img></button></Link></div>
        <div>&nbsp;</div><Title>회원가입</Title>
        <div></div>
    </div>
      </HeaderRow>
      </Header>
        <div className={ss.center}>
          <h2 className={ss.noteintroduce}>회원가입 완료!</h2>
        </div>
          <div><Link to={props.go1}><Button>{props.text1}</Button></Link></div>
        


    </Wrap>
    </Background>
  );
}

function App(){
  return(
<SignUpSuccess go1="/login" text1="로그인 하러가기" undo="../"></SignUpSuccess>
  );
}

export default App;