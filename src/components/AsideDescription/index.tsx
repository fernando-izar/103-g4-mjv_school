import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { Container } from "./style";
import { SvgLogo } from "./style";
import logo from "../../assets/MjvLogo.svg";

export const AsideDescription = () => {
  const { category, setCategory } = useContext(ProductContext);

  return (
    <Container>
      <SvgLogo className="logo-img" src={logo} alt="logo" />
    </Container>
  );
};
