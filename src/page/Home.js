import homestyles from "../Home.module.css"
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'
import styled, { css } from "styled-components";
import post_it from "../assets/post_it.png"


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

export default function Home(){
  let navigate=useNavigate();
  


  return(
    <div className={homestyles.threehalf}>
      <div className={homestyles.yellowBackground}></div>
      <div className={homestyles.right}>
        <div className={homestyles.top}>
          <img src={post_it} height="200px" width="200px" />
          <h1 className={homestyles.h1}>Post - it</h1>
        </div>
        <div className={homestyles.center}>
        </div>
        <div className={homestyles.under}>
          <Button
              onClick={() => {
                navigate("/note/:user_login");
              }}
            >
              로그인
            </Button>
        </div>
        <div className={homestyles.under}>
          <Button
              onClick={() => {
                navigate("/note/:user_signup");
              }}
            >
              회원가입
            </Button>
          <p><Link to="/">개발자 소개</Link></p>
        </div>

      </div>
      <div className={homestyles.yellowBackground}></div> 
    </div>
  )
}