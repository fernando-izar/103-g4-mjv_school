import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 133px;
  height: 127px;
  width: 100%;
  max-width: 1256px;
  margin-bottom: 80px;

  background: #393056;
  border: 1px solid #1a2534;

  .search-box {
    position: relative;
    display: flex;
    width: 100%;
    max-width: 1256px;

    input {
      width: 620px;
      height: 40px;
      background-color: transparent;
      border-radius: 5px;
      ::placeholder {
        color: #ffffff;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
      }
    }
  }
`;
