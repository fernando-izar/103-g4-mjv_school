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
          console.log("users", users);
          const name = users.filter((item) => {
            return item.id == element.userId;
          });

          // console.log("users", users);
          // console.log("element.userId", element.userId);
          console.log("name", name);

          return (
            <ShoppingCart
              key={element.id}
              userName={`Cliente: ${name[0].name.firstname} ${name[0].name.lastname}`}
              products={element.products}
            />
          );
        })}
      </ul>
    </Container>
  );
};
