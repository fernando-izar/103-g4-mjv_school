import { Container } from "./style";
import { ListCards } from "../../components/ListCards";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { AsideDashboard } from "../../components/AsideDashboard";

export const Dashboard = () => {
  return (
    <Container>
      <AsideDashboard></AsideDashboard>
      <div className="main-content">
        <HeaderDashboard />
        <ListCards />
      </div>
    </Container>
  );
};
