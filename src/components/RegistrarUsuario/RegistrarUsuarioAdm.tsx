import { addDoc, collection, getDocs } from "firebase/firestore";
import { useForm } from "../../hooks/useForm";
import "../../styles/RegistrarUsuario.scss";
import { db } from "../../firebase";
import Swal from "sweetalert2";




export const RegistrarUsuarioAdm = () => {
  const { values, handleInputChange, setValues } = useForm({
    usuario: "",
    password: "",
  });

  const { usuario, password } = values;
  const usersCollection = collection(db, "users");

  const msgError = Swal.mixin({
    toast: true,
    icon: "error",
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if(usuario == "" || password == ""){
      msgError.fire({
        title: "Debe llenar todos los campos",
      });
      return;
    }
    getDocs(usersCollection).then(async (querySnapshot) => {
      if (querySnapshot.empty) {
        await addDoc(collection(db, "users"), {
          usuario: usuario,
          password: password,
        });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Usuario agregado correctamente",
          showConfirmButton: false,
          timer: 2000,
        });
        setValues({
          usuario: "",
          password: "",
        });
      } else {
        querySnapshot.forEach(async (doc) => {
          if (doc.data().usuario === usuario) {
            msgError.fire({
              title: "El usuario ya existe",
            });
          } else {
            await addDoc(collection(db, "users"), {
              usuario: usuario,
              password: password,
            });
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Usuario agregado correctamente",
              showConfirmButton: false,
              timer: 2000,
            });
            setValues({
              usuario: "",
              password: "",
            });
          }
        });
      }
    });

  };

  return (

    
    <div className="bodyRegistro" id="form"  >
<section className="content header">
<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap');
</style>
  <h2 > Registro Administradores</h2>
 </section>
 

    <div className="registrar-usuarios">
      <section className="form-register">
        <h4>Registrar Usuario</h4>
        <form onSubmit={handleSubmit}>
          <input
            className="controls"
            type="text"
            name="usuario"
            id="usuario"
            placeholder="Nombre de usuario"
            onChange={handleInputChange}
            value={usuario}
          />
          <input
            className="controls"
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
            onChange={handleInputChange}
            value={password}
          />
          <input className="botons" type="submit" value="Registrar" />
        </form>
      </section>
    </div>
    </div>
  );
};
