import React, { useRef, useEffect, useState  } from "react";
import "../../styles/Principal.scss";
import profileImage from "../../assets/Boda.jpg";
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
  //importar dependecncias
  import * as tf from "@tensorflow/tfjs";
  import * as qna from "@tensorflow-models/qna";
  import { Fragment } from "react";

function Redirecciona() {
  // 👇️ redirects to an external URL
  window.location.replace("https://www.facebook.com/marinamezawp/photos");
}

export const Principal = () => {
  //Modal
  const [isOpen, setIsOpen] = useState(false);
  //---------
  const showModal = () => {
    setIsOpen(true);

  };

  const hideModal = () => {
    setIsOpen(false);
  };
  //CHATBOT
  const passageRef = useRef(null);
  const questionRef = useRef(null);
  const [answer, setAnswer] = useState();
  const [model, setModel] = useState(null);
  const [pregunta, setPregunta] = useState("");

  // 4. Load Tensorflow Model
  const loadModel = async () => {
    const loadedModel = await qna.load();
    setModel(loadedModel);
    console.log("Model loaded.");
  };

  const answerQuestion = async (e) => {
    //document.getElementsByTagName("textArea")[0].value = "";
      console.log("Question submitted.");
      const passage = "Marina Mesa is an event hall, where parties are held, located in Tepic."

      const answers = await model.findAnswers(pregunta, passage);
      setAnswer(answers);
      console.log(answers);

      //-----------------
  };

  const limpiar = (id) => {
    document.getElementsByTagName("textArea")[0].value = "";
    document.getElementsByTagName("textArea")[1].value = "";
    document.getElementsByTagName("textArea")[2].value = "";
    document.getElementsByTagName("textArea")[3].value = "";
  }

  useEffect(() => {
    loadModel();
  }, []);

  
  return (
    <>
      <div className="bodyPrincipal">
        <section className="content header">
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap');
          </style>
          <h2> Marina Meza Wedding & Planner </h2>
        </section>

        <section className="content sau">
          
          <div className="mb-3">
          <label>Prueba la versión beta de nuestro chatbot</label>
          
          </div>
          <div className="mb-3">
          <button
            type="button"
            className="btn btn-success"
            
            onClick={() => {
              showModal();
              limpiar();
            }}
          >
            ChatBot
          </button>
          </div>
          
          <h1 className="title">Conócenos</h1>
          <p>
            Somos una empresa dedicada al Diseño, planeación, coordinación y
            logística para tu evento. Cuidamos cada detalle para que vivas al
            máximo la experiencia de tu gran día, con nuestra experiencia, y
            creatividad a tu servicio. ¡Nos encanta formar parte de esos
            primeros momentos! No importa si tu evento es petite, llena de color
            con detalles florales y lucirá increíble. #cásateconmigo
          </p>

          <div className="box-container">
            <div className="box">
              <h1 className="title">Asesoramos</h1>
              <p>
                Con nuestro equipo de trabajo, usted y sus ideas; le asesoramos
                y hacemos toda una planeación alrededor de las mismas para
                lograr materializar su evento en una experiencia memorable.
              </p>
            </div>
            <div className="box">
              <h1 className="title">Materializamos</h1>
              <p>
                Nos encargamos de inspeccionar hasta el más mínimo detalle de su
                evento desde la organización en nuestras oficinas, la logística
                en la sede, la operación y la post-producción de sus eventos.
              </p>
            </div>
            <div className="box">
              <h1 className="title">Creamos </h1>
              <p>
                Su evento no termina cuando retiramos el equipo y nos marchamos
                de la sede; sino que ahí comienza una relación cliente proveedor
                que mantenemos viva para tener juntos futuros éxitos.
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

      <Modal show={isOpen} onHide={hideModal}>
        <ModalHeader closeButton>
          <Modal.Title>ChatBot</Modal.Title>
        </ModalHeader>
        <ModalBody>
        {model == null ? (
          <div>
            <div>Conectando con Tensorflow</div>
            <div class="spinner-border text-success" role="status">
              <span class="sr-only"></span>
            </div>
          </div>
        ) : (
          <React.Fragment>
            <div className="input-group mb-2">
            <div className="input-group-prepend">
              <button className="btn btn-primary" type="button" onClick={()=>{answerQuestion();}}>
                Enviar
              </button>
            </div>
            <input
              type="text"
              className="form-control"
              id="txtPregunta"
              placeholder="Haz tu pregunta"
              onChange={(e) => setPregunta(e.target.value)}
            ></input>
          </div>
          <div className="mb-2">
          {answer
              ? answer.map((ans) => (
                  <div>
                    <textarea className="form-control" id="textArea" >{ans.text}</textarea>
                  </div>
                ))
              : ""}
          </div>      
          </React.Fragment>
        )}

                    
        </ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-danger" onClick={()=>{
            hideModal();
            }}>Cerrar</button>
        </ModalFooter>
      </Modal>
    </>
  );
};
