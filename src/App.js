import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate, Outlet, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import React from 'react';
import styles from "./Login.module.css";
import homestyles from "./Home.module.css"
import ss from "./SignUpSuccess.module.css"
import SignUp from './SignUp';
import Home from './Home';


const Note = lazy(() => import("./page/Note.js"));
const Post = lazy(() => import("./page/Post.js"));



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
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/note/:user_id" element={<Note />}></Route>
          <Route path="/note/:note_id/write" element={<Post />}></Route>
          <Route path="*" element={<div>404</div>}></Route>
        </Routes>
      </Suspense>

    </div>
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


