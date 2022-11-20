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

body{
    background: var(--color-primary);
}

button {
    cursor: pointer;
}

h1, h2 , h3 {
    font-family: 'Poppins';
    
}

body, input, button{
    font-family: 'Poppins';
    font-size: 1.5rem;
  }


ul, ol, li {
    list-style: none;
    margin: 0px;
    padding: 0px;

}
fieldset, form{
    border:none;
}

a, u {
    text-decoration: none;
}

`
