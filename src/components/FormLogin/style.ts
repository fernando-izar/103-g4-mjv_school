import styled from "styled-components";
import { GlobalStyle } from "../../styles/global";

export const Container = styled.div`
  height: 350px;
  width: 450px;
  border-radius: 6px;
  background-color: var(--color-primary);
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;

  input{
      width: 100%;
      height: 45px;
      border: solid 0px;
      border-radius: 2px;
      color: black;
      ::placeholder{
        color: black;
        display: flex;
        padding-left: 14px;
      }
  }

  form {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    padding-bottom: 25px;

    h1{
        font-size: 25px;
        margin-bottom: 10px;
        color: var(--color-secondary);
      }
    p{
      color: white;
    }
    .eye-control {
      display: flex;
      position: relative;
      flex-direction: row;
      align-items: center;
      width: 100%;
      .eye {
        margin-left: -29px;
        background-color: black;
        
        
        background-color: transparent;
        border: none;
      }
    }


    div {
      
      gap: 12px;

      p {
        display: flex;
        justify-content: center;

        font-family: "Courier New", Courier, monospace;
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 18px;
        color: #868e96;
      }
    }

    .button-login {
      height: 45px;
      width: 100%;
      display: flex;
      justify-content: center;
      background-color: var(--color-secondary);
      border-radius: 3px;
      border: 0px;
      padding: 30px;
      align-items: center;
      font-weight: 600;
    }

    .button-register {
      height: 50px;
      border: 0px;
      text-decoration: underline;
      background-color: transparent;
      color: var(--color-secondary);
      width: fit-content;
      display: flex;
      padding: 30px;
      align-items: center;
    }
  }
`;
