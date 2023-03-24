import React from "react";
import styles from "../Login.module.css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import undo from './undo.png';
import { Link } from "react-router-dom";
import { useState } from "react";
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
  margin-left:40px;
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
  display: ${({ errorMessage }) => errorMessage ? 'block' : 'none'};
`;
function SignUp(props) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

const handleSubmit = async(event) => {
  event.preventDefault();
  if (email.trim() === '' || pw.trim() === '') {
    setErrorMessage("내용을 1자 이상 입력해주세요.");
  } else {
    try {
      setErrorMessage('');
      await register();
      navigate('/SignUpSuccess');
    } catch (error) {
      console.error(error);
      setErrorMessage("회원가입 중 오류가 발생했습니다.");
    }
  }
};

const register = async () => {
  try {
    const response = await axios.post('/signup', { user_email: email, user_pw: pw });
    if (response.data === 'success') {
      return response.data;
    } else {
      throw new Error("회원가입 실패");
    }
  } catch (error) {
    console.error(error);
    throw new Error("서버 오류");
  }
};

  return (
    <Background>
      <Wrap>
        <Header>
          <HeaderRow>
            <div id="menuBar2">
              <div>
                <Link to={props.undo}>
                  <button id="undo"><img src={undo} alt="Undo"></img></button>
                </Link>
              </div>
              <div>&nbsp;</div>
              <Title>회원가입</Title>
              <div></div>
            </div>
          </HeaderRow>
        </Header>
        <div className={styles.center}>
          <h2 className={styles.noteowner}>이메일</h2>
          <form onSubmit={handleSubmit}>
            <p>
              <input type="text" className={styles.textbox} placeholder='이메일을 입력해주세요.' value={email} onChange={(event) => { setEmail(event.target.value); }} />
            </p>
            <h2 className={styles.noteintroduce}>비밀번호</h2>
            <p>
              <input type="password" className={styles.textbox} placeholder='비밀번호를 입력해주세요.' value={pw} onChange={(event) => { setPw(event.target.value); }} />
            </p>
            <div><Caution errorMessage={errorMessage} /></div>
            <div className={styles.under}>
            <br></br>
          <div>
            <Link to={props.go2}><Button>{props.text2}</Button></Link>
          </div>
        </div>
          </form>
        </div>
        <div className={styles.under}>
          <div>
            <Link to={props.go1}>
              <Button2 onClick={register}>{props.text1}</Button2>
            </Link>
          </div>
        </div>
      </Wrap>
    </Background>
  )
}

function App(){
  return(
    <SignUp go1="/login" text1="로그인" go2="/SignUpSuccess" text2="회원가입" undo="../"></SignUp>
  );
}
export default App;