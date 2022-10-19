import React from "react";
import {SideBarMenu} from "./components/SideBarMenu"; 
import { SideBarMenuCard, SideBarMenuItem } from './types/types';
import {FcAdvertising} from 'react-icons/fc'
import {FaApple} from 'react-icons/fa'

function App() {
  const items: SideBarMenuItem[]  = [
    {
      id: '1',
      label: 'Hola',
      icon: FaApple,
      url: "/"
    }
    
  ] ;
  
  const card:   SideBarMenuCard = {
    id: 'card01',
    displayName: 'Villa',
    photoUrl: "",
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
