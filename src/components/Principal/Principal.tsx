import React, { useState } from 'react'
import "../../styles/Principal.scss";
import profileImage from "../../assets/Boda.jpg";


function Redirecciona() {
      // 👇️ redirects to an external URL
      window.location.replace('https://www.facebook.com/marinamezawp/photos');
  }


export const Principal = () => {
  return (

    <div className="bodyPrincipal">
      <section className="content header">
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap');
      </style>
        <h2 > Marina Meza Wedding & Planner </h2>
        
       </section>


       <section className="content sau">
       <h1 className="title">Conocenos</h1>
        <p>
          Somos una empresa dedicada al Diseño, planeación, coordinación y logística para tu evento. 
      Cuidamos cada detalle para que vivas al máximo la experiencia de tu gran día, con nuestra experiencia, y creatividad a tu servicio.
        
      ¡Nos encanta formar parte de esos primeros momentos! 
No importa si tu evento es petite, llena de color con detalles florales y lucirá increíble.
#casateconmigo
        </p>
        
        <div className="box-container">

            <div className="box">
                <h1 className="title">Asesoramos</h1>
                <p>
Con nuestro equipo de trabajo, usted y sus ideas; le asesoramos y hacemos toda una planeación alrededor de las mismas para lograr materializar su evento en una experiencia memorable.</p>
            </div>
            <div className="box">
                <h1 className="title">Materializamos</h1>
                <p>
Nos encargamos de inspeccionar hasta el más mínimo detalle de su evento desde la organización en nuestras oficinas, la logística en la sede, la operación y la post-producción de sus eventos.</p>
            </div>
            <div className="box">
                <h1 className="title">Creamos </h1>
                <p>
                
Su evento no termina cuando retiramos el equipo y nos marchamos de la sede; sino que ahí comienza una relación cliente proveedor que mantenemos viva para tener juntos futuros éxitos.
                </p>
            </div>
            </div>
      </section>

      <section className="content about">

      <h1 className="title">Galería</h1>

      
      </section>

      <section className="boton">
      <button onClick={Redirecciona}>Ver Fotos</button>
      </section>

    </div>
  );
};
