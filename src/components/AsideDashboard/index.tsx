import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { Container } from "./style";
import { SvgLogo } from "./style";
import logo from "../../assets/MjvColor.svg";

export const AsideDashboard = () => {
  const { category, setCategory } = useContext(ProductContext);

  return (
    <Container>
      <div className="svgContainer">
        <SvgLogo className="logo-img" src={logo} alt="logo" />

      </div>

      <div className="containerButton">
      <button
        onClick={() => setCategory("all")}
        style={{
          backgroundColor: category == "all" ? "var(--action-primary)" : "buttonface",
          color: category == "all" ? "white" : "buttontext",
        }}
      >
        Todos os produtos
      </button>

      <button
        onClick={() => setCategory("electronics")}
        style={{
          backgroundColor: category == "electronics" ? "var(--action-primary)" : "buttonface",
          color: category == "electronics" ? "white" : "buttontext",
        }}
      >
        Eletrônicos
      </button>
      <button
        onClick={() => setCategory("jewelery")}
        style={{
          backgroundColor: category == "jewelery" ? "var(--action-primary)" : "buttonface",
          color: category == "jewelery" ? "white" : "buttontext",
        }}
      >
        Joias
      </button>

      <button
        onClick={() => setCategory("women's clothing")}
        style={{
          backgroundColor:
            category == "women's clothing" ? "var(--action-primary)" : "buttonface",
          color: category == "women's clothing" ? "white" : "buttontext",
        }}
      >
        Roupa Feminina
      </button>
      <button
        onClick={() => setCategory("men's clothing")}
        style={{
          backgroundColor: category == "men's clothing" ? "var(--action-primary)" : "buttonface",
          color: category == "men's clothing" ? "white" : "buttontext",
        }}
      >
        Roupa Masculina
      </button>
      </div>
      
    </Container>
  );
};
