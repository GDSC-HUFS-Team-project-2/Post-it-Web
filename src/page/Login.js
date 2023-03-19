import styles from "../Login.module.css";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import undo from './undo.png';
import { Link } from "react-router-dom";
import data from "../example_data/note_user_id.json";
import { useEffect, useState } from "react";
import './style.css';
import axios from 'axios';



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
  margin-left:50px;
  font-size: 30px;
  font-weight: bold;
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

const Button2 = styled.button`
  font-size: 150%;
  background-color:#ffffff;
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

const Caution = styled.div`
  font-size: 1rem;
  font-family: Verdana;
  width: 400px;
  padding: 10px;
  color: #e73a3a;
  text-align: left;
`;


function Login(props){
  const navigate=useNavigate();
  
  const [email,setEmail]=useState('');
  const [pw,setPw]=useState("");

  const checkUser=()=>{
    //if(email===""||pw===""){
      //<Caution>ID/PW를 다시 확인해주세요.</Caution>
      //return;
    //}
    axios
  .post('http://localhost:1337/api/auth/local', {
    user_email: email,
    user_pw:pw
  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User token', response.data.jwt);
    localStorage.setItem("token",response.data.jwt);
    navigate('/',{replace:true});
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });
  }

  useEffect(()=>{
    if (localStorage.getItem("token")){
      navigate('/',{replace:true});
    }
  })
 

  return(
    <Background>
      <Wrap>
        <Header>
          <HeaderRow>
          <div id="menuBar2">
        <div><Link to={props.undo}><button id="undo"><img src={undo}></img></button></Link></div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><Title>로그인</Title>
        <div></div>
    </div>
          
        </HeaderRow>
        </Header>
        <div className={styles.center}>
          <h2 className={styles.noteowner}>이메일</h2>
          <form>
          <p>
          <input type="text" className={styles.textbox} placeholder='이메일을 입력해주세요.' value={email} onChange={(event)=>{
            setEmail(event.target.value);
          }}/>
          </p>
          <h2 className={styles.noteintroduce}>비밀번호</h2>
          <p>
          <input type="text" className={styles.textbox} placeholder='비밀번호를 입력해주세요.' value={pw} onChange={(event)=>{
            setPw(event.target.value);
          }}/>
          </p>
          </form>
        </div>
        <br></br>
        <div className={styles.under}>
          <div><Link to={props.go1}>
            <Button onclick={()=>{checkUser();}}>
              {props.text1}
            </Button>
            </Link></div>
        </div>
        <div className={styles.under}>
          <div><Link to={props.go2}><Button2>{props.text2}</Button2></Link></div>
        </div>
    </Wrap>
    </Background>
  )
  
};

function App(){
  return(
<Login go1="/note/:user_id/make" text1="로그인" go2="/signup" text2="회원가입" undo="../"></Login>
  );
}

export default App;
