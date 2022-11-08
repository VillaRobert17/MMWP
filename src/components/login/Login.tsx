import React from 'react'
import '../../styles/login.scss'
import { useState } from "react";
//import Title from './components/title/Title'
//import Label from './components/label/Label'


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
