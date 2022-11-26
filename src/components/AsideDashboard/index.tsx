import { Container } from "./style";

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
