import React from "react";
import "../../styles/AgregarEvento.scss";
import profileImage from "../../assets/Logo.png";

export const AgregarEvento = () => {
  return (
    <div className="bodyAgregarEvento">
      <div className="content">
        <h1 className="logo">Registrar Evento</h1>

        <div className="contact-wrapper animated bounceInUp">
          <div className="contact-form">
            <form action="">
              <p>
                <label>Tipo de evento</label>
                <input type="text" name="tipoevento" />
              </p>
              <p>
                <label>Estilo</label>
                <input type="text" name="estilo" />
              </p>
              <p>
                <label>Adultos</label>
                <input type="text" name="adultos" />
              </p>
              <p>
                <label>Niños</label>
                <input type="text" name="ninos" />
              </p>
              <p>
                <label>Ciudad</label>
                <input type="text" name="ciudad" />
              </p>
              <p>
                <label>No. invitados</label>
                <input type="text" name="numinvit" />
              </p>
              <p>
                <label>Correo</label>
                <input type="text" name="correo" />
              </p>
              <p>
                <label>Pre-cotización</label>
                <input type="text" name="precoti" />
              </p>
              <p>
                <label>Especificaciones</label>
                <textarea name="message"></textarea>
              </p>
            </form>
            <form action="">
              <div className="content-select">
                <p>
                  <label>Pista</label>
                  <select>
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
                  <select>
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
                  <label>Cristalería</label>
                  <select>
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
                  <select>
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
                  <select>
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
                  <select>
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
                  <select>
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
                  <select>
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
                  <select>
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
                  <select>
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
            <h4>Más información</h4>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              provident ipsam necessitatibus repellendus?
            </p>
            <p>Marina Meza</p>
          </div>
        </div>
      </div>
    </div>
  );
};
