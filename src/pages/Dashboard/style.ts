import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: var(--color-secondary);
  width: 100vw;
  height: 100vh;
  .main-content {
    width: 85%;
    height: 63vh;
    .marketingContainer {
      width: 99%;
    }
  }
  h2 {
    margin-left: 10px;
    margin-top: 5px;
  }
`;
