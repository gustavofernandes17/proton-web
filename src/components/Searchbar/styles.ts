import styled from "styled-components";

export const Searchbar = styled.input`
  height: 32px;
  width: 250px;
  border-radius: 25px;
  outline: none;

  max-width: 350px;
  border: solid 1px #ccc;
  padding: 0 15px;

  font-weight: 500;

  transition: 0.5s;
  :focus {
    border-radius: 5px;
  }
`;
