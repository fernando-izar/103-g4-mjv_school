import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { Container } from "./style";
import { SvgLogo } from "./style";
import logo from "../../assets/MjvColor.svg";
import marketingGif from "../../assets/MjvMarketing.gif"

export const AsideDescription = () => {
  const { category, setCategory } = useContext(ProductContext);

  return (
    <Container>
      <div className="svgContainer">
        <SvgLogo className="logo-img" src={logo} alt="logo" />

      </div>
      <div className="marketingContainer">
          <img src={marketingGif} alt="" />
          <a href="https://www.mjvinnovation.com/pt-br/"target="_blank" rel="noopener noreferrer">www.mjvinnovation.com/pt-br/</a>
      </div>
    </Container>
  );
};
