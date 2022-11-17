import React, { useEffect, useState } from "react";
import "../../styles/Cotizaciones.scss";
import {
  collection,
  addDoc,
  getDocs,
  Timestamp,
  updateDoc,
  getDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImage from "../../assets/Logo.png";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  InputGroup,
  FormLabel,
  Form,
} from "react-bootstrap";
import Swal from "sweetalert2";

export const Cotizaciones = () => {
  const [ID, setID] = useState("");
  const [tipoevento, setTipoevento] = useState("");
  const [estilo, setEstilo] = useState("");
  const [adultos, setAdultos] = useState("");
  const [ninos, setNinos] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [numinvit, setNuminvit] = useState("");
  const [correo, setCorreo] = useState("");
  const [precoti, setPrecoti] = useState("");
  const [especificaciones, setEspecificaciones] = useState("");
  //--------------------------------------------
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [fecha, setFecha] = useState(new Date());
  const [estadoEvent, setEstadoEvent] = useState("");
  //------------------------------------------
  const [pista, setPista] = useState("");
  const [banquete, setBanquete] = useState("");
  const [cristaleria, setCristaleria] = useState("");
  const [musica, setMusica] = useState("");
  const [lugarEvento, setLugarEvento] = useState("");
  const [mesaPostres, setMesaPostres] = useState("");
  const [barraCocteleria, setBarraCocteleria] = useState("");
  const [decoracion, setDecoracion] = useState("");
  const [fotoVideo, setFotoVideo] = useState("");
  const [barraMadera, setBarraMadera] = useState("");
  //------------------------------------------
  const getEventById = async (id) => {
    console.log(id);
    const event = await getDoc(doc(db, "links", id));
    if (event.exists()) {
      setTipoevento(event.data().tipoevento);
      setEstilo(event.data().estilo);
      setAdultos(event.data().adultos);
      setNinos(event.data().ninos);
      setCiudad(event.data().ciudad);
      setNuminvit(event.data().numinvit);
      setCorreo(event.data().correo);
      setPrecoti(event.data().precoti);
      setEspecificaciones(event.data().especificaciones);
      setNombre(event.data().nombre);
      setApellidos(event.data().apellidos);
      setFecha(event.data().fecha);
      setPista(event.data().pista);
      setBanquete(event.data().banquete);
      setCristaleria(event.data().cristaleria);
      setMusica(event.data().musica);
      setLugarEvento(event.data().lugarEvento);
      setMesaPostres(event.data().mesaPostres);
      setBarraCocteleria(event.data().barraCocteleria);
      setDecoracion(event.data().decoracion);
      setFotoVideo(event.data().fotoVideo);
      setBarraMadera(event.data().barraMadera);
      setEstadoEvent(event.data().estadoEvent);
    } else {
      //alert producto no existe
      console.log("no existe");
    }
  };
  //-----------------------------------------
  const update = async (e) => {
    console.log("ID 1: "+ID)
    e.preventDefault();
    const event = doc(db, "links", ID);
    const data = {
      estadoEvent: estadoEvent
    };
    await updateDoc(event, data);
    await updateDoc(event, data);
    getEvent();
    hideModal();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Datos actualizados correctamente",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  //-----------------------------------------
  const [isOpen, setIsOpen] = useState(false);
  const [event, setEvent] = useState([]);
  const eventCollection = collection(db, "links");
  //----------------------------------------
  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };
  //--------------------------------------------
  const getEvent = async () => {
    const data = await getDocs(eventCollection);
    //console.log(data.docs)
    setEvent(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(event);
  };

  useEffect(() => {
    getEvent();
  }, []);

  return (
    <>
      <div className="bodyCotizaciones" id="form">
        <section className="content header">
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap');
          </style>
          <h2> Cotizaciones</h2>
        </section>
        <div className="content">
          <div className="tablaP table-responsive">
            <table class="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellidos</th>
                  <th>Tipo Evento</th>
                  <th>No. Invitados</th>
                  <th>Cotización</th>
                  <th>Estado del evento</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {event.map((even) => (
                  <tr key={even.id}>
                    <td>{even.nombre}</td>
                    <td>{even.apellidos}</td>
                    <td>{even.tipoevento}</td>
                    <td>{even.numinvit}</td>
                    <td>{even.precoti}</td>
                    <td>{even.estadoEvent}</td>
                    <td>
                      <Button
                        onClick={() => {
                          getEventById(even.id)
                          showModal();
                          setID(even.id);
                        }}
                      >
                        Editar Estado
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal show={isOpen} onHide={hideModal}>
        <ModalHeader closeButton>
          <Modal.Title>Editar Estado</Modal.Title>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={update}>
            <div class="mb-3">
              <label class="form-label">Estado del evento</label>
              <select class="form-select" value={estadoEvent} onChange={(e) => setEstadoEvent(e.target.value)}>
                <option selected disabled>
                  Seleccione
                </option>
                <option value="Aprobado">Aprobado</option>
                <option value="Denegado">Denegado</option>
                <option value="En espera">En espera</option>
              </select>
            </div>
          </form>
        </ModalBody>
        
        <ModalFooter>
          <button type="button" class="btn btn-success" onClick={update}> 
            Actualizar
          </button>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => {
              hideModal();
            }}
          >
            Cerrar
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};
