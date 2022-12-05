import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate, Outlet } from "react-router-dom";

import { Container } from "./style";

export const ProtectedRoutes = () => {
  const { loading, user } = useContext(UserContext);
  console.log("user inside Protected Routes", user);
  if (loading) {
    return (
      <Container>
        <h2>...loagind</h2>
      </Container>
    );
  }

  return user ? <Outlet /> : <Navigate to={"/"} replace />;
};
