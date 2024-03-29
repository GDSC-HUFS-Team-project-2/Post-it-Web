import styles from "../Login.module.css";
import styled from "styled-components";
import undo from './undo.png';
import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";
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
  padding: 9px;
  color: #e73a3a;
  text-align: left;
  padding-left:7.5vh;
`;


function LoginPage(props){
  
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error, setError]=useState(null);
  const navigate=useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/login', {
        user_email: email,
        user_pw: password,
      });
      if (response.data.note_exist) {
        props.setIsLoggedIn(true);
        navigate(`/note/${response.data.user_id}`, {
          state: {
            user_id: response.data.user_id,
            isLoggedIn: true
          }
        });
      } else {
        navigate(`/note/${response.data.user_id}/make`);
      }
    } catch (error) {
      setError("ID/PW를 다시 확인해주세요.");
    }
  };

  return(
    <Background>
      <Wrap>
        <Header>
          <HeaderRow>
          <div id="menuBar2">
        <div><Link to={props.undo}><button id="undo"><img src={undo} alt="Undo"></img></button></Link></div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;</div><Title>로그인</Title>
        <div></div>
    </div>
          
        </HeaderRow>
        </Header>
<div className={styles.center}>
    <h2 className={styles.noteowner}>이메일</h2>
    <form onSubmit={handleSubmit}>
      <p>
        <input type="text" className={styles.textbox} placeholder='이메일을 입력해주세요.' value={email} onChange={(e)=>{
          setEmail(e.target.value);
        }}/>
      </p>
      <h2 className={styles.noteintroduce}>비밀번호</h2>
      <p>
        <input type="password" className={styles.textbox} placeholder='비밀번호를 입력해주세요.' value={password} onChange={(e)=>{
          setPassword(e.target.value);
        }}/>
      </p>
      <div>{error && <Caution>{error}</Caution>}</div>
      <div className={styles.under}>
        <br></br>
        <div>
          <Button type="submit">
            {props.text1}
          </Button>
        </div>
      </div>
    </form>
  </div>
  <div className={styles.under}>
    <div><Link to={props.go2}><Button2>{props.text2}</Button2></Link></div>
  </div>
    </Wrap>
    </Background>
  )
  
};

function Login(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return(
<LoginPage text1="로그인" go2="/signup" text2="회원가입" undo="../" isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></LoginPage>
  );
}

export default Login;
