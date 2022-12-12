import styled from "styled-components";

export const Container = styled.div`
  height: 780px;
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
    form{
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
    }
    p{
      color:white
    }
    .button-register {
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
        
`;
