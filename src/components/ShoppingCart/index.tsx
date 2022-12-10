import { Container } from "./style";
import { IShoppingCartToRender } from "../../interfaces/shoppingcart.interfaces";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";

export const ShoppingCart = ({ userName, products }: IShoppingCartToRender) => {
  const { productsList } = useContext(ProductContext);

  return (
    <Container>
      <div>{userName}</div>
      <ul>
        {products.map((element) => {
          const product = productsList.filter(
            (item) => item.id == element.productId
          );

          return (
            <li key={element.productId}>
              <div>Produto: {product[0].title}</div>
              <div>Quantidade: {element.quantity}</div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};
