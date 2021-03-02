import styled from "styled-components";

export const Searchbar = styled.input`
  height: 32px;
  width: 100%;
  border-radius: 25px;
  outline: none;

  max-width: 350px;
  border: solid 1px #e1e1e1;
  padding: 0 15px;

  font-weight: 500;
  font-size: 0.8rem;

  transition: 0.5s;
  :focus {
    border-color: royalblue;
    border-width: 2px;
    opacity: 0.6;
  }
  ::placeholder {
    color: #ccc;
  }
`;

export const ImageContainer = styled.div`
  width: 400px;
  max-height: 500px;
  min-height: 400px;
  outline: none;
  display: flex;
  margin: 10px;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;

export const ImageHeader = styled.div`
  height: 40px;
  border-bottom: 1px #e1e1e1 solid;
  display: flex;
  width: 100%;
  font-size: 0.9rem;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0 10px;
  font-weight: 600;
`;

export const Image = styled.img`
  height: 60px;
  width: 90px;
  object-fit: cover;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;

  transition: 0.5s;

  :hover {
    opacity: 0.8;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  color: #aaa;
`;

export const Link = styled.a`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #aaa;

  transition: 0.5s;

  :hover {
    color: #2962ff;
  }
`;
