import undo from './undo.png';
import './style.css';
import { Link } from "react-router-dom";

function Top(props){
  return <div>
    <div id="menuBar">
        <div><Link to={props.undo}><button id="undo"><img src={undo}></img></button></Link></div>
        <h1>{props.title}</h1>
        <div></div>
    </div>
    <div></div>
  </div>
}

function Center(){
  return <div id="center">
    <div></div>
    <div>
      <h2 id="h2success">수정 완료!</h2>
      <h3>수정된 노트를 확인하러 가볼까요?</h3>
    </div>
    <div></div>
    
  </div>
}

function Under(props){
  return <div id="under">
    <div></div>
    <div></div>
    <div><Link to={props.gogo}><button>{props.text}</button></Link></div>
  </div>
}

function App() {
  return (
    <div className="threeHalf">
      <div className="yellowBG"></div>
      <div id="UI">
          <Top title="내 노트 수정하기" undo="/EditNote"></Top>
          <Center></Center>
          <Under text="노트 보러가기" gogo=""></Under>
      </div>
      <div className="yellowBG"></div>
    </div>
  );
}

export default App;
