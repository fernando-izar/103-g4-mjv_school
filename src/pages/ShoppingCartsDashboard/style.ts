import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: var(--color-secondary);
  width: 100vw;
  height: 100vh;

  .main-content {
    width: 85%;
    height: 63vh;
    h1{
      margin-left: 150px;
      margin-bottom: 20px;
    }
    
    .dashboard{
      background-color: white;
      border: solid 1px black;
      display: flex;
      width: 82%;
      padding: 20px;
      border-radius: 10px;
      margin-left: 10%;
    }

    .button-container{
      
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 20%;
      padding: 0 50px 20px 50px;
      border-radius: 10px;
      border: solid 1px var(--color-primary);
    }

    .marketingContainer {
      width: 99%;
    }
  }

  h2 {
    margin-left: 10px;
    margin-top: 5px;
  }
`;
