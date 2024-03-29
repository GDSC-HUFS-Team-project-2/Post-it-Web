import React, { useState, useEffect } from 'react';
import homestyles from "../Home.module.css";
import {Link} from 'react-router-dom';
import styled, { css } from "styled-components";
import post_it from "../assets/post_it.png";
import axios from "axios";


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
const Button = styled.button`
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

function HomePage(props){
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);



  return(
    <Background>
      <Wrap>

      <div className={homestyles.right}>
        <div className={homestyles.top}>
          <img src={post_it} height="200px" width="200px" />
          <h1 className={homestyles.h1}>Post - it</h1>
        </div>
        <div className={homestyles.center}>
        </div>
        <div className={homestyles.under}>
          <div><Link to={props.go1}><Button>{props.text1}</Button></Link></div>
        </div>
        <div className={homestyles.under}>
          <div><Link to={props.go2}><Button>{props.text2}</Button></Link></div>
          <p><Link to="/">개발자 소개</Link></p>
        </div>

      </div>

    </Wrap>
    </Background>
  )
}
function Home(){
  return(
    <HomePage go1="/login" text1="로그인" go2="/signup" text2="회원가입"></HomePage>
    
  );
}

export default Home;