import { useState, useEffect } from "react";
import { Container } from "./style";
import { IShoppingCart } from "../../interfaces/shoppingcart.interfaces";
import { AsideDescription } from "../../components/AsideDescription";
import { HeaderDescription } from "../../components/HeaderDescription";
import { Link } from "react-router-dom";

export const ShoppingCartsDashboard = () => {
  const [shoppingCartList, setShoppingCartList] = useState<IShoppingCart[]>([]);

  return (
    <Container>
      <AsideDescription />
      <div className="main-content">
        <HeaderDescription />
        <Link className="back-to-dashboard" to="/dashboard">
          Voltar
        </Link>

        {/* <h2>Olá, {user!.name.firstname}!</h2> */}
        {/* <ListCards /> */}
      </div>
    </Container>
  );
};
