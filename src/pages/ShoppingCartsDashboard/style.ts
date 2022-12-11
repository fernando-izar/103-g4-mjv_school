import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: var(--color-secondary);
  width: 100vw;
  height: 100vh;

  .main-content {
    width: 85%;
    height: 63vh;

    .back-to-dashboard {
      width: 115px;
      height: 25px;
      background: #000000;
      padding: 10px;
      text-align: center;
      border-radius: 5px;
      color: white;
      font-weight: bold;
      line-height: 25px;
      margin-left: 5px;
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
