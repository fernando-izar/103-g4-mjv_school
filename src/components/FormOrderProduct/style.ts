import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0px;
  align-items: center;

  .product-data {
    color: white;
  }

  .product-img {
    width: 150px;
    border-radius: 5px;
  }

  .product-title {
    color: white;
    font-family: "Poppins";
  }

  .product-input-quantity {
    width: 30%;
  }

  .product-button-add-cart {
    height: 50px;
    width: 60%;
    color: white;
    background-color: var(--action-primary);
    border-radius: 5px;
  }

  .product-button-add-cart:hover {
    color: lightgray;
    background-color: var(--action-primary);
  }
`;
