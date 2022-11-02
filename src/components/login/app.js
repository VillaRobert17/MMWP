import React, {useEffect} from "react";
import { app } from "./fb";
import { Principal } from '../Principal/Principal'
import { Login } from './Login'
import { useEffect } from "react";

function App() {

    const [usuario, setUsuario] = React.useState(null);
    useEffect (()=>{
        app.auth().onAuthStateChanged((usuarioFirebase)=>{
            console.log("Ya se cuenta con sesión iniciada: ",usuarioFirebase)
            setUsuario(usuarioFirebase);
        })
    },[]);

    return<>{usuario ? <Principal /> : <Login setUsuario={setUsuario} />}</>
}

export default App