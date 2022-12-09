import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-text: #FFFFFF;
        --color-backgrond: #ebebeb;
        --color-primary: #111111;
        --color-secondary: #FEF1E9;
        --color-primary-gradient: #102542
    }
    
    @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }



* {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
    background-color:var(--color-secondary)
  }

    button {
        cursor: pointer;
    }

    p, h1, h2 , h3 {
        font-family: 'Poppins';
        
    }

    ul, ol, li {
        list-style: none;
        margin: 0px;
        padding: 0px;

    }

    a, u {
        text-decoration: none;
    }

    .main-content {
        
        
        width: 85%;
        height: 80vh;
    }
    .Container{
    display: flex;
    background-color: var(--color-backgrond);

    }


`;
