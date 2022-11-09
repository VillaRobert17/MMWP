import {useEffect, useState} from "react";
import "../../styles/Proveedores.scss";
import profileImage from "../../assets/Logo.png";
import {collection, getDoc, getDocs, getFirestore, Timestamp, query, where} from 'firebase/firestore';
import { useParams } from "react-router-dom";
import { db } from "../../firebase";


export const Proveedores = (props) => {

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const querySnapshot =
        await getDocs(collection(db, "prove"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        })
        console.log("AGREGADA")
        
    }catch (err) {
        alert(err)
    }
}
  

             
      return (
        <div className="bodyProveedores" id="form"  >
          <section className="content header">
          <style>
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap');
          </style>
            <h2 > Proveedores</h2>
           </section>
          <div className="content-button">
          <button type='submit' onClick={handleSubmit} >Consultar Proveedores</button>
        </div>
        </div>
    );
}