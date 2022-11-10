import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SideBarMenu } from "../components/SideBarMenu";
import { AgregarEvento } from "../components/AgregarEvento/AgregarEvento";
import { Principal } from '../components/Principal/Principal';
import {Cotizaciones} from '../components/Cotizaciones/Cotizaciones';
import {Eventos} from '../components/Eventos/Eventos';
import {Proveedores} from '../components/Proveedores/Proveedores';
import {db} from '../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore';
import { AgregarProveedor } from "../components/AgregarProveedor/AgregarProveedor";
import EditProv from '../components/Proveedores/EditProv';
import EditEvent from '../components/Eventos/EditEvent.jsx';


export const DashboardRoutes = () => {
  
  return (
    <>
      <BrowserRouter>
        <div>
          <SideBarMenu />
        </div>
        <div className="container-Routes">
          <Routes>
          <Route path="" element={<Principal/>} />
            <Route path="/AgregarEvento" element={<AgregarEvento/>} />
            <Route path="/AgregarProveedor" element={<AgregarProveedor/>} />
            <Route path="/Cotizaciones" element={<Cotizaciones/>} />
            <Route path="/Eventos" element={<Eventos/>} />
            <Route path="/Proveedores" element={<Proveedores/>} />
            <Route path='/EditProv/:id' element={<EditProv/>} />
            <Route path='/EditEvent/:id' element={<EditEvent/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
