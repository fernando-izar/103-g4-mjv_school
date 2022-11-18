import { Container } from "./style";
import { ListCards } from "../../components/ListCards";
import { HeaderDashboard } from "../../components/HeaderDashboard";

export const Dashboard = () => {
  return (
    <Container>
      <HeaderDashboard />
      <ListCards />
    </Container>
  );
};
