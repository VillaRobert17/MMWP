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
  updateDoc,
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
  window.location.replace("https://www.facebook.com/marinamezawp/photos");
}

export const Administradores = () => {
  //------------------------------------
  const [buscar, setBuscar] = useState("");
  const [ID, setID] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellido] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");
  const [usuario, setUsuario] = useState("");
  //----------------------------------------

  const adminCollection = collection(db, "users");
  const [isOpen, setIsOpen] = useState(false);
  const [admin, setAdmin] = useState([]);
  //---------------------------------------------------

  const getAdminById = async (id) => {
    const admin = await getDoc(doc(db, "users", id));
    if (admin.exists()) {
      setNombre(admin.data().nombre);
      setApellido(admin.data().apellidos);
      setPassword(admin.data().password);
      setRol(admin.data().rol);
      setUsuario(admin.data().usuario);
    } else {
      //alert producto no existe
      console.log("no existe");
    }
  };
  //-----------------------------------------------------
  const update = async (e) => {
    console.log("ACTUALIZAR 1: "+ID)
    e.preventDefault();
    const admin = doc(db, "users", ID);
    const data = {
      nombre: nombre,
      apellidos: apellidos,
      password: password,
      rol: rol,
      usuario: usuario,
    };
    await updateDoc(admin, data);
    await updateDoc(admin, data);
    getAdmin();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Datos actualizados correctamente",
      showConfirmButton: false,
      timer: 2000,
    });
    hideModal();
  };

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const getAdmin = async () => {
    const data = await getDocs(adminCollection);
    //console.log(data.docs)
    setAdmin(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(admin);
  };
  //-----------------------------------------------------

  useEffect(() => {
    getAdmin();
  }, []);

  //funcion eliminar
  const deleteProv = async (id) => {
    const adminDoc = doc(db, "users", id);
    await deleteDoc(adminDoc);
    getAdmin();
  };

  const confirmDelete = (id) => {
    Swal.fire({
      title: "¿Está seguro de eliminarlo?",
      text: "¡No podrás revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProv(id);
        Swal.fire("Eliminado", "Su archivo ha sido eliminado..", "éxito");
      }
    });
  };

  return (
    <>
      <div className="bodyAdmin">
        <section className="content header">
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap');
          </style>
          <h2> Administradores </h2>
        </section>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Buscar por Nombre/Rol..."
            onChange={(e) => {
              setBuscar(e.target.value);
            }}
            title="Desactivado, no puede haber celdas vacías"
          ></input>
        </div>
        <div className="tablaP table-responsive">
          <table
            class="table table-striped table-hover table-bordered "
            WIDTH="50%"
          >
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Rol</th>
                <th>Usuario</th>
                <th>Contraseña</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {admin
                .filter((val) => {
                  if (buscar === "") {
                    return val;
                  } else if (
                    val.nombre.toLowerCase().includes(buscar.toLowerCase()) ||
                    val.rol.toLowerCase().includes(buscar.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((adm) => (
                  <tr key={adm.id}>
                    <td>{adm.nombre}</td>
                    <td>{adm.apellidos}</td>
                    <td>{adm.rol}</td>
                    <td>{adm.usuario}</td>
                    <td>{adm.password}</td>
                    <td>
                      <Button
                        onClick={() => {
                          getAdminById(adm.id);
                          setID(adm.id);
                          showModal();
                        }}
                      >
                        Editar
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal show={isOpen} onHide={hideModal}>
        <ModalHeader closeButton>
          <Modal.Title>Editar</Modal.Title>
        </ModalHeader>
        <ModalBody>
          <form class="row g-3" onSubmit={update}>
            <div class="col-md-6">
              <label>Nombre</label>
              <input
                type="text"
                class="form-control"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              ></input>
            </div>
            <div class="col-md-6">
            <label>Apellidos</label>
              <input
                type="text"
                class="form-control"
                value={apellidos}
                onChange={(e) => setApellido(e.target.value)}
              ></input>           
            </div>
            <div class="col-md-6">
              <label>Rol</label>
              <select class="form-select" value={rol} onChange={(e) => setRol(e.target.value)}>
                  <option value="administrador">Administrador</option>
                  <option value="cliente">Cliente</option>
                </select>
            </div>
            <div class="col-md-6">
            <label>Usuario</label>
              <input
                type="text"
                class="form-control"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              ></input>           
            </div>
            <div class="col-md-6">
            <label>Contraseña</label>
              <input
                type="text"
                class="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>           
            </div>
            
          </form>
        </ModalBody>
        <ModalFooter>
          <button type="button" class="btn btn-success" onClick={update}>
            Actualizar
          </button>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => {
              confirmDelete(ID);
            }}>Eliminar</button>
        </ModalFooter>
      </Modal>
    </>
  );
};
