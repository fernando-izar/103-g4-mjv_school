import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ProductContext } from "../../contexts/ProductContext";
import { ShoppingCart } from "../ShoppingCart";
import { Container } from "./style";

export const ListShoppingCarts = () => {
  const { users, userCarts } = useContext(UserContext);
  const { productsList } = useContext(ProductContext);

  return (
    <Container>
      <ul className="carts">
        {userCarts.map((element) => {
          const name = users.filter((item) => {
            return item.id == element.userId;
          });

          const date = new Date(element.date);
          const day = date.getDay();
          const month = date.getMonth();
          const year = date.getFullYear();
          const hour = date.getHours();
          const minutes = date.getMinutes();
          const seconds = date.getSeconds();

          return (
            <ShoppingCart
              key={element.id}
              userName={`Cliente: ${name[0].name.firstname} ${name[0].name.lastname}`}
              products={element.products}
              date={`Compras efetuadas em ${day}/${month}/${year} às ${hour}:${minutes}:${seconds}`}
            />
          );
        })}
      </ul>
    </Container>
  );
};
