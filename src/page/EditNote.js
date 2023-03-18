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
    <div><h2 class="h2div">노트의 주인</h2></div>
    <input type="textbox" id="textbox1" class="textbox" maxLength="12" placeholder="별명/이름을 입력해주세요." onChange={
      (ele)=>{
        console.log(ele.target.value.length)
        if (ele.target.value.length <= 0){
          console.log("내용을 1자이상 입력해주세요")
        } else if (ele.target.value.length >= 12){
          console.log("모든 글자 수를 채웠습니다.")
        }
      }
    }/>
    <span>{0}/12</span>
    <div></div>
    <div><h2 class="h2div">노트 소개</h2></div>
    <input type="textbox" className="textbox" maxLength="30" placeholder="나의 노트를 소개해보세요." onChange={
      (ele)=>{
        console.log(ele.target.value.length)
        if (ele.target.value.length == 0){
          console.log("내용을 1자이상 입력해주세요")
        } else if (ele.target.value.length >= 30){
          console.log("모든 글자 수를 채웠습니다.")
        }
      }
    } />
    <span>{0}/30</span>
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
          <Top title="내 노트 수정하기" undo="../"></Top>
          <Center></Center>
          <Under text="노트 수정하기" gogo="/EditSuccess"></Under>
      </div>
      <div className="yellowBG"></div>
    </div>
  );
}

export default App;
