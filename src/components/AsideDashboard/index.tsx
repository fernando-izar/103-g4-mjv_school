import { Container } from "./style";
import { SvgLogo } from "./style";
import logo from "../../assets/MjvLogo.svg";

export const AsideDashboard = () => {
  return (
    <Container>
      <SvgLogo className="logo-img" src={logo} alt="logo" />
    </Container>
  );
};
