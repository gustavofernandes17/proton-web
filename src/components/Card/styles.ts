import styled from 'styled-components';


export const Card = styled.div`
    height: 250px;
    width: 350px;
    border: 1px solid #e1e1e1; 
    border-radius: 8px; 

    align-self: center; 
    display: flex;
    flex-direction: column; 
    align-items: flex-start;
    justify-content: flex-start;
    margin: 10px;
    cursor: pointer;

    :hover {
        border-width: 2px; 
    }

`;

export const CardHeader = styled.div`
    height: 50px; 
    display: flex;
    align-items: center;
    justify-content: flex-start; 
    padding: 0 10px; 
    border-bottom: 1px solid #e1e1e1; 
    width: 100%;
`;

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
export const InfoContainer = styled.div`
    height: 50px; 
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    padding: 10px; 
`;
export const InfoTitle = styled.h5`
    font-size: 1.7rem;
    font-weight: 400; 
    margin-top: 10px; 
`;

export const Paragraph = styled.span`
    padding: 20px 10px;
    overflow: hidden;
    height: 100px; 
    font-size: 13px; 
    text-overflow: ellipsis;
`;