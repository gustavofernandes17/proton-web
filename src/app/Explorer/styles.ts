import styled from 'styled-components';

export const Container = styled.div`
    height: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
`;


export const CardContainer = styled.div`
    height: auto; 
    display: flex; 
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;

    padding: 0 15px; 
`;


export const InformationContainer = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding:  25px; 
    align-items: flex-start;
    justify-content: center; 
`; 

export const Title = styled.div`
    font-size: 2rem;
    font-weight: 600;
`;

export const Subtitle = styled.div`
    font-size: .8rem; 
    margin-top: 5px; 
`; 
