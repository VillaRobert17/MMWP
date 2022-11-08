import {useState} from "react";
import "../../styles/AgregarEvento.scss";
import profileImage from "../../assets/Logo.png";
import {db} from '../../firebase'
import {collection, addDoc,getDocs, Timestamp} from 'firebase/firestore'
import Swal from 'sweetalert2'

export const AgregarEvento = () => {
  
  const [tipoevento, setTipoevento] = useState('')
  const [estilo, setEstilo] = useState('')
  const [adultos, setAdultos] = useState('')
  const [ninos, setNinos] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [numinvit, setNuminvit] = useState('')
  const [correo, setCorreo] = useState('')
  const [precoti, setPrecoti] = useState('')
  const [especificaciones, setEspecificaciones] = useState('')
  const [pista, setPista] = useState('')
  const [banquete, setBanquete] = useState('')
  const [cristaleria, setCristaleria] = useState('')
  const [musica, setMusica] = useState('')
  const [lugarEvento, setLugarEvento] = useState('')
  const [mesaPostres, setMesaPostres] = useState('')
  const [barraCocteleria, setBarraCocteleria] = useState('')
  const [decoracion, setDecoracion] = useState('')
  const [fotoVideo, setFotoVideo] = useState('')
  const [barraMadera, setBarraMadera] = useState('')
  
  const handleSubmit = async (e:any) => {
    e.preventDefault()
    try{
        await addDoc(collection(db, 'links'),{
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
        })
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Datos agregados correctamente',
          showConfirmButton: false,
          timer: 2000
        })
        limpiar();
        
    }catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salio mal!: '+err,
      })
    }
}


  function limpiar() {
    document.getElementsByTagName("input")[0].value = "";
    document.getElementsByTagName("input")[1].value = "";
    document.getElementsByTagName("input")[2].value = "";
    document.getElementsByTagName("input")[3].value = "";
    document.getElementsByTagName("input")[4].value = "";
    document.getElementsByTagName("input")[5].value = "";
    document.getElementsByTagName("input")[6].value = "";
    document.getElementsByTagName("textarea")[0].value = "";
    document.getElementsByTagName("select")[0].value="Seleccione";
    document.getElementsByTagName("select")[1].value="Seleccione";
    document.getElementsByTagName("select")[2].value="Seleccione";
    document.getElementsByTagName("select")[3].value="Seleccione";
    document.getElementsByTagName("select")[4].value="Seleccione";
    document.getElementsByTagName("select")[5].value="Seleccione";
    document.getElementsByTagName("select")[6].value="Seleccione";
    document.getElementsByTagName("select")[7].value="Seleccione";
    document.getElementsByTagName("select")[8].value="Seleccione";
    document.getElementsByTagName("select")[9].value="Seleccione";
    document.getElementsByTagName("select")[10].value="Seleccione";
    
}

  function sumar(){
  const $total = document.getElementById('numinvit');
  let subtotal = 0;
  [ ...document.getElementsByClassName( "monto" ) ].forEach( function ( element ) {
    if((element as HTMLInputElement).value !== '') {
      subtotal += parseFloat((element as HTMLInputElement).value);
    }
  });
  ($total! as HTMLInputElement)!.value = subtotal.toString();
 }
 
  
  return (
    <div className="bodyAgregarEvento" id="form" onSubmit={handleSubmit}>
      <section className="content header">
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap');
      </style>
        <h2 > Agregar Evento</h2>
       </section>
      <div className="content">
        
        <div className="contact-wrapper animated bounceInUp">
          <div className="contact-form">
            <form action="" id="form">
            <div className="content-select">
                <p>
                  <label>Tipo de evento</label>
                  <select name="tipoevento" onChange={(e) => setTipoevento(e.target.value)} onMouseUp={Event =>{
                  sumar();
                }}>
                    <option selected disabled >
                      Seleccione
                    </option>
                    <option value="eventoEmpresarial">Eventos Empresariales</option>
                    <option value="feriasExhibiciones">Ferias y Exhibiciones</option>
                    <option value="congresosConvenciones">Congresos y Convenciones</option>
                    <option value="eventosSociales">Eventos Sociales</option>
                    <option value="catering">Catering</option>
                    <option value="conciertosEspectaculos">Conciertos y Espectaculos</option>
                  </select>
                </p>
              </div>
              <p>
                <label>Estilo</label>
                <input type="text" name="estilo" onChange={(e) => setEstilo(e.target.value)} onKeyUp={Event =>{
                  sumar();
                }}/>
              </p>
              <p>
              
                <label>Adultos</label>
                <input type="number" id="id_adultos" name="adultos" className="monto" onKeyUp={Event =>{
                  sumar();
                }}
                onChange={(e) => setAdultos(e.target.value)}/>
              </p>
              <p>
                <label>Niños</label>
                <input type="number" id="id_ninos" name="ninos" className="monto" onKeyUp={Event =>{
                  sumar();
                }}
                onChange={(e) => setNinos(e.target.value)} />
              </p>
              <p>
                <label>Ciudad</label>
                <input type="text" name="ciudad" onChange={(e) => setCiudad(e.target.value)} onKeyUp={Event =>{
                  sumar();
                }}/>
              </p>
              <p>
                <label>No. invitados</label>               
                <input type="text" id="numinvit" name="numinvit" onChange={(e) => setNuminvit(e.target.value)}/>    
              </p>
              <p>
                <label>Correo</label>
                <input type="text" name="correo" onChange={(e) => setCorreo(e.target.value)} onKeyUp={Event =>{
                  sumar();
                }}/>
              </p>
              <p>
                <label>Pre-cotización</label>
                <input type="number" name="precoti" onChange={(e) => setPrecoti(e.target.value)} onKeyUp={(e) => {
                    sumar();
                }}/>
              </p>
              <p>
                <label>Especificaciones</label>
                <textarea name="especificaciones" onChange={(e) => setEspecificaciones(e.target.value)} onKeyUp={Event =>{
                  sumar();
                }}></textarea>
              </p>
            </form>
            <form action="">
              <div className="content-select">
                <p>
                  <label>Pista</label>
                  <select name="pista" onChange={(e) => setPista(e.target.value)} onMouseUp={Event =>{
                  sumar();
                }}>
                    <option selected disabled >
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
                  <select name="banquete" onChange={(e) => setBanquete(e.target.value)} onMouseUp={Event =>{
                  sumar();
                }}>
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
                  <select name="cristaleria" onChange={(e) => setCristaleria(e.target.value)} onMouseUp={Event =>{
                  sumar();
                }}>
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
                  <select name="musica" onChange={(e) => setMusica(e.target.value)} onMouseUp={Event =>{
                  sumar();
                }}>
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
                  <select name="lugarEvento" onChange={(e) => setLugarEvento(e.target.value)} onMouseUp={Event =>{
                  sumar();
                }}>
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
                  <select name="mesaPostres" onChange={(e) => setMesaPostres(e.target.value)} onMouseUp={Event =>{
                  sumar();
                }}>
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
                  <label>Barra de coctelería</label>
                  <select name="barraCocteleria" onChange={(e) => setBarraCocteleria(e.target.value)} onMouseUp={Event =>{
                  sumar();
                }}>
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
                  <select name="decoracion" onChange={(e) => setDecoracion(e.target.value)} onMouseUp={Event =>{
                  sumar();
                }}>
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
                  <select name="fotoVideo" onChange={(e) => setFotoVideo(e.target.value)} onMouseUp={Event =>{
                  sumar();
                }}>
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
                  <select name="barraMadera" onChange={(e) => setBarraMadera(e.target.value)} onMouseUp={Event =>{
                  sumar();
                }}>
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
                  <button type='submit'>Enviar</button>
                </p>
              </div>
            </form>
          </div>
          <div className="contact-info">
            <div className="contact-info-logo">
              <img src={profileImage} width="160" height="160" />
            </div>
            <h4>Para más información o dudas,contactanos en: </h4>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i> Tepic, Nayarit, México
              </li>
              <li>
                <i className="fas fa-phone"></i> (111) 111 111 111
              </li>
              <li>
                <i className="fas fa-envelope-open-text"></i> mmwp@gmail.com
              </li>
            </ul>
            <p>
            Diseño, planeación, coordinación y logística para tu evento. 
            Cuidamos cada detalle para que vivas al máximo la experiencia de tu gran día, con nuestra experiencia, y creatividad a tu servicio.
            </p>
            <p>-Marina Meza Wedding & Event Planner</p>
          </div>
        </div>
      </div>
    </div>
  );
};
