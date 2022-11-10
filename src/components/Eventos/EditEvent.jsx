import React, { useEffect, useState } from "react";
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
import Swal from "sweetalert2";

export const EditEvent = () => {
  const [tipoevento, setTipoevento] = useState("");
  const [estilo, setEstilo] = useState("");
  const [adultos, setAdultos] = useState("");
  const [ninos, setNinos] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [numinvit, setNuminvit] = useState("");
  const [correo, setCorreo] = useState("");
  const [precoti, setPrecoti] = useState("");
  const [especificaciones, setEspecificaciones] = useState("");
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

  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const event = doc(db, "links", id);
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
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Datos actualizados correctamente",
      showConfirmButton: false,
      timer: 2000,
    });
    navigate("/Eventos/");
  };

  const getEventById = async (id) => {
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

  useEffect(() => {
    getEventById(id);
  }, []);

  function sumar(){
    const $total = document.getElementById('numinvit');
    let subtotal = 0;
    [ ...document.getElementsByClassName( "monto" ) ].forEach( function ( element ) {
      if(element.value !== '') {
        subtotal += parseFloat((element.value));
      }
    });
    $total.value = subtotal.toString();
   }

  return (
    <>
      <div className="bodyAgregarEvento" id="form" onSubmit={update}>
        <section className="content header">
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap');
          </style>
          <h2> Actualizar Evento</h2>
        </section>
        <div className="content">
          <div className="contact-wrapper animated bounceInUp">
            <div className="contact-form">
              <form action="" id="form">
                <div className="content-select">
                  <p>
                    <label>Tipo de evento</label>
                    <select
                      name="tipoevento"
                      value={tipoevento}
                      onChange={(e) => setTipoevento(e.target.value)}
                      onMouseUp={(Event) => {
                        sumar();
                      }}
                    >
                      <option selected disabled>
                        Seleccione
                      </option>
                      <option value="eventoEmpresarial">
                        Eventos Empresariales
                      </option>
                      <option value="feriasExhibiciones">
                        Ferias y Exhibiciones
                      </option>
                      <option value="congresosConvenciones">
                        Congresos y Convenciones
                      </option>
                      <option value="eventosSociales">Eventos Sociales</option>
                      <option value="catering">Catering</option>
                      <option value="conciertosEspectaculos">
                        Conciertos y Espectaculos
                      </option>
                    </select>
                  </p>
                </div>
                <p>
                  <label>Estilo</label>
                  <input
                    type="text"
                    name="estilo"
                    value={estilo}
                    onChange={(e) => setEstilo(e.target.value)}
                    onKeyUp={(Event) => {
                      sumar();
                    }}
                  />
                </p>
                <p>
                  <label>Adultos</label>
                  <input
                    type="number"
                    id="id_adultos"
                    name="adultos"
                    value={adultos}
                    className="monto"
                    onKeyUp={(Event) => {
                      sumar();
                    }}
                    onChange={(e) => setAdultos(e.target.value)}
                  />
                </p>
                <p>
                  <label>Niños</label>
                  <input
                    type="number"
                    id="id_ninos"
                    name="ninos"
                    value={ninos}
                    className="monto"
                    onKeyUp={(Event) => {
                      sumar();
                    }}
                    onChange={(e) => setNinos(e.target.value)}
                  />
                </p>
                <p>
                  <label>Ciudad</label>
                  <input
                    type="text"
                    name="ciudad"
                    value={ciudad}
                    onChange={(e) => setCiudad(e.target.value)}
                    onKeyUp={(Event) => {
                      sumar();
                    }}
                  />
                </p>
                <p>
                  <label>No. invitados</label>
                  <input
                    type="text"
                    id="numinvit"
                    name="numinvit"
                    value={numinvit}
                    onChange={(e) => setNuminvit(e.target.value)}
                  />
                </p>
                <p>
                  <label>Correo</label>
                  <input
                    type="text"
                    name="correo"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    onKeyUp={(Event) => {
                      sumar();
                    }}
                  />
                </p>
                <p>
                  <label>Pre-cotización</label>
                  <input
                    type="number"
                    name="precoti"
                    value={precoti}
                    onChange={(e) => setPrecoti(e.target.value)}
                    onKeyUp={(e) => {
                      sumar();
                    }}
                  />
                </p>
                <p>
                  <label>Especificaciones</label>
                  <textarea
                    name="especificaciones"
                    value={especificaciones}
                    onChange={(e) => setEspecificaciones(e.target.value)}
                    onKeyUp={(Event) => {
                      sumar();
                    }}
                  ></textarea>
                </p>
              </form>
              <form action="">
                <div className="content-select">
                  <p>
                    <label>Pista</label>
                    <select
                      name="pista"
                      value={pista}
                      onChange={(e) => setPista(e.target.value)}
                      onMouseUp={(Event) => {
                        sumar();
                      }}
                    >
                      <option selected disabled>
                        Seleccione
                      </option>
                      <option value="disco">Disco</option>
                      <option value="baile">Baile</option>
                    </select>
                  </p>
                </div>
                <div className="content-select">
                  <p>
                    <label>Banquete</label>
                    <select
                      name="banquete"
                      value={banquete}
                      onChange={(e) => setBanquete(e.target.value)}
                      onMouseUp={(Event) => {
                        sumar();
                      }}
                    >
                      <option selected disabled>
                        Seleccione
                      </option>
                      <option value="grande">grande</option>
                      <option value="chico">chico</option>
                    </select>
                  </p>
                </div>
                <div className="content-select">
                  <p>
                    <label>Cristalería</label>
                    <select
                      name="cristaleria"
                      value={cristaleria}
                      onChange={(e) => setCristaleria(e.target.value)}
                      onMouseUp={(Event) => {
                        sumar();
                      }}
                    >
                      <option selected disabled>
                        Seleccione
                      </option>
                      <option value="Si">Si</option>
                      <option value="No">No</option>
                    </select>
                  </p>
                </div>
                <div className="content-select">
                  <p>
                    <label>Música</label>
                    <select
                      name="musica"
                      value={musica}
                      onChange={(e) => setMusica(e.target.value)}
                      onMouseUp={(Event) => {
                        sumar();
                      }}
                    >
                      <option selected disabled>
                        Seleccione
                      </option>
                      <option value="electronica">Electronica</option>
                      <option value="reggaeton">Reggaeton</option>
                      <option value="pop">pop</option>
                      <option value="pop">Combinado</option>
                    </select>
                  </p>
                </div>
                <div className="content-select">
                  <p>
                    <label>Lugar de evento</label>
                    <select
                      name="lugarEvento"
                      value={lugarEvento}
                      onChange={(e) => setLugarEvento(e.target.value)}
                      onMouseUp={(Event) => {
                        sumar();
                      }}
                    >
                      <option selected disabled>
                        Seleccione
                      </option>
                      <option value="aireLibre">Al aire libre</option>
                      <option value="cerrado">Cerrado</option>
                    </select>
                  </p>
                </div>
                <div className="content-select">
                  <p>
                    <label>Mesa de postres</label>
                    <select
                      name="mesaPostres"
                      value={mesaPostres}
                      onChange={(e) => setMesaPostres(e.target.value)}
                      onMouseUp={(Event) => {
                        sumar();
                      }}
                    >
                      <option selected disabled>
                        Seleccione
                      </option>
                      <option value="Si">Si</option>
                      <option value="No">No</option>
                    </select>
                  </p>
                </div>
                <div className="content-select">
                  <p>
                    <label>Coctelería</label>
                    <select
                      name="barraCocteleria"
                      value={barraCocteleria}
                      onChange={(e) => setBarraCocteleria(e.target.value)}
                      onMouseUp={(Event) => {
                        sumar();
                      }}
                    >
                      <option selected disabled>
                        Seleccione
                      </option>
                      <option value="Si">Si</option>
                      <option value="No">No</option>
                    </select>
                  </p>
                </div>
                <div className="content-select">
                  <p>
                    <label>Decoración</label>
                    <select
                      name="decoracion"
                      value={decoracion}
                      onChange={(e) => setDecoracion(e.target.value)}
                      onMouseUp={(Event) => {
                        sumar();
                      }}
                    >
                      <option selected disabled>
                        Seleccione
                      </option>
                      <option value="rustica">Rustica</option>
                      <option value="antigua">Antigua</option>
                    </select>
                  </p>
                </div>
                <div className="content-select">
                  <p>
                    <label>Fotografía y video</label>
                    <select
                      name="fotoVideo"
                      value={fotoVideo}
                      onChange={(e) => setFotoVideo(e.target.value)}
                      onMouseUp={(Event) => {
                        sumar();
                      }}
                    >
                      <option selected disabled>
                        Seleccione
                      </option>
                      <option value="Si">Si</option>
                      <option value="No">No</option>
                    </select>
                  </p>
                </div>
                <div className="content-select">
                  <p>
                    <label>Barra de madera</label>
                    <select
                      name="barraMadera"
                      value={barraMadera}
                      onChange={(e) => setBarraMadera(e.target.value)}
                      onMouseUp={(Event) => {
                        sumar();
                      }}
                    >
                      <option selected disabled>
                        Seleccione
                      </option>
                      <option value="Si">Si</option>
                      <option value="No">No</option>
                    </select>
                  </p>
                </div>
                <div>
                  <p>
                    <button type="submit">Actualizar</button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditEvent;
