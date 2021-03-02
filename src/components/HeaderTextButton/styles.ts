import styled from "styled-components";

export const HeaderButton = styled.button`
  background: none;
  border: none;
  margin: 0 10px;
  cursor: pointer;
  font-size: 0.8rem;
  outline: none;
  color: #898989;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: 500ms;

  :hover {
    color: #000;
  }
`;
