import React, { useEffect, useState } from "react";
import {
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";
import { Modal } from "react-bootstrap";
import {
  collection,
  addDoc,
  getDocs,
  Timestamp,
  updateDoc,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

export const EditProv = () => {
  const [namepro, setNamepro] = useState('');
  const [telpro, setTelpro] = useState('');
  const [calleprov, setCalleprov] = useState('');
  const [coloniaprov, setColoniaprov] = useState('');
  const [estado, setEstado] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');


  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const prove = doc(db, "prove", id);
    const data = {
      namepro: namepro,
      telpro: telpro,
      calleprov: calleprov,
      coloniaprov: coloniaprov,
      estado: estado,
      categoria,categoria,
      descripcion: descripcion,
    };
    await updateDoc(prove, data);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Datos actualizados correctamente',
      showConfirmButton: false,
      timer: 2000
    })
    navigate('/Proveedores/')
    
  };

  const getProvById = async (id) => {
    const prove = await getDoc(doc(db, "prove", id));
    if (prove.exists()) {
      console.log(prove.data());
      setNamepro(prove.data().namepro);
      setTelpro(prove.data().telpro);
      setCalleprov(prove.data().calleprov);
      setColoniaprov(prove.data().coloniaprov);
      setEstado(prove.data().estado);
      setCategoria(prove.data().categoria);
      setDescripcion(prove.data().descripcion);
    } else {
      //alert producto no existe
      console.log("no existe");
    }
  };

  useEffect(() => {
    getProvById(id);
  }, []);

  return (
    <div className="bodyAgregarProveedor" id="form" onSubmit={update}>
      <section className="content header">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap');
        </style>
        <h2> Editar Proveedor</h2>
      </section>

      <div className="proveedor" >
        <div className="content">
          <div className="contact-wrapper animated bounceInUp">
            <div className="contact-form">
              <form action="" id="form1">
                <p>
                  <label>Nombre</label>
                  <input
                    type="text"
                    name="namepro"
                    value={namepro}
                    id="namepro"
                    onChange={(e) => setNamepro(e.target.value)}
                  />
                </p>
                <p>
                  <label>Télefono</label>
                  <input
                    type="text"
                    name="telpro"
                    value={telpro}
                    onChange={(e) => setTelpro(e.target.value)}
                  />
                </p>
                <p>
                  <label>Calle</label>
                  <input
                    type="text"
                    name="calleprov"
                    value={calleprov}
                    onChange={(e) => setCalleprov(e.target.value)}
                  />
                </p>
                <p>
                  <label>Colonia</label>
                  <input
                    type="text"
                    name="coloniaprov"
                    value={coloniaprov}
                    onChange={(e) => setColoniaprov(e.target.value)}
                  />
                </p>
                <form action="">
                  <div className="content-select">
                    <p>
                      <label>Estado</label>
                      <select
                        name="estado"
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}
                      >
                        <option value="aguascalientes">Aguascalientes</option>
                        <option value="disco">Baja California</option>
                        <option value="bcj">Baja California Sur</option>
                        <option value="campeche">Campeche</option>
                        <option value="chiapas">Chiapas</option>
                        <option value="chihuahua">Chihuahua</option>
                        <option value="coahuila">Coahuila</option>
                        <option value="colima">Colima</option>
                        <option value="durango">Durango</option>
                        <option value="edm">Estado de México</option>
                        <option value="gnj">Guanajuato</option>
                        <option value="guerrero">Guerrero</option>
                        <option value="hidalgo">Hidalgo</option>
                        <option value="jalisco">Jalisco</option>
                        <option value="michoacan">Michoacán</option>
                        <option value="morelos">Morelos</option>
                        <option value="nayarit">Nayarit</option>
                        <option value="nvl">Nuevo León</option>
                        <option value="oaxaca">Oaxaca</option>
                        <option value="puebla">Puebla</option>
                        <option value="qrt">Querétaro</option>
                        <option value="qr">Quintana Roo</option>
                        <option value="slp">San Luis Potosí</option>
                        <option value="sinaloa">Sinaloa</option>
                        <option value="sonora">Sonora</option>
                        <option value="tabasco">Tabasco</option>
                        <option value="tampl">Tamaulipas</option>
                        <option value="tlaxcala">Tlaxcala</option>
                        <option value="veracruz">Veracruz</option>
                        <option value="yucatan">Yucatán</option>
                        <option value="zacatecas">Zacatecas</option>
                      </select>
                    </p>
                  </div>
                </form>
                <form action="">
                                <div className="content-select">
                                    <p>
                                        <label>Categoría</label>
                                        <select name="categoria" value="categoria" onChange={(e) => setCategoria(e.target.value)}>
                                            <option value="comida">Comida</option>
                                            <option value="casino">Casino</option>
                                            <option value="bebidas">Bebidas</option>
                                            <option value="decoraciones">Decoracion</option>
                                            <option value="musica">Musica</option>
                                            <option value="inmueble">Inmueble</option>
                                        </select>
                                    </p>
                                </div>
                            </form>
              </form>
            </div>
            <div className="contact-info col">
              <h4>Descripción</h4>
              <textarea
                name="descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              ></textarea>
              <button type="submit" onClick={update}>
                Actualizar proveedor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProv;
