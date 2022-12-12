import styled from "styled-components";

export const BackgroundColor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100vh;

  margin: auto;

  background: linear-gradient(0deg, #8c477e -17.71%, #102542 172.1%);
`;

export const MainContainer = styled.div`
  position: fixed;
  display: flex;
  width: 88%;
  height: 88%;
  background: var(--color-primary);
  border-radius: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 25px;

`;

export const ContainerItens = styled.div`
  display: flex;
  width: auto;
  flex-direction: row;
  img {
    width: 25%;
    display: flex;
    margin-left: 160px;
  }
`;
export const Containerbutton = styled.div`
  display: flex;
  width: 350px;
  justify-content: space-between;
  flex-direction: row;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  
  h1,
  h2,
  h3 {
    font-size: 25px;
    margin-bottom: 20px;
    color: var(--color-text);
    font-weight: normal;
  }
  h1{
    font-size: 30px;
    font-weight: 600;
  }

`;
