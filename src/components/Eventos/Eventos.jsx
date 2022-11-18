import React, { useEffect, useState } from "react";
import "../../styles/Eventos.scss";
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
import { Link } from "react-router-dom";
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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

export const Eventos = () => {
  
  const [buscar, setBuscar] = useState("");
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
  const [nombre, setNombre] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [fecha, setFecha] = useState(new Date());
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
      setApellidos(event.data().apellidos)
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
    } else {
      //alert producto no existe
      console.log("no existe");
    }
  };

  //-----------------------------------------
  const [isOpen, setIsOpen] = useState(false);
  const [event, setEvent] = useState([]);
  const eventCollection = collection(db, "links");
  //----------------------------------------

  const update = async (e) => {
    e.preventDefault();
    const event = doc(db, "links", ID);
    const data = {
      tipoevento: tipoevento,
      estilo: estilo,
      adultos: adultos,
      ninos: ninos,
      ciudad: ciudad,
      numinvit: numinvit,
      correo: correo,
      precoti: precoti,
      especificaciones: especificaciones,
      pista: pista,
      banquete: banquete,
      cristaleria: cristaleria,
      musica: musica,
      lugarEvento: lugarEvento,
      mesaPostres: mesaPostres,
      barraCocteleria: barraCocteleria,
      decoracion: decoracion,
      fotoVideo: fotoVideo,
      barraMadera: barraMadera,
    };
    await updateDoc(event, data);
    await updateDoc(event, data);
    getEvent();
    console.log("ACTUALIZAR 3: "+ID)
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Datos actualizados correctamente",
      showConfirmButton: false,
      timer: 2000,
    });
  };
  
  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const getEvent = async () => {
    const data = await getDocs(eventCollection);
    //console.log(data.docs)
    setEvent(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(event);
  };

  useEffect(() => {
    getEvent();
  }, []);

  //funcion eliminar
  const deleteEvent = async (id) => {
    const provEvt = doc(db, "links", id);
    await deleteDoc(provEvt);
    getEvent();
  };

  const confirmDelete = (id) => {
    Swal.fire({
      title: "¿Esta seguro de eliminarlo?",
      text: "!No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar.",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEvent(id);
        Swal.fire("Eliminado!", "Su archivo ha sido eliminado..", "éxito");
        hideModal()
      }
    });
  };

  function sumar(){
    const $total = document.getElementById('numinvit');
    let subtotal = 0;
    [ ...document.getElementsByClassName( "monto" ) ].forEach( function ( element ) {
      if((element).value !== '') {
        subtotal += parseFloat((element).value);
      }
    });
    ($total).value = subtotal.toString();
    setNuminvit(subtotal.toString())
   }

  return (
    <>
      <div className="bodyEventos" id="form">
        <section className="content header">
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap');
          </style>
          <h2> Eventos</h2>
        </section>
        <div class="mb-3">
        <input type="text" class="form-control" placeholder="Buscar tipo de evento..."
        onChange={(e)=>{
          setBuscar(e.target.value);
        }}
        ></input>
        </div>
        <div className="tablaP table-responsive">
          <table class="table table-striped table-hover table-bordered">
            <thead>
              <tr>
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
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {event.filter((val)=>{
                if(buscar === ""){
                  return val;
                }else if(
                  val.tipoevento.toLowerCase().includes(buscar.toLowerCase())
                ){
                  return val;
                }
              }).map((even) => (
                <tr key={even.id}>
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
                  <td>
                    <Button
                      onClick={() => {
                        getEventById(even.id);
                        setID(even.id);
                        showModal();
                      }}
                    >
                    Editar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      <Modal show={isOpen} onHide={hideModal}>
        <ModalHeader closeButton>
          <Modal.Title>Editar</Modal.Title>
        </ModalHeader>
        <Modal.Body >
          <form class="row g-3" onSubmit={update}>
            <div class="col-md-6">
              <label>Tipo de Evento</label>
              <select class="form-select" value={tipoevento} onChange={(e) => setTipoevento(e.target.value)}>
                  <option selected>Seleccione</option>
                  <option value="eventoEmpresarial">Evento Empresarial</option>
                  <option value="feriasExhibiciones">Ferias y Exhibiciones</option>
                  <option value="congresosConvenciones">Congresos y Convenciones</option>
                  <option value="eventosSociales">Eventos Sociales</option>
                  <option value="catering">Catering</option>
                  <option value="conciertosEspectaculos">Conciertos y Espectaculos</option>
                </select>
            </div>
            <div class="col-md-6">
              <label>Estilo</label>
              <input type="text" class="form-control" value={estilo} onChange={(e) => setEstilo(e.target.value)}></input>
            </div>
            <div class="col-md-6">
              <label>Adultos</label>
              <input type="number"  className="monto form-control" value={adultos} onChange={(e) => setAdultos(e.target.value)} onKeyUp={Event =>{
                  sumar();
                }}></input>
            </div>
            <div class="col-md-6">
              <label>Niños</label>
              <input type="number"  className="monto form-control" value={ninos} onChange={(e) => setNinos(e.target.value)} onKeyUp={Event =>{
                  sumar();
                }}></input>
            </div>
            <div class="col-md-6">
              <label>Ciudad</label>
              <input type="text" class="form-control" value={ciudad} onChange={(e) => setCiudad(e.target.value)}></input>        
            </div>
            <div class="col-md-6">
              <label>No. invitados</label>
              <input type="number" class="form-control"id="numinvit" disabled value={numinvit} onChange={(e) => setNuminvit(e.target.value)}></input>  
            </div>
            <div class="col-md-6">
              <label>Correo</label>
              <input type="email" class="form-control" value={correo} onChange={(e) => setCorreo(e.target.value)}></input>  
            </div>
            <div class="col-md-6">
              <label>Pre-cotización</label>
              <input type="number" class="form-control" value={precoti} onChange={(e) => setPrecoti(e.target.value)}></input>  
            </div>
            <div class="col-md-6">
              <label>Especificaciones</label>
              <textarea class="form-control" name="pista" value={especificaciones} onChange={(e) => setEspecificaciones(e.target.value)}></textarea> 
            </div>
            <div class="col-md-6">
              <label>Nombre</label>
              <input type="text" class="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>  
            </div>
            <div class="col-md-6">
              <label>Apellidos</label>
              <input type="text" class="form-control" value={apellidos} onChange={(e) => setApellidos(e.target.value)}></input>  
            </div>
            <div class="col-md-6">
              <label>Pista</label>
              <select class="form-select" value={pista} onChange={(e) => setPista(e.target.value)}>
                  <option selected>Seleccione</option>
                  <option value="disco">Disco</option>
                  <option value="baile">Baile</option>
                </select>
            </div>
            <div class="col-md-6">
              <label>Banquete</label>
              <select class="form-select" value={banquete} onChange={(e) => setBanquete(e.target.value)}>
                  <option selected disable>Seleccione</option>
                  <option value="grande">grande</option>
                  <option value="chico">chico</option>
                </select>
            </div>
            <div class="col-md-6">
              <label>Cristaleria</label>
              <select class="form-select" value={cristaleria} onChange={(e) => setCristaleria(e.target.value)}>
                  <option selected disable>Seleccione</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </select>
            </div>
            <div class="col-md-6">
              <label>Musica</label>
              <select class="form-select" value={musica} onChange={(e) => setMusica(e.target.value)}>
                  <option selected disable>Seleccione</option>
                  <option value="electronica">Electronica</option>
                  <option value="reggaeton">Reggaeton</option>
                  <option value="pop">pop</option>
                  <option value="pop">Combinado</option>
                </select>
            </div>
            <div class="col-md-6">
              <label>Lugar de Evento</label>
              <select class="form-select" value={lugarEvento} onChange={(e) => setLugarEvento(e.target.value)}>
                  <option selected disable>Seleccione</option>
                  <option value="aireLibre">Al aire libre</option>
                  <option value="cerrado">Cerrado</option>
                </select>
            </div>
            <div class="col-md-6">
              <label>Mesa de postres</label>
              <select class="form-select" value={mesaPostres} onChange={(e) => setMesaPostres(e.target.value)}>
                  <option selected disable>Seleccione</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </select>
            </div>
            <div class="col-md-6">
              <label>Cocteleria</label>
              <select class="form-select" value={barraCocteleria} onChange={(e) => setBarraCocteleria(e.target.value)}>
                  <option selected disable>Seleccione</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </select>
            </div>
            <div class="col-md-6">
              <label>Decoración</label>
              <select class="form-select" value={decoracion} onChange={(e) => setDecoracion(e.target.value)}>
                  <option selected disable>Seleccione</option>
                  <option value="rustica">Rustica</option>
                  <option value="antigua">Antigua</option>
                </select>
            </div>
            <div class="col-md-6">
              <label>Fotografía y video</label>
              <select class="form-select" value={fotoVideo} onChange={(e) => setFotoVideo(e.target.value)}>
                  <option selected disable>Seleccione</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </select>
            </div>
            <div class="col-md-6">
              <label>Barra de madera</label>
              <select class="form-select" value={barraMadera} onChange={(e) => setBarraMadera(e.target.value)}>
                  <option selected disable>Seleccione</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </select>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" class="btn btn-success" onClick={update}>Actualizar</button>
          <button type="button" class="btn btn-danger" onClick={()=>{
            confirmDelete(ID)
          }}>Eliminar</button>           
        </Modal.Footer>
      </Modal>
    </>
  );
};
