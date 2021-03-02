import styled from "styled-components";

export const Properties = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
`;
export const PropertyWrapper = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const PropertyName = styled.span`
  height: 40px;

  width: 150px;
  color: #aaa;

  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  font-size: 0.9rem;

  display: flex;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const Cover = styled.img`
  max-height: 250px;
  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
`;

export const FileHeaderContainer = styled.div`
  width: 50vw;
  align-self: center;
  display: flex;
  flex-direction: column;
  min-height: 100px;
  height: auto;
  margin-bottom: 30px;
  @media (max-width: 500px) {
    width: 70vw;
  }
`;
export const EditableTitle = styled.input`
  border: none;
  font-size: 2.4rem;
  font-weight: 500;
  outline: none;
  margin: 30px 0 0 0 !important;
  min-height: 2.4rem;
  overflow: hidden;
  ::placeholder {
    color: #ccc;
  }
  color: #1e1e1e;
`;

export const EditableTopic = styled.input`
  border: none;
  font-size: 0.9rem;
  outline: none;
  width: 100%;
  height: 40px;
  color: #898989;
  cursor: pointer;
  border-radius: 5px;
  padding: 0 10px;

  :focus {
    box-shadow: 0px 4px 4px 0px #000000 25%;

    cursor: inherit;
    border: 1px solid #eee;
  }
  ::placeholder {
    color: #ccc;
  }
`;

export const Editor = styled.textarea`
  width: 70vw;
  align-self: center;
  border: none;
  outline: none;
  min-height: 100%;
  font-size: 1rem;
`;
