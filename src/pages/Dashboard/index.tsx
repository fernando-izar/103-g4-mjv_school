import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import { Container } from "./style";
import { ListCards } from "../../components/ListCards";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { AsideDashboard } from "../../components/AsideDashboard";
import { Outlet } from "react-router-dom";
import ContainerMark from "../../assets/ContainerMarketingMjv.png";

export const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <AsideDashboard />
      <div className="main-content">
        <HeaderDashboard />
        <img className="marketingContainer" src={ContainerMark}></img>

        <h2>Olá, {user!.name.firstname}!</h2>
        <ListCards />
      </div>
    </Container>
  );
};
