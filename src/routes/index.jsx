import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { InitialPage } from "../pages/InitialPage";
import { Description } from "../pages/Description";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/initialPage" element={<InitialPage />}></Route>
      <Route path="/dashboard/:id" element={<Description />}></Route>

      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};

export default MainRoutes;
