import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400;500;700;900&display=swap');
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box; 
        font-family: 'Inter','Roboto', sans-serif; 
    }
    body, html, #root, .App {
        height: 100%
    }
    
`;

export default GlobalStyles; 