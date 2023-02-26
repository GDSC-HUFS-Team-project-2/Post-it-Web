import './App.css';
import React from 'react';
import styles from "./Login.module.css";
import homestyles from "./Home.module.css"
import ss from "./SignUpSuccess.module.css"
import SignUp from './SignUp';
import Home from './Home';
import {
  BrowserRouter,
 Routes,
 Route,
 Link
}from 'react-router-dom'





function SignUpSuccess(){
  return(
    <div className={ss.threehalf}>
      <div className={ss.yellowBackground}></div>
      <div className={ss.right}>
        <div className={ss.top}>
          <h1 className={ss.h1AfterLogin}>회원가입</h1>
        </div>
        <div className={ss.center}>
          <h2 className={ss.noteintroduce}>회원가입 완료!</h2>
        </div>
        <div className={ss.under}>
          <a href='Login.html'><input type="submit" className={ss.button} value="로그인 하러가기"></input></a>
        </div>
      </div>
      <div className={ss.yellowBackground}></div> 
    </div>
  )
}

  
export default function App() {
  return (

<BrowserRouter>
    <div>
      <header>
        <Home>
          <Routes>
        <Route exact path="/" element={SignUp}/>
        <Route path="/signup" element={SignUp}/>
      </Routes>
          </Home>
      </header>
    </div>
</BrowserRouter>
  );
}


