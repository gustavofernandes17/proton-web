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
    

    /* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #e1e1e1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #aaa;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #898989;
}

`;

export default GlobalStyles; 