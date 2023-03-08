
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
import Login from "./page/Login.js";
import SignUp from "./page/SignUp.js";
import SignUpSuccess from "./page/SignUpSuccess.js";



const Note = lazy(() => import("./page/Note.js"));
const Post = lazy(() => import("./page/Post.js"));
const Home = lazy(() => import("./page/Home.js"));


export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/note/:home" element={<Home />}></Route>
          <Route path="Login" element={<Login />}/>
          <Route path="SignUp" element={<SignUp />}/>
          <Route path="SignUpSuccess" element={<SignUpSuccess />}/>
          <Route path="/note/:user_id" element={<Note />}></Route>
          <Route path="/note/:note_id/write" element={<Post />}></Route>
          <Route path="*" element={<div>404</div>}></Route>
          <Route path="EditNote" element={<EditNote />} />
          <Route path="MakeNote" element={<MakeNote />} />
          <Route path="MakeSuccess" element={<MakeSuccess />} />
          <Route path="EditSuccess" element={<EditSuccess />} />
        </Routes>
      </Suspense>
    </div>

 

  );
}
