import styled, { css } from "styled-components";
import React, { useState } from "react";
import Button from "../components/Button";

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

const CancelButton = styled.button`
  width: 70px;
  background-color: white;
  border: none;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const Introduce = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Line = styled.div`
  height: 5px;
  background-color: #fff1a8;
  border: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  width: 100%;
`;

const ContentInput = styled.textarea`
  width: 460px;
  height: 150px;
  margin-left: 30px;
  margin-top: 20px;
  font-size: 15px;
  padding: 30px;
  border: none;
  border-radius: 30px;
  outline: none;
  font-family: Verdana;
  background-color: #f5f5f5;
  resize: none;
  white-space: pre-wrap;
  ::placeholder {
    color: gray;
  }
`;

const AnonymousBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`;

const AnonymousRow = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-top: 1rem;
  padding-right: 70px;
`;

const ToggleBtn = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (!props.toggle ? "none" : "#FFF1A8")};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;
const Circle = styled.div`
  background-color: white;
  width: 38px;
  height: 38px;
  border-radius: 50px;
  position: absolute;
  left: 5%;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.toggle &&
    css`
      transform: translate(50px, 0);
      transition: all 0.5s ease-in-out;
    `}
`;
const WriterInput = styled.input`
  width: 150px;
  height: 40px;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom: 3px solid #fff1a8;
  font-size: 1.2rem;
  outline: none;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  padding-right: 30px;
`;

const Count = styled.div`
  font-size: 1rem;
  margin: 5px;
  margin-left: 470px;
`;

function Post(props) {
  const [values, setValues] = useState({
    content: "",
    isAnonymous: true,
    writer: "",
  });
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    setDisabled(true);
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    if (values.content.length > 100) {
      alert("내용은 100자 이하로 작성해주세요!");
    }
    if (values.isAnonymous === false && values.writer === "") {
      alert("작성자의 이름을 기재해주세요!");
    }
    setDisabled(false);
  };

  const [toggle, setToggle] = useState(false);
  const clickedToggle = () => {
    setToggle((prev) => !prev);
    setValues({ ...values, [values.isAnonymous]: toggle });
  };

  function Register() {
    alert("노트에 붙이기 성공");
  }

  return (
    <Background>
      <Wrap>
        <Header>
          <HeaderRow>
            <Title>포스트잇 작성하기</Title>
            <CancelButton>취소</CancelButton>
          </HeaderRow>
          <HeaderRow>
            <Introduce>To. 용순</Introduce>
          </HeaderRow>
        </Header>
        <Line />
        <Content>
          <form onSubmit={handleSubmit}>
            <ContentInput
              type="text"
              name="content"
              value={values.content}
              onChange={handleChange}
              maxLength={99}
              placeholder="내용을 작성해주세요"
              multiline={true}
            ></ContentInput>
            <Count>{values.content.length} / 100</Count>
            <AnonymousBox>
              <AnonymousRow>
                <ToggleBtn onClick={clickedToggle} toggle={toggle}>
                  <Circle toggle={toggle} />
                </ToggleBtn>
                <h3>익명으로 설정&nbsp;&nbsp;</h3>
              </AnonymousRow>
              <AnonymousRow>
                {!toggle ? (
                  <WriterInput
                    type="text"
                    name="writer"
                    value={values.writer}
                    onChange={handleChange}
                    placeholder="작성자"
                    maxLength={10}
                  ></WriterInput>
                ) : (
                  <h3>익명</h3>
                )}

                <h3>From.&nbsp;&nbsp;</h3>
              </AnonymousRow>
            </AnonymousBox>
            <ButtonBox>
              <Button
                type="submit"
                disabled={disabled}
                onClick={() => Register()}
              >
                노트에 붙이기
              </Button>
            </ButtonBox>
          </form>
        </Content>
      </Wrap>
    </Background>
  );
}

export default Post;
