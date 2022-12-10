import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { Container } from "./style";
import { SvgLogo } from "./style";
import logo from "../../assets/MjvLogo.svg";

export const AsideDashboard = () => {
  const { category, setCategory } = useContext(ProductContext);

  return (
    <Container>
      <SvgLogo className="logo-img" src={logo} alt="logo" />
      <button
        onClick={() => setCategory("all")}
        style={{
          backgroundColor: category == "all" ? "gray" : "buttonface",
          color: category == "all" ? "white" : "buttontext",
        }}
      >
        Todos os produtos
      </button>

      <button
        onClick={() => setCategory("electronics")}
        style={{
          backgroundColor: category == "electronics" ? "gray" : "buttonface",
          color: category == "electronics" ? "white" : "buttontext",
        }}
      >
        Eletrônicos
      </button>
      <button
        onClick={() => setCategory("jewelery")}
        style={{
          backgroundColor: category == "jewelery" ? "gray" : "buttonface",
          color: category == "jewelery" ? "white" : "buttontext",
        }}
      >
        Joias
      </button>

      <button
        onClick={() => setCategory("women's clothing")}
        style={{
          backgroundColor:
            category == "women's clothing" ? "gray" : "buttonface",
          color: category == "women's clothing" ? "white" : "buttontext",
        }}
      >
        Roupa Feminina
      </button>
      <button
        onClick={() => setCategory("men's clothing")}
        style={{
          backgroundColor: category == "men's clothing" ? "gray" : "buttonface",
          color: category == "men's clothing" ? "white" : "buttontext",
        }}
      >
        Roupa Masculina
      </button>
    </Container>
  );
};
