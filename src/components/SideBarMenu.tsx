import { useState } from "react";
import { SideBarMenuCard, SideBarMenuItem } from "../types/types";
import { classNames } from "../util/classes";
import {
  BiCabinet,
  BiCalendar,
  BiCalendarPlus,
  BiCopyAlt,
  BiGroup,
  BiTask,
  BiUser,
  BiUserPlus,
} from "react-icons/bi";
import profileImage from "../assets/Logo.png";

import SideBarMenuItemView from "./SideBarMenuItemView";
import SideBarMenuCardView from "./SideBarMenuCardView";

import "./SideBarMenu.scss";

export function SideBarMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const items: SideBarMenuItem[] = [
    //Aquí se ponen los diferentes iconos del menú
    {
      id: "1",
      label: "Agregar Administrador",
      icon: BiUserPlus,
      url: "/",
    },
    {
      id: "2",
      label: "Administradores",
      icon: BiGroup,
      url: "/",
    },
    {
      id: "3",
      label: "Registrar Clientes",
      icon: BiUser,
      url: "/",
    },
    {
      id: "4",
      label: "Clientes",
      icon: BiGroup,
      url: "/",
    },
    {
      id: "5",
      label: "Agregar Evento",
      icon: BiCalendarPlus,
      url: "/AgregarEvento",
    },
    {
      id: "6",
      label: "Eventos",
      icon: BiCabinet,
      url: "/",
    },
    {
      id: "7",
      label: "Calendario",
      icon: BiCalendar,
      url: "/",
    },
    {
      id: "8",
      label: "Cotizaciones",
      icon: BiCopyAlt,
      url: "/",
    },
    {
      id: "9",
      label: "Proveedores",
      icon: BiTask,
      url: "/AgregarProveedor",
    },
  ];

  const card: SideBarMenuCard = {
    id: "card01",
    displayName: "",
    photoUrl: profileImage,
    url: "/",
    title: "",
  };

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div
      className={classNames("SideBarMenu", isOpen ? "expanded" : "collapsed")}
    >
      <SideBarMenuCardView card={card} isOpen={isOpen} />
      {items.map((item) => (
        <SideBarMenuItemView key={item.id} item={item} isOpen={isOpen} />
      ))}
    </div>
  );
}
