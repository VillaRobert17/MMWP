import {useState} from "react";
import "../../styles/AgregarEvento.scss";
import profileImage from "../../assets/Logo.png";

export const AgregarEvento = (props: any) => {
  
  const initialStateValues = {
    tipoevento: "",
    estilo: "",
    adultos: "",
    ninos: "",
    ciudad: "",
    numinvit: "",
    correo: "",
    precoti: "",
    especificaciones: "",
    pista: "",
    banquete: "",
    cristaleria: "",
    musica: "",
    lugarEvento: "",
    mesaPostres: "",
    barraCocteleria: "",
    decoracion: "",
    fotoVideo: "",
    barraMadera: "",
  };
  
  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e: any) => {
    const {name, value} = e.target;
    setValues({...values,[name]:value})
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.addOrEditLink(values);
    
  };

  function limpiar() {
    document.getElementsByTagName("input")[0].value = "";
    document.getElementsByTagName("input")[2].value = "";
    document.getElementsByTagName("input")[3].value = "";
    document.getElementsByTagName("input")[4].value = "";
    document.getElementsByTagName("input")[5].value = "";
    document.getElementsByTagName("input")[6].value = "";
    document.getElementsByTagName("textarea")[0].value = "";
    
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
    <div className="bodyAgregalrEvento" id="form" onSubmit={handleSubmit}>
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
                  <select name="tipoevento" onChange={handleInputChange} onMouseUp={Event =>{
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
                <input type="text" name="estilo" onChange={handleInputChange} onKeyUp={Event =>{
                  sumar();
                }}/>
              </p>
              <p>
              
                <label>Adultos</label>
                <input type="number" id="id_adultos" name="adultos" className="monto" onKeyUp={Event =>{
                  sumar();
                }}
                 onChange={handleInputChange}/>
              </p>
              <p>
                <label>Niños</label>
                <input type="number" id="id_ninos" name="ninos" className="monto" onKeyUp={Event =>{
                  sumar();
                }}
                onChange={handleInputChange} />
              </p>
              <p>
                <label>Ciudad</label>
                <input type="text" name="ciudad" onChange={handleInputChange} onKeyUp={Event =>{
                  sumar();
                }}/>
              </p>
              <p>
                <label>No. invitados</label>               
                <input type="text" id="numinvit" name="numinvit" onChange={handleInputChange}/>    
              </p>
              <p>
                <label>Correo</label>
                <input type="text" name="correo" onChange={handleInputChange} onKeyUp={Event =>{
                  sumar();
                }}/>
              </p>
              <p>
                <label>Pre-cotización</label>
                <input type="number" name="precoti" onChange={handleInputChange} onKeyUp={(e) => {
                    sumar();
                }}/>
              </p>
              <p>
                <label>Especificaciones</label>
                <textarea name="especificaciones" onChange={handleInputChange} onKeyUp={Event =>{
                  sumar();
                }}></textarea>
              </p>
            </form>
            <form action="">
              <div className="content-select">
                <p>
                  <label>Pista</label>
                  <select name="pista" onChange={handleInputChange} onMouseUp={Event =>{
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
                  <select name="banquete" onChange={handleInputChange} onMouseUp={Event =>{
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
                  <select name="cristaleria" onChange={handleInputChange} onMouseUp={Event =>{
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
                  <select name="musica" onChange={handleInputChange} onMouseUp={Event =>{
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
                  <select name="lugarEvento" onChange={handleInputChange} onMouseUp={Event =>{
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
                  <select name="mesaPostres" onChange={handleInputChange} onMouseUp={Event =>{
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
                  <select name="barraCocteleria" onChange={handleInputChange} onMouseUp={Event =>{
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
                  <select name="decoracion" onChange={handleInputChange} onMouseUp={Event =>{
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
                  <select name="fotoVideo" onChange={handleInputChange} onMouseUp={Event =>{
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
                  <select name="barraMadera" onChange={handleInputChange} onMouseUp={Event =>{
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
                  <button onClick={(e) =>{
                    limpiar();
                  }}>Enviar</button>
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
