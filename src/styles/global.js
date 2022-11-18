import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --Color-primary: #8C477E;
        --Color-primary-gradient: #102542
    }

    
* {
    margin: 0;
    box-sizing: border-box;
}

button {
    cursor: pointer;
}

ul, ol, li {
    list-style: none;
    margin: 0px;
    padding: 0px;

}

a, u {
    text-decoration: none;
}

`;
