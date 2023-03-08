import ss from "../SignUpSuccess.module.css";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'
import styled, { css } from "styled-components";
import React, { useState } from "react";
import undo from './undo.png';
import styles from "../Login.module.css";


const Button = styled.button`
  font-size: 200%;
  background-color: #FFE27A;
  color: black;
  width: 100%;
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

export default function SignUpSuccess() {
  let navigate=useNavigate();

  return (
    <div className={ss.threehalf}>
      <div className={ss.yellowBackground}></div>
      <div className={ss.right}>
        <div className={styles.top}>
          <div id="menuBar">
        <div><Link to="../"><button id="undo"><img src={undo}></img></button></Link></div>
        <h1 className={styles.h1AfterLogin}>회원가입</h1>
        <div></div>
    </div>
        </div>
        <div className={ss.center}>
          <h2 className={ss.noteintroduce}>회원가입 완료!</h2>
        </div>
        <div className={ss.under}>
          <Button
              onClick={() => {
                navigate("/note/:user_login");
              }}
            >
              로그인 하러가기
            </Button>
        </div>
      </div>
      <div className={ss.yellowBackground}></div>
    </div>
  );
}