import React from "react";
import {SideBarMenu} from "./components/SideBarMenu"; 
import { SideBarMenuCard, SideBarMenuItem } from './types/types';
import {FcAdvertising} from 'react-icons/fc';
import {FaApple} from 'react-icons/fa';
import profileImage from './Logo.png';
import {BiUserPlus} from 'react-icons/bi';
import {BiGroup} from 'react-icons/bi';
import {BiUser} from 'react-icons/bi';  
import {BiCalendarPlus} from 'react-icons/bi';  
import {BiCabinet} from 'react-icons/bi';  
import {BiCalendar} from 'react-icons/bi';
import {BiCopyAlt} from 'react-icons/bi';  
import {BiTask} from 'react-icons/bi';

function App() {
  const items: SideBarMenuItem[]  = [
    //Aquí se ponen los diferentes iconos del menú
    {
      id: '1',
      label: 'Agregar Administrador',
      icon: BiUserPlus,
      url: "/"
    },
    {
      id: '2',
      label: 'Administradores',
      icon: BiGroup,
      url: "/"
    },
    {
      id: '3',
      label: 'Registrar Clientes',
      icon: BiUser,
      url: "/"
    },
    {
      id: '4',
      label: 'Clientes',
      icon: BiGroup,
      url: "/"
    },
    {
      id: '5',
      label: 'Agregar Evento',
      icon: BiCalendarPlus,
      url: "/"
    },
    {
      id: '6',
      label: 'Eventos',
      icon: BiCabinet,
      url: "/"
    },
    {
      id: '7',
      label: 'Calendario',
      icon: BiCalendar,
      url: "/"
    },
    {
      id: '8',
      label: 'Cotizaciones',
      icon: BiCopyAlt,
      url: "/"
    },
    {
      id: '9',
      label: 'Proveedores',
      icon: BiTask,
      url: "/"
    }
    
  ] ;
  
  const card:   SideBarMenuCard = {
    id: 'card01',
    displayName: '',
    photoUrl: profileImage,
    url: "/",
    title: ""
  };
  
  return (
    <div>
      <SideBarMenu items= {items} card={card} />
    </div>
  ); 
}

export default App
