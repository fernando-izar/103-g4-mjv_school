import { useState, useEffect } from "react";
import { Container } from "./style";
import { IShoppingCart } from "../../interfaces/shoppingcart.interfaces";
import { AsideDescription } from "../../components/AsideDescription";

export const ShoppingCart = () => {
  const [shoppingCartList, setShoppingCartList] = useState<IShoppingCart[]>([]);

  return (
    <Container>
      <AsideDescription />
    </Container>
  );
};
