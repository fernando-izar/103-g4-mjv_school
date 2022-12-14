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
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;

    box-shadow: 0px 4px 40px -10px;
    border-radius: 4px;
    h1, h2, h3, p{
      color: black;
    }
    h1{

    }
  }
  .div-container{
    width: 380px;
    height: 480px;
    border: solid 1px ;
    border-radius: 6px;
  }
`;
