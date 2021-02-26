import styled from 'styled-components'

export const Container = styled.div`
    padding: 12px;
    display: flex;
    height: calc(100% - 60px); 
    align-items: center;
    justify-content: center; 
    flex-direction: column;
`; 

export const Header = styled.div`
    width: 100%; 
    display: flex;
    height: 60px; 
    align-items: center;
    justify-content: center; 
    border-bottom: 1px solid #e1e1e1; 
    padding: 10px;
`

export const Form = styled.div`
    height: 60vh;
    max-width: 400px;
    border: solid #e1e1e1 1px;
    border-radius: 10px; 
    
    display: flex;
    flex-direction: column;

    align-items: center; 
    justify-content: space-evenly; 
`;  

export const Subtitle = styled.span`
    font-size: 1rem;
    color: #898989;
    padding: 10px 20px; 
    text-align: center;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`;

export const Caption = styled.span`
    font-size: .7rem;
    width: 300px;
    text-align: center; 
    margin: 10px 0; 
    color: #898989;
`

export const Title = styled.div`
    font-weight: 800; 
    font-size: 2.5rem;

`;



export const ButtonPrimary = styled.button`
    height: 40px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    background-color: #000;
    color: white; 
    border: none; 
    border-radius: 5px; 

    font-size: 1rem; 
  
    font-weight: 500;

    transition: .5s;
    outline: none; 

    :hover {
        border: 1px solid black; 
        background-color: #fff; 
        color: #000; 
    }
`;