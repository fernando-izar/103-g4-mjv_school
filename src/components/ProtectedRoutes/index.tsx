import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate, Outlet } from "react-router-dom";

import  MJVLoad  from "../../assets/MJVLoad.gif" 

import { Main } from "../../styles/main";

export const ProtectedRoutes = () => {
  const { loading, user } = useContext(UserContext);
  if (loading) {
    return (
      <Main>
        <div className="loadContainer">
          <img src={MJVLoad} alt="" />
        </div>
        <div className="bodyContainer">
          
        </div>
      </Main>
    );
  }

  return user ? <Outlet /> : <Navigate to={"/login"} replace />;
};
