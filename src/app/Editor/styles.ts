import styled from 'styled-components'; 

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%; 

`
export const Cover = styled.img`
    max-height: 250px;
    object-fit: cover; 
    object-position: 50% 50%;
    width: 100%;
`;

export const FileHeaderContainer = styled.div`
    width: 70vw; 
    align-self: center;
    display: flex;
    flex-direction: column; 
    min-height: 100px;
    height: auto; 
    margin-bottom: 30px;
`;
export const EditableTitle = styled.input`
    border: none;
    font-size: 2.4rem;
    font-weight: 500; 
    outline: none;
    margin: 30px 0 0 0 ;  
`;

export const EditableTopic = styled.input`
    border: none;
    font-size: 1rem; 
    outline: none;

    color: #898989; 
`;
export const Editor = styled.textarea`
    width: 70vw; 
    align-self: center;
    border: none;
    outline: none;
    min-height: 100%;
    font-size: 1rem;
`;