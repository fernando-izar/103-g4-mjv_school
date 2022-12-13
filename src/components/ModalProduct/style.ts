import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.5);

  .modal-product-box {
    width: 400px;
    height: 500px;

    background-color: var(--color-primary);

    box-shadow: 0px 4px 40px -10px;
    border-radius: 4px;
  }
`;
