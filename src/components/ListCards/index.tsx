import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { UserContext } from "../../contexts/UserContext";
import { Card } from "../Card";
import { Container } from "./style";
import { Main } from "../../styles/main";
import  MJVLoad  from "../../assets/MJVLoad.gif" 



export const ListCards = () => {
  const { productsList, loadingProducts } = useContext(ProductContext);

  if (loadingProducts) {
    return (
  
      <Main>
        <div className="loadContainer">
          <img src={MJVLoad} alt="" />
        </div>
        <div className="bodyContainer">
          
        </div>
      </Main>
    )
  }
  return (
    <Container>
      <ul className="cards">
        {productsList.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
            rating={product.rating}
          />
        ))}
      </ul>
    </Container>
  );
};
