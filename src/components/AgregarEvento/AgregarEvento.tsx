import React, {useState} from "react";
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
  
  return (
    <div className="bodyAgregarEvento" onSubmit={handleSubmit}>
      <section className="content header">
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap');
      </style>
        <h2 > Agregar Evento</h2>
        
       </section>
      <div className="content">
        
        <div className="contact-wrapper animated bounceInUp">
          <div className="contact-form">
            <form action="">
              <p>
                <label>Tipo de evento</label>
                <input type="text" name="tipoevento" onChange={handleInputChange}/>
              </p>
              <p>
                <label>Estilo</label>
                <input type="text" name="estilo" onChange={handleInputChange}/>
              </p>
              <p>
                <label>Adultos</label>
                <input type="text" name="adultos" onChange={handleInputChange}/>
              </p>
              <p>
                <label>Niños</label>
                <input type="text" name="ninos" onChange={handleInputChange}/>
              </p>
              <p>
                <label>Ciudad</label>
                <input type="text" name="ciudad" onChange={handleInputChange}/>
              </p>
              <p>
                <label>No. invitados</label>
                <input type="text" name="numinvit" onChange={handleInputChange}/>
              </p>
              <p>
                <label>Correo</label>
                <input type="text" name="correo" onChange={handleInputChange}/>
              </p>
              <p>
                <label>Pre-cotización</label>
                <input type="text" name="precoti" onChange={handleInputChange}/>
              </p>
              <p>
                <label>Especificaciones</label>
                <textarea name="especificaciones" onChange={handleInputChange}></textarea>
              </p>
            </form>
            <form action="">
              <div className="content-select">
                <p>
                  <label>Pista</label>
                  <select name="pista" onChange={handleInputChange}>
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
                  <select name="banquete" onChange={handleInputChange}>
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
                  <select name="cristaleria" onChange={handleInputChange}>
                    <option selected disabled>
                      Seleccione
                    </option>
                    <option value="disco">Ejemplo</option>
                    <option value="baile">Ejemplo</option>
                  </select>
                </p>
              </div>
              <div className="content-select">
                <p>
                  <label>Música</label>
                  <select name="musica" onChange={handleInputChange}>
                    <option selected disabled>
                      Seleccione
                    </option>
                    <option value="disco">Ejemplo</option>
                    <option value="baile">Ejemplo</option>
                  </select>
                </p>
              </div>
              <div className="content-select">
                <p>
                  <label>Lugar de evento</label>
                  <select name="lugarEvento" onChange={handleInputChange}>
                    <option selected disabled>
                      Seleccione
                    </option>
                    <option value="disco">Ejemplo</option>
                    <option value="baile">Ejemplo</option>
                  </select>
                </p>
              </div>
              <div className="content-select">
                <p>
                  <label>Mesa de postres</label>
                  <select name="mesaPostres" onChange={handleInputChange}>
                    <option selected disabled>
                      Seleccione
                    </option>
                    <option value="disco">Ejemplo</option>
                    <option value="baile">Ejemplo</option>
                  </select>
                </p>
              </div>
              <div className="content-select">
                <p>
                  <label>Barra de coctelería</label>
                  <select name="barraCocteleria" onChange={handleInputChange}>
                    <option selected disabled>
                      Seleccione
                    </option>
                    <option value="disco">Ejemplo</option>
                    <option value="baile">Ejemplo</option>
                  </select>
                </p>
              </div>
              <div className="content-select">
                <p>
                  <label>Decoración</label>
                  <select name="decoracion" onChange={handleInputChange}>
                    <option selected disabled>
                      Seleccione
                    </option>
                    <option value="disco">Ejemplo</option>
                    <option value="baile">Ejemplo</option>
                  </select>
                </p>
              </div>
              <div className="content-select">
                <p>
                  <label>Fotografía y video</label>
                  <select name="fotoVideo" onChange={handleInputChange}>
                    <option selected disabled>
                      Seleccione
                    </option>
                    <option value="disco">Ejemplo</option>
                    <option value="baile">Ejemplo</option>
                  </select>
                </p>
              </div>
              <div className="content-select">
                <p>
                  <label>Barra de madera</label>
                  <select name="barraMadera" onChange={handleInputChange}>
                    <option selected disabled>
                      Seleccione
                    </option>
                    <option value="disco">Ejemplo</option>
                    <option value="baile">Ejemplo</option>
                  </select>
                </p>
              </div>
              <div>
                <p>
                  <button>Enviar</button>
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
