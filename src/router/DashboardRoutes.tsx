import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SideBarMenu } from "../components/SideBarMenu";
import { AgregarEvento } from "../components/AgregarEvento/AgregarEvento";
import { Principal } from '../components/Principal/Principal';

export const DashboardRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <SideBarMenu />
        </div>
        <div className="container-Routes">
          <Routes>
          <Route path="/" element={<Principal/>} />
            <Route path="/AgregarEvento" element={<AgregarEvento />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
