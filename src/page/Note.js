import styled from "styled-components";
import addIcon from "../assets/addIcon.svg";
import shareIcon from "../assets/shareIcon.svg";
import paper_1 from "../assets/paper_1.png";
import paper_3 from "../assets/paper_3.png";

import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../example_data/note_user_id.json";

const Background = styled.div`
  background-color: #fff1a8;
  height: 100vh;
`;

const Wrap = styled.div`
  background-color: white;
  height: 100%;
  margin: auto;
  width: 600px;
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const LoginButton = styled.button`
  width: 70px;
  background-color: white;
  border: none;
  font-size: 16px;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const Introduce = styled.div`
  font-size: 20px;
`;

const Line = styled.div`
  height: 5px;
  background-color: #fff1a8;
  border: 0;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const PostItBox = styled.div`
  background-image: url(${paper_3});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 270px;
  margin: 20px;
  width: calc(40% - 10px);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Text = styled.div`
  margin-top: 30px;
  margin-right: 180px;
`;

const Writer = styled.div`
  margin-bottom: 30px;
  margin-left: 150px;
`;

const FloatingButtonContainer = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  margin: 0 500px;
`;

const FloatingButton = styled.div`
  background-color: black;
  height: 70px;
  width: 70px;
  margin: 7px 0;
  border-radius: 50%;
  color: white;
`;

const ShareButton = styled(FloatingButton)`
  background-image: url(${shareIcon});
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: center;
`;

const AddButton = styled(FloatingButton)`
  background-image: url(${addIcon});
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: center;
`;

function PostIt(props) {
  return props.data.map((x, i) => {
    return (
      <PostItBox>
        <Text>{x.content_text}</Text>
        <Writer>{x.writer === "" ? "- 익명" : "- " + x.writer}</Writer>
      </PostItBox>
    );
  });
}

function ClipboardCopy(props) {
  const doCopy = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert("클립보드에 복사되었습니다.");
        })
        .catch(() => {
          alert("복사를 다시 시도해주세요.");
        });
    } else {
      if (!document.queryCommandSupported("copy")) {
        return alert("복사하기가 지원되지 않는 브라우저입니다.");
      }

      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.top = 0;
      textarea.style.left = 0;
      textarea.style.position = "fixed";

      document.body.appendChild(textarea);
      // focus() -> 사파리 브라우저 서포팅
      textarea.focus();
      // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      alert("클립보드에 복사되었습니다.");
    }
  };
  return <ShareButton onClick={() => doCopy(props.url)}></ShareButton>;
}

function Note() {
  let navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let [post, setPost] = useState(data);
  const location = useLocation();

  useEffect(() => {
    // 쿠키 가져오기
    // 쿠키 있으면 setIsLoggedIn(true)
    // 쿠키 없으면 setIsLoggedIn(false)

    // 로그인 하지 않았다고 가정
    setIsLoggedIn(false);
  }, [location]);
  if (!isLoggedIn) {
    // 로그인 안한 상태
    return (
      <Background>
        <Wrap>
          <Header>
            <HeaderRow>
              <Title>용순이의 노트</Title>
              <LoginButton>로그인</LoginButton>
            </HeaderRow>
            <HeaderRow>
              <Introduce>
                용순이의 노트입니다. 포스트잇 많이 붙여주세요!
              </Introduce>
            </HeaderRow>
          </Header>
          <Line />
          <Content>
            <PostIt data={post.post_data}></PostIt>
          </Content>
          <FloatingButtonContainer>
            <ClipboardCopy url={location.pathname} />
            <AddButton
              onClick={() => {
                navigate("/note/:note_id/write");
              }}
            />
          </FloatingButtonContainer>
        </Wrap>
      </Background>
    );
  }
}

export default Note;
