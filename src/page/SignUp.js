import React from "react";
import styles from "../Login.module.css";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import undo from './undo.png';
import { Link } from "react-router-dom";



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
function SignUp(props){


  return(
      <div className={styles.threehalf}>
      <div className={styles.yellowBackground}></div>
      <div className={styles.right}>
        <div className={styles.top}>
          <div id="menuBar">
        <div><Link to={props.undo}><button id="undo"><img src={undo}></img></button></Link></div>
        <h1 className={styles.h1AfterLogin}>회원가입</h1>
        <div></div>
    </div>
        </div>
        <div className={styles.center}>
          <h2 className={styles.noteowner}>이메일</h2>
          <form>
          <p>
          <input type="text" className={styles.textbox} placeholder='이메일을 입력해주세요.' onChange={
      (ele)=>{
        console.log(ele.target.value.length)
      }
    }/>
          </p>
          <h2 className={styles.noteintroduce}>비밀번호</h2>
          <p>
          <input type="text" className={styles.textbox} placeholder='비밀번호를 입력해주세요.' onChange={
      (ele)=>{
        console.log(ele.target.value.length)
      }
    }/>
          </p>
          </form>
        </div>
        <div className={styles.under}>
          <div><Link to={props.go2}><Button>{props.text2}</Button></Link></div>
        </div>
        <div className={styles.under}>
          <div><Link to={props.go1}><Button>{props.text1}</Button></Link></div>
        </div>
      </div>
      <div className={styles.yellowBackground}></div> 
    </div>
  )
}

function App(){
  return(
    <SignUp go1="/Login" text1="로그인" go2="/SignUpSuccess" text2="회원가입" undo="../"></SignUp>
  );
}
export default App;