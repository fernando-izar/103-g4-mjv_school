import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 133px;
  height: 127px;
  width: auto;
  margin-bottom: 80px;

  background: #1E1E1E;
  .search-box {
    position: relative;
    display: flex;
    width: 100%;
    max-width: 1256px;

    input {
      width: 620px;
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
  }
`;
