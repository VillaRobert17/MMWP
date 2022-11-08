import {useEffect, useState} from "react";
import "../../styles/Proveedores.scss";
import profileImage from "../../assets/Logo.png";
import {collection, getDoc, getDocs, getFirestore, Timestamp, query, where} from 'firebase/firestore';
import { useParams } from "react-router-dom";

export const Proveedores = (props: any) => {
  
    return (
        <div className="bodyProveedores" id="form"  >
          <section className="content header">
          <style>
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap');
          </style>
            <h2 > Proveedores</h2>
           </section>
          <div className="content">
        </div>
        </div>
    );
}