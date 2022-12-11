import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .username {
    font-family: "Poppins";
  }

  .ul-products {
    display: flex;
    gap: 40px;

    .li-product {
      .li-product-title {
        max-width: 130px;
        font-family: "Poppins";
      }

      .li-product-img {
        width: 100px;
        height: 100px;
      }

      .li-product-quantity {
        font-family: "Poppins";
      }
    }
  }
`;
