import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Outlet,
  Link,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import React from "react";




const Note = lazy(() => import("./page/Note.js"));
const Post = lazy(() => import("./page/Post.js"));
const Home = lazy(() => import("./page/Home.js"));
const SignUp = lazy(() => import("./page/SignUp.js"));


export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/note/:home" element={<Home />}></Route>
          <Route path="/note/:user_login" element={<Login />}></Route>
          <Route path="/note/:user_id" element={<Note />}></Route>
          <Route path="/note/:user_signup" element={<SignUp />}></Route>
          <Route path="/note/:note_id/write" element={<Post />}></Route>
          <Route path="*" element={<div>404</div>}></Route>
        </Routes>
      </Suspense>
    </div>

 

  );
}
