import { Login } from "../components/login/Login";
import { DashboardRoutes } from "./DashboardRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const AppRoute = () => {
  return (
    
    <BrowserRouter>
      {/* <HashRouter> o <BrowserRouter> revisar el servidor y hacer cambios pertinentes*/}
      <Routes>
        <Route
          path="/*"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/Home/*"
          element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
