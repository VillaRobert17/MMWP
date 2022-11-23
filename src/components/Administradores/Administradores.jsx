import { useEffect, useState } from "react";
import "../../styles/Administradores.scss";
import profileImage from "../../assets/Boda.jpg";
import {
  collection,
  getDoc,
  getDocs,
  getFirestore,
  Timestamp,
  query,
  where,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
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
import Swal from "sweetalert2";


function Redirecciona() {
      // 👇️ redirects to an external URL
      window.location.replace('https://www.facebook.com/marinamezawp/photos');
  }


export const Administradores = () => {
  
  const [admin, setAdmin] = useState([]);
  const [buscar, setBuscar] = useState("");
  const adminCollection = collection(db, "users");
  //----------------------------------------------
  const getAdmin = async () => {
    const data = await getDocs(adminCollection);
    //console.log(data.docs)
    setAdmin(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(admin);
  };

  //funcion eliminar
  const deleteProv = async (id) => {
    const adminDoc = doc(db, "users", id);
    await deleteDoc(adminDoc);
    getAdmin();
  };

  const confirmDelete = (id) => {
    Swal.fire({
      title: "¿Esta seguro de eliminarlo?",
      text: "!No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar.",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProv(id);
        Swal.fire("Eliminado!", "Su archivo ha sido eliminado..", "éxito");
      }
    });
  };
  
  useEffect(() => {
    getAdmin();
  }, []);

  return (
    <>
    <div className="bodyAdmin">
      <section className="content header">
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap');
      </style>
        <h2 > Administradores </h2>
       </section>
      <div class="mb-3">
      <input
            type="text"
            class="form-control"
            placeholder="Buscar por nombre..."
            onChange={(e) => {
              setBuscar(e.target.value);
            }}
            disabled
            title="Desactivado, no puede haber celdas vacías"
          ></input>
      </div>
      <div className="tablaP table-responsive">
          <table class="table table-striped table-hover table-bordered "
            WIDTH="50%">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellidos</th>
                  <th>Rol</th>
                  <th>Usuario</th>
                  <th>Password</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {admin.filter((val)=>{
                if(buscar === ""){
                  return val;
                }else if(
                  val.nombre.toLowerCase().includes(buscar.toLowerCase()) ||
                  val.apellidos.toLowerCase().includes(buscar.toLowerCase())
                ){
                  return val;
                }
              }).map((adm) => (
                  <tr key={adm.id}>
                    <td>{adm.nombre}</td>
                    <td>{adm.apellidos}</td>
                    <td>{adm.rol}</td>
                    <td>{adm.usuario}</td>
                    <td>{adm.password}</td>
                    <td>
                    <Button
                      onClick={() => {
                        confirmDelete(adm.id);
                      }}
                      className="btn btn-danger"
                    >
                      Eliminar
                    </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>
      </div>

    </div>
    </>
  );
};
