import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {
        --color-text: #FFFFFF;
        --color-primary: #8C477E;
        --color-primary-gradient: #102542
    }
    
* {
    margin: 0;
    box-sizing: border-box;


}

button {
    cursor: pointer;
}

h1, h2 , h3 {
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

`
