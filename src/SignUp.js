import React from "react";
import styles from "./Login.module.css";

function SignUp(){
  return(
      <div className={styles.threehalf}>
      <div className={styles.yellowBackground}></div>
      <div className={styles.right}>
        <div className={styles.top}>
          <h1 className={styles.h1AfterLogin}>회원가입</h1>
        </div>
        <div className={styles.center}>
          <h2 className={styles.noteowner}>이메일</h2>
          <form>
          <p>
          <input type="text" className={styles.textbox} placeholder='이메일을 입력해주세요.'></input>
          </p>
          <h2 className={styles.noteintroduce}>비밀번호</h2>
          <p>
          <input type="text" className={styles.textbox} placeholder='비밀번호를 입력해주세요.'></input>
          </p>
          </form>
        </div>
        <div className={styles.under}>
          <a href='SignUpSuccess.html'><input type="submit" className={styles.button} value="회원가입"></input></a>
        </div>
        <div className={styles.under}>
          <a href='Login.html'><input type="submit" className={styles.button} value="로그인" ></input></a>
        </div>
      </div>
      <div className={styles.yellowBackground}></div> 
    </div>
  )
}

export default SignUp;