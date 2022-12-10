import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ProductContext } from "../../contexts/ProductContext";
import { ShoppingCart } from "../ShoppingCart";
import { Container } from "./style";

export const ListShoppingCarts = () => {
  const { users } = useContext(UserContext);
  const { productsList, listShoppingCarts } = useContext(ProductContext);

  return (
    <Container>
      <ul className="carts">
        {listShoppingCarts.map((element) => {
          const name = users.filter((user) => (user.id = element.userId));

          return (
            <ShoppingCart
              key={element.id}
              userName={`Cliente: ${name[0].name.firstname} ${name[1].name.lastname}`}
              products={element.products}
            />
          );
        })}
      </ul>
    </Container>
  );
};
