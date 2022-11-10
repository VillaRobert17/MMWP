import {useEffect, useState} from "react";
import "../../styles/Eventos.scss";
import profileImage from "../../assets/Logo.png";
import {collection, getDoc, getDocs, getFirestore, Timestamp, query, where, doc, deleteDoc} from 'firebase/firestore';
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { async } from "@firebase/util";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Modal, ModalHeader,ModalBody,ModalFooter,FormGroup,InputGroup,FormLabel, Form} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'

export const Eventos = () => {
  
    const [event, setEvent] = useState([])
    const eventCollection = collection(db,"links")

    const getEvent = async () => {
      const data = await getDocs(eventCollection)
      //console.log(data.docs)
      setEvent(
        data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
      )
      console.log(event)
    }

    useEffect(() => {
      getEvent()
    }, [])

    //funcion eliminar
const deleteEvent = async (id) => {
  const provEvt = doc(db,"links",id)
  await deleteDoc(provEvt)
  getEvent()
}

const confirmDelete = (id) => {
  Swal.fire({
    title: '¿Esta seguro de eliminarlo?',
    text: "!No podrás revertir esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminar.'
  }).then((result) => {
    if (result.isConfirmed) {
      deleteEvent(id)
      Swal.fire(
        'Eliminado!',
        'Su archivo ha sido eliminado..',
        'éxito'
      )
    }
  })
}

    return (
      <>
      
        <div className="bodyEventos" id="form"  >
          <section className="content header">
          <style>
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap');
          </style>
            <h2 > Eventos</h2>
           </section>
          <div className="tablaP table-responsive">
            <table class="table table-striped table-hover table-bordered" >
              <thead>
                <tr>
                  <th></th>
                  <th>Tipo Evento</th>
                  <th>Estilo</th>
                  <th>Adultos</th>
                  <th>Niños</th>
                  <th>Ciudad</th>
                  <th>No. Invitados</th>
                  <th>Correo</th>
                  <th>Pre-Cotización</th>
                  <th>Especificaciones</th>
                  <th>Pista</th>
                  <th>Banquete</th>
                  <th>Cristaleria</th>
                  <th>Musica</th>
                  <th>Lugar Evento</th>
                  <th>Mesa Postres</th>
                  <th>Barra Cocteleria</th>
                  <th>Decoración</th>
                  <th>Foy y Video</th>
                  <th>Barra Madera</th>
                </tr>
              </thead>
              <tbody>
                {event.map((even) =>(
                  <tr key={even.id}>
                    <td>
                      <Link to={`/EditEvent/${even.id}`} className="btn btn-primary">Editar</Link>
                      &nbsp;
                      <Button onClick={() =>{ confirmDelete(even.id)}} className="btn btn-danger">Borrar</Button>
                    </td>
                    <td>{even.tipoevento}</td>
                    <td>{even.estilo}</td>
                    <td>{even.adultos}</td>
                    <td>{even.ninos}</td>
                    <td>{even.ciudad}</td>
                    <td>{even.numinvit}</td>
                    <td>{even.correo}</td>
                    <td>{even.precoti}</td>
                    <td>{even.especificaciones}</td>
                    <td>{even.pista}</td>
                    <td>{even.banquete}</td>
                    <td>{even.cristaleria}</td>
                    <td>{even.musica}</td>
                    <td>{even.lugarEvento}</td>
                    <td>{even.mesaPostres}</td>
                    <td>{even.barraCocteleria}</td>
                    <td>{even.decoracion}</td>
                    <td>{even.fotoVideo}</td>
                    <td>{even.barraMadera}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
        </div>
        </>
    );
}