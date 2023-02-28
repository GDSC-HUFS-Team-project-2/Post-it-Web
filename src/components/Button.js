import styled from "styled-components";

function Button({ disabled, children }) {
  return <StyledButton disabled={disabled}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  margin: 0;
  width: 500px;
  height: 60px;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 12px;
  border-radius: 10px;
  background: #ffe27a;
  color: black;

  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #f2d674);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #ffe27a);
  }
`;

export default Button;
