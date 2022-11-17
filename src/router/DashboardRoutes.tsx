import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SideBarMenu } from "../components/SideBarMenu";
import { AgregarEvento } from "../components/AgregarEvento/AgregarEvento";
import { Principal } from '../components/Principal/Principal';
import {Cotizaciones} from '../components/Cotizaciones/Cotizaciones';
import {Eventos} from '../components/Eventos/Eventos';
import {Proveedores} from '../components/Proveedores/Proveedores';
import { AgregarProveedor } from "../components/AgregarProveedor/AgregarProveedor";
import EditProv from '../components/Proveedores/EditProv';
import EditEvent from '../components/Eventos/EditEvent.jsx';
import { LogOut } from "../components/login/LogOut";
import { RegistrarUsuarioAdm } from "../components/RegistrarUsuario/RegistrarUsuarioAdm";


export const DashboardRoutes = () => {
  
  return (
    <>
        <div>
          <SideBarMenu />
        </div>
        <div className="container-Routes">
          <Routes>
          <Route path="/AgregarAdministrador" element={<RegistrarUsuarioAdm/>} />
          <Route path="" element={<Principal/>} />
            <Route path="/AgregarEvento" element={<AgregarEvento/>} />
            <Route path="/AgregarProveedor" element={<AgregarProveedor/>} />
            <Route path="/Cotizaciones" element={<Cotizaciones/>} />
            <Route path="/Eventos" element={<Eventos/>} />
            <Route path="/Proveedores" element={<Proveedores/>} />
            <Route path='/EditProv/:id' element={<EditProv/>} />
            <Route path='/EditEvent/:id' element={<EditEvent/>} />
            <Route path="/logOut" element={<LogOut/>} />
          </Routes>
        </div>
    </>
  );
};
