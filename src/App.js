
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
import { render } from "react-dom";
import { lazy, Suspense } from "react";
import React from "react";
import EditNote from "./page/EditNote";
import MakeNote from "./page/MakeNote";
import MakeSuccess from "./page/MakeSuccess";
import EditSuccess from "./page/EditSuccess";
import Home from "./page/Home.js";
import Login from "./page/Login.js";
import SignUp from "./page/SignUp.js";
import SignUpSuccess from "./page/SignUpSuccess.js";



const Note = lazy(() => import("./page/Note.js"));
const Post = lazy(() => import("./page/Post.js"));



export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="SignUpSuccess" element={<SignUpSuccess />}/>
          <Route path="/note/:user_id" element={<Note />}></Route>
          <Route path="/note/:note_id/write" element={<Post />}></Route>
          <Route path="*" element={<div>404</div>}></Route>
          <Route path="/note/:user_id/edit" element={<EditNote />} />
          <Route path="/note/:user_id/make" element={<MakeNote />} />
          <Route path="/note/:user_id/makeSuccess" element={<MakeSuccess />} />
          <Route path="/note/:user_id/editSuccess" element={<EditSuccess />} />
        </Routes>
      </Suspense>
    </div>

 

  );
}
