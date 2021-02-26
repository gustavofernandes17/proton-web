import styled from 'styled-components'; 

export const Container = styled.div`
    height: auto;
    display: flex; 

    flex-direction: column;
    

`;

export const Information  = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 60vw;
    min-width: 100px;
    height: auto;
    padding: 25px 0;
`;

export const Cover = styled.img`
    height: 250px;
    width: 100%;
    object-fit:cover;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 60vw;
    height: auto;
    padding: 25px 0;

    text-align: justify;

`;
export const Title = styled.h1`
    font-size: 2.5rem;
`;
export const Topic = styled.span`
    color: #898989;
`;

export const Comment = styled.div`
    display: flex;

    flex-direction: column;
    width: 60vw;
    align-self: center;
    height: auto;
    min-height: 100px;
    border-bottom: 1px solid #e1e1e1; 
`;

export const CommentHeader = styled.div`
    height: 60px; 
    display: flex;
    align-items: center;
    justify-content: flex-start; 
    padding: 0 10px; 
    width: 100%;
`

export const CommentSection = styled.div`
    width: 60vw;
    height: auto; 
    align-self: center;
    margin: 25px 0;
    display: flex;
    flex-direction: column;

`

export const NameWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-left: 10px;
`; 

export const NameTitle = styled.div`
    font-size: 1rem; 

`;

export const Caption = styled.div`
    font-size: .8rem;
    width: 300px;
    color: #898989;
`; 

export const CommentContent = styled.p`
    padding: 0 55px;
    font-size: 14px;
`

export const ButtonSecondary = styled.button`
    width: 250px;
    height: 40px; 
    align-self: center ;
    border-radius: 5px; 
    border: 1px solid #e1e1e1;
    background: none;
    cursor: pointer;
    outline: none;
    color: #898989;
    transition: .5s;
    font-size: 1rem;
    :hover {
        color: #000;
        border-color: #000; 
    }
    margin-bottom: 20px;
`
