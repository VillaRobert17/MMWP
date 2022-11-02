import React from 'react'
import '../../styles/login.scss'
import {app} from './fb';


const Login = (props)=>{
  const [isRegistrado, setIsRegistrando] = React.useState(false);

const iniciarSesion = (correo, password) => {
  app.aut().singInWithEmailAndPassword(correo, password).then((usuarioFirebase) => {
    console.log("Sesión iniciada con: ", usuarioFirebase.user);
    props.setUsuario(usuarioFirebase);
  })
}

const crearUsuario = (correo, password) => {
  app
    .auth()
    .createUserWithEmailAndPassword(correo, password)
    .then((usuarioFirebase) => {
      console.log("Usuario creado: ", usuarioFirebase);
      props.setUsuario(usuarioFirebase);
    })
}
const submitHandler = (e) => {
  e.preventDefault();
  const correo = e.target.emailField.value;
  const password = e.target.passwordField.value;
  
  if (isRegistrado){
    crearUsuario(correo,password);
  }

  if (!isRegistrado){
    iniciarSesion(correo,password);
  }

};
return(
  <div>
  <h1>{isRegistrado ? "Registrate" : "Inicia sesion"}</h1>
  <form>
      <label htmlFor='emailField'>Correo</label>
      <input type="email" id="emailField"/>
  </form>
  </div>
);
}

export const Login = () => {
  return (
    <div className="login">
    <div className="login-container">
      <div className="container-login100">
        <div className="wrap-login100 p-t-50 p-b-90 p-1-50 p-r-50">
          <form className="login100-form flex-sb flex-w">
            <span className="login100-form-title">
              <a href="/">
                <i className="fas fa-user"></i>
              </a>
            </span>
            <div className="wrap-input100 m-b-16">
              <input
                className="input100"
                type="text"
                placeholder="Usuario"
                id="usuario"
                name="usuario"
                autoComplete="off"
              />
              <span className="focus-input100"></span>
            </div>
            <div className="wrap-input100 m-b-16">
              <input
                className="input100"
                type="password"
                placeholder="Contraseña"
                id="contrasena"
                name="contrasena"
                autoComplete="off"
              />
              <span className="focus-input100"></span>
            </div>
            <div className="container-login100-form-btn m-t-17">
              <div className="w-full beforeNone text-center">
                <input
                  type="submit"
                  className="nv-login-submit login100-form-btn"
                  name="submit"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}
