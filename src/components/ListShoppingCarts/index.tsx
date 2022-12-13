import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ProductContext } from "../../contexts/ProductContext";
import { ShoppingCart } from "../ShoppingCart";
import { Container } from "./style";

export const ListShoppingCarts = () => {
  const { users, userCarts } = useContext(UserContext);
  // const { productsList } = useContext(ProductContext);

  return (
    <Container>
      <ul className="carts">
        {userCarts.map((element) => {
          const name = users.filter((item) => {
            return item.id == element.userId;
          });

          const date = new Date(element.date);
          const dateArray = date.toString().split(" ");
          const month = dateArray[1];
          const day = dateArray[2];
          const year = dateArray[3];
          const hour = dateArray[4];

          return (
            <ShoppingCart
              key={element.id}
              userName={`Cliente: ${name[0].name.firstname} ${name[0].name.lastname}`}
              products={element.products}
              date={`Compras efetuadas em ${day} de ${month} de ${year}, às ${hour}`}
            />
          );
        })}
      </ul>
    </Container>
  );
};
