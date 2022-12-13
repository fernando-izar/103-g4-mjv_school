import { useState, useEffect } from "react";
import { Container } from "./style";
import { IShoppingCart } from "../../interfaces/shoppingcart.interfaces";
import { AsideDescription } from "../../components/AsideDescription";
import { HeaderDescription } from "../../components/HeaderDescription";
import { Link } from "react-router-dom";
import { ListShoppingCarts } from "../../components/ListShoppingCarts";
import { Button } from "../../components/Button";
import { Main } from "../../styles/main";


export const ShoppingCartsDashboard = () => {
  const [shoppingCartList, setShoppingCartList] = useState<IShoppingCart[]>([]);

  return (
    <Container>
      <AsideDescription />
      <div className="main-content">
        <HeaderDescription />

        <h1>Carrinhos de produtos:</h1>
        <div className="dashboard">
        
          <ListShoppingCarts />
          <div className="button-container">
            <Button 
            className="Button" 
            BackgroundColor="var(--color-secondary)" 
            label="Voltar para produtos" 
            linkTo="/dashboard" />


            <Button
              label="FINALIZAR A COMPRA"
              className="button"
              BackgroundColor="var(--action-primary)"
              linkTo="/Dashboard"
            ></Button>
          </div>
        </div>


      </div>
    </Container>
  );
};
