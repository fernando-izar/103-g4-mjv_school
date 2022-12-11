import { Container } from "./style";
import { IShoppingCartToRender } from "../../interfaces/shoppingcart.interfaces";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
export const ShoppingCart = ({
  userName,
  products,
  date,
}: IShoppingCartToRender) => {
  const { productsList } = useContext(ProductContext);

  return (
    <Container>
      {/* <div className="username">{userName}</div> */}
      <div className="date">{date}</div>
      <ul className="ul-products">
        {products.map((element) => {
          const product = productsList.filter(
            (item) => item.id == element.productId
          );

          return (
            <li className="li-product" key={element.productId}>
              <div className="li-product-title">
                Produto: {product[0].title}
              </div>
              <img
                className="li-product-img"
                src={product[0].image}
                alt="product-img"
              />
              <div className="li-product-quantity">
                Quantidade: {element.quantity}
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};
