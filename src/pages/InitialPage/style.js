import styled from "styled-components";

export const BackgroundColor = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-height: 100vh;

    margin: auto;

    background: linear-gradient(0deg, #8C477E -17.71%, #102542 172.1%);
`

export const MainContainer = styled.div`

    position: fixed;
    display: flex;
    width: 88%;
    height: 88%;
    background: rgba(33, 16, 28, 0.33);


    border-radius: 15px;
    flex-direction: column;
    align-items: flex-start;
    padding: 25px;

    img{
        width: 10%;
        margin-bottom: 25px;
    }
`

export const ContainerItens = styled.div`
    
    display: flex;
    flex-direction: row;

    img{
        width: 25%;
        display: flex;
        margin-left: 160px;
    }
`

export const ContainerText = styled.div`
    
    display: flex;
    flex-direction: column;

    h1 , h2 ,h3 {
        margin-bottom: 20px;
        color: var(--color-text);
        font-weight: normal;
    }
`
