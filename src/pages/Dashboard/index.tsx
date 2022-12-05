import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import { Container } from "./style";
import { ListCards } from "../../components/ListCards";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { AsideDashboard } from "../../components/AsideDashboard";
export const Dashboard = () => {
  const { user } = useContext(UserContext);
  console.log("user inside Dashboard", user);
  return user ? (
    <Container>
      <AsideDashboard></AsideDashboard>
      <div className="main-content">
        <HeaderDashboard />
        <h2>Olá, {user.name.firstname}</h2>
        <ListCards />
      </div>
    </Container>
  ) : (
    <Navigate to={`/`} replace />
  );
};
