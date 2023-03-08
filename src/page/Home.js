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

function Home(props){
  


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
          <div><Link to={props.go1}><Button>{props.text1}</Button></Link></div>
        </div>
        <div className={homestyles.under}>
          <div><Link to={props.go2}><Button>{props.text2}</Button></Link></div>
          <p><Link to="/">개발자 소개</Link></p>
        </div>

      </div>
      <div className={homestyles.yellowBackground}></div> 
    </div>
  )
}
function App(){
  return(
    <Home go1="/Login" text1="로그인" go2="/SignUp" text2="회원가입"></Home>
    
  );
}

export default App;