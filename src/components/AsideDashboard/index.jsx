import { Container } from "./style";

// const Logo = require("../../assets/mjv-logo.png");
import logo from "../../assets/mjv-logo.png";

export const AsideDashboard = () => {
  return (
    <Container>
      <figure className="logo-fig">
        <img className="logo-img" src={logo} alt="logo" />
      </figure>
    </Container>
  );
};
