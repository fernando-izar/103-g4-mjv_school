import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 133px;
  height: 127px;
  width: auto;

  background: var(--color-primary);
  .search-box {
    position: relative;
    display: flex;
    width: 100%;
    max-width: 1256px;

    .form {
      display: flex;
      flex-direction: row;
    }

    .search-field {
      width: 420px;
      height: 40px;
      background-color: #fff;
      border-radius: 5px;
      ::placeholder {
        color: black;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
      }
    }

    .search-button {
      background: transparent;
      border: none;
      outline: none;
      margin-left: -33px;
    }
  }
  .button-logout {
    height: 30px;
    width: 50px;
    font-family: "Poppins";
    margin-right: 2%;
  }
`;
