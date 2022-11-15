import { useForm } from "../../hooks/useForm";
import "../../styles/login.scss";
//import Title from './components/title/Title'
//import Label from './components/label/Label'
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { values, handleInputChange } = useForm({
    usuario: "",
    password: "",
  });

  const { usuario, password } = values;
  const usersCollection = collection(db, "users");
  const navigate = useNavigate();

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
    getDocs(usersCollection).then((querySnapshot) => {
      if (querySnapshot.empty) {
        msgError.fire({
          title: "Usuario o contraseña incorrectos",
        });
      } else {
        querySnapshot.forEach((doc) => {
          if (
            doc.data().usuario === usuario &&
            doc.data().password === password
          ) {
            localStorage.setItem("uid", usuario!);
            navigate('/Home');
          } else {
            msgError.fire({
              title: "Usuario o contraseña incorrectos",
            });
          }
        });
      }
    });

  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="container-login100">
          <div className="wrap-login100 p-t-50 p-b-90 p-1-50 p-r-50">
            <form
              className="login100-form flex-sb flex-w"
              onSubmit={handleSubmit}
            >
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
                  onChange={handleInputChange}
                  value={usuario}
                />
                <span className="focus-input100"></span>
              </div>
              <div className="wrap-input100 m-b-16">
                <input
                  className="input100"
                  type="password"
                  placeholder="Contraseña"
                  id="password"
                  name="password"
                  autoComplete="off"
                  onChange={handleInputChange}
                  value={password}
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
  );
};
