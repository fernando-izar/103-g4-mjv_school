import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --color-text: #FFFFFF;
        --color-backgrond: #ebebeb;
        --color-primary: #8C477E;
        --color-primary-gradient: #102542
    }
    
* {
    margin: 0;
    box-sizing: border-box;


}

body{
    width: 100%;
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

