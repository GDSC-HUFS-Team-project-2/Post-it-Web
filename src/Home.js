import * as React from "react";
import homestyles from "./Home.module.css"
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'

export default function Home(){



  return(
    <div className={homestyles.threehalf}>
      <div className={homestyles.yellowBackground}></div>
      <div className={homestyles.right}>
        <div className={homestyles.top}>
          <img src="img/post_it.png" height="200px" width="200px" />
          <h1 className={homestyles.h1}>Post - it</h1>
        </div>
        <div className={homestyles.center}>
        </div>
        <div className={homestyles.under}>
          <a href='makeNote.html'><input type="submit" className={homestyles.button} value="로그인"></input></a>
        </div>
        <div className={homestyles.under}>
          <a href='signUp.html'><input type="submit" className={homestyles.button} value="회원가입"  ></input></a>
          <p><Link to="/signup">개발자 소개</Link></p>
        </div>

      </div>
      <div className={homestyles.yellowBackground}></div> 
    </div>
  )
}