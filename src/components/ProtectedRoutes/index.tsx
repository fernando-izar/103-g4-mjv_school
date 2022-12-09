import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate, Outlet } from "react-router-dom";

import { Container } from "./style";

export const ProtectedRoutes = () => {
  const { loading, user } = useContext(UserContext);
  if (loading) {
    return (
      <Container>
        <h2>...loading</h2>
      </Container>
    );
  }

  return user ? <Outlet /> : <Navigate to={"/login"} replace />;
};
