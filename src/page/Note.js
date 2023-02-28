import styled from "styled-components";
import addIcon from "../assets/addIcon.svg";
import shareIcon from "../assets/shareIcon.svg";
import paper_1 from "../assets/paper_1.png";

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
  background-color: white;
  border: none;
  font-size: 16px;
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
  padding: 10px;
  width: 100%;
`;

const PostItBox = styled.div`
  background-image: url(${paper_1});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 250px;
  margin: 20px;
  width: calc(40% - 10px);
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

function Note() {
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
          <PostItBox />
          <PostItBox />
          <PostItBox />
          <PostItBox />

          <PostItBox />
          <PostItBox />
          <PostItBox />
          <PostItBox />
          <PostItBox />
          <PostItBox />
          <PostItBox />
          <PostItBox />
          <PostItBox />
          <PostItBox />
          <PostItBox />
          <PostItBox />
        </Content>
        <FloatingButtonContainer>
          <ShareButton />
          <AddButton />
        </FloatingButtonContainer>
      </Wrap>
    </Background>
  );
}

export default Note;
