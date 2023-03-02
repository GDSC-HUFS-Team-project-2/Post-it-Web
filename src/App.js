import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";

const Note = lazy(() => import("./page/Note.js"));
const Post = lazy(() => import("./page/Post.js"));

function App() {
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
  );
}

export default App;
