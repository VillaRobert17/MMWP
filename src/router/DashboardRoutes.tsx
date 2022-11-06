import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SideBarMenu } from "../components/SideBarMenu";
import { AgregarEvento } from "../components/AgregarEvento/AgregarEvento";
import { Principal } from '../components/Principal/Principal';
import {db} from '../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore';
import { AgregarProveedor } from "../components/AgregarProveedor/AgregarProveedor";


export const DashboardRoutes = () => {
  
  const addOrEditLink = async (linkObject:any) => {
    try{
      await addDoc(collection(db, 'links'), {
        tipoevento: linkObject.tipoevento,
        estilo: linkObject.estilo,
        adultos: linkObject.adultos,
        ninos: linkObject.ninos,
        ciudad: linkObject.ciudad,
        numinvit: linkObject.numinvit,
        correo: linkObject.correo,
        precoti: linkObject.precoti,
        especificaciones: linkObject.especificaciones,
        pista: linkObject.pista,
        banquete: linkObject.banquete,
        cristaleria: linkObject.cristaleria,
        musica: linkObject.musica,
        lugarEvento: linkObject.lugarEvento,
        mesaPostres: linkObject.mesaPostres,
        barraCocteleria: linkObject.barraCocteleria,
        decoracion: linkObject.decoracion,
        fotoVideo: linkObject.fotoVideo,
        barraMadera: linkObject.barraMadera,
      })
    console.log("agregada")
    
    }catch(err){
      alert(err)
    }
  }

  
  return (
    <>
      <BrowserRouter>
        <div>
          <SideBarMenu />
        </div>
        <div className="container-Routes">
          <Routes>
          <Route path="" element={<Principal/>} />
            <Route path="/AgregarEvento" element={<AgregarEvento addOrEditLink={addOrEditLink}/>} />
            <Route path="/AgregarProveedor" element={<AgregarProveedor/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
