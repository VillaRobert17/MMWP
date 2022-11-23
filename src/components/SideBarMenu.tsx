import { useEffect, useState } from "react";
import { SideBarMenuCard, SideBarMenuItem } from "../types/types";
import { classNames } from "../util/classes";
import {
  BiCabinet,
  BiCalendarPlus,
  BiCopyAlt,
  BiGroup,
  BiLogOut,
  BiTask,
  BiUserPlus,
  BiUserCircle,
} from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import {GrUserAdmin} from "react-icons/Gr";
import profileImage from "../assets/Logo.png";

import SideBarMenuItemView from "./SideBarMenuItemView";
import SideBarMenuCardView from "./SideBarMenuCardView";
import { db } from "../firebase";

import "./SideBarMenu.scss";
import { collection, getDocs } from "firebase/firestore";
import Swal from "sweetalert2";

export function SideBarMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const items: SideBarMenuItem[] = [
    //Aquí se ponen los diferentes iconos del menú
    /*
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
    },*/
    {
      id: "1",
      label: "Home",
      icon: FaHome,
      url: "",
    },
    {
      id: "2",
      label: "Registro",
      icon: BiUserPlus,
      url: "AgregarAdministrador",
    },
    {
      id: "9",
      label: "Cuentas",
      icon: BiUserCircle,
      url: "Administradores",
    },
    {
      id: "3",
      label: "Agregar Evento",
      icon: BiCalendarPlus,
      url: "AgregarEvento",
    },
    {
      id: "4",
      label: "Eventos",
      icon: BiCabinet,
      url: "Eventos",
    },
    {
      id: "5",
      label: "Cotizaciones",
      icon: BiCopyAlt,
      url: "Cotizaciones",
    },
    {
      id: "6",
      label: "Agregar Proveedores",
      icon: BiTask,
      url: "AgregarProveedor",
    },
    {
      id: "7",
      label: "Proveedores",
      icon: BiGroup,
      url: "Proveedores",
    },
    {
      id: "8",
      label: "Cerrar Sesión",
      icon: BiLogOut,
      url: "logOut",
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

  //useeffect que escucha el cambio de un checkbox
  useEffect(() => {
    const checkbox = document.getElementById("adm_usr");
    checkbox?.addEventListener("change", handleCheckBox);
  }, []);

  const usersCollection = collection(db, "users");

  const handleCheckBox = async () => {
    const checkbox = document.querySelector("#adm_usr") as HTMLInputElement;
    if (checkbox?.checked) {
      document.getElementById("2")?.classList.add("ocultar");
      document.getElementById("4")?.classList.add("ocultar");
      document.getElementById("5")?.classList.add("ocultar");
      document.getElementById("6")?.classList.add("ocultar");
      document.getElementById("7")?.classList.add("ocultar");
      document.getElementById("9")?.classList.add("ocultar");
      
    } else {
      //pedir contraseña
      const { value: password } = await Swal.fire({
        title: "Ingresa la contraseña del administrador",
        input: "password",
      });
      if (password) {
        getDocs(usersCollection).then((querySnapshot) => {
          //get uid from localstorage
          const uid = localStorage.getItem("uid");
          let i = 0;
          querySnapshot.forEach((doc) => {
            if (
              doc.data().usuario === uid &&
              doc.data().password === password
            ) {
              i++;
            }
          });
          if (i === 0) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Contraseña incorrecta",
            });
            checkbox && (checkbox.checked = true);
            return;
          } else {
            document.getElementById("2")?.classList.remove("ocultar");
            document.getElementById("4")?.classList.remove("ocultar");
            document.getElementById("5")?.classList.remove("ocultar");
            document.getElementById("6")?.classList.remove("ocultar");
            document.getElementById("7")?.classList.remove("ocultar");
            document.getElementById("9")?.classList.remove("ocultar");
           
          }
        });
      } else {
        Swal.fire(`No ingresaste la contraseña`);
        checkbox && (checkbox.checked = true);
      }
    }
  };

  return (
    <div
      className={classNames("SideBarMenu", isOpen ? "expanded" : "collapsed")}
    >
      <SideBarMenuCardView card={card} isOpen={isOpen} />
      {items.map((item) => (
        <SideBarMenuItemView key={item.id} item={item} isOpen={isOpen} />
      ))}
      <div className="boton-cover">
        <div className="toggle-button-cover">
          <div className="button-cover">
            <div className="button b2" id="button-10">
              <input type="checkbox" className="checkbox" id="adm_usr" />
              <div className="knobs">
                <span>ADM</span>
              </div>
              <div className="layer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
