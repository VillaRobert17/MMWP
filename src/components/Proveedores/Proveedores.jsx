import { useEffect, useState } from "react";
import "../../styles/Proveedores.scss";
import profileImage from "../../assets/Logo.png";
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
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { async } from "@firebase/util";
import "bootstrap/dist/css/bootstrap.min.css";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import EditProv from "./EditProv";
import Swal from "sweetalert2";

export const Proveedores = () => {
  /*
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const querySnapshot =
        await getDocs(collection(db, "prove"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        })
        console.log("AGREGADA")
        
    }catch (err) {
        alert(err)
    }
}*/

  const [prove, setProve] = useState([]);
  const [buscar, setBuscar] = useState("");

  const provCollection = collection(db, "prove");

  const getProve = async () => {
    const data = await getDocs(provCollection);
    //console.log(data.docs)
    setProve(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(prove);
  };

  //funcion eliminar
  const deleteProv = async (id) => {
    const provDoc = doc(db, "prove", id);
    await deleteDoc(provDoc);
    getProve();
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
    getProve();
  }, []);

  return (
    <>
      <div className="bodyProveedores" id="form">
        <section className="content header">
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap');
          </style>
          <h2> Proveedores</h2>
        </section>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Buscar por nombre/categoria..."
            onChange={(e) => {
              setBuscar(e.target.value);
            }}
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
                <th>Teléfono</th>
                <th>Calle</th>
                <th>Colonia</th>
                <th>Estado</th>
                <th>Categoria</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {prove.filter((val)=>{
                if(buscar === ""){
                  return val;
                }else if(
                  val.namepro.toLowerCase().includes(buscar.toLowerCase()) ||
                  val.categoria.toLowerCase().includes(buscar.toLowerCase())
                ){
                  return val;
                }
              }).map((prov) => (
                <tr key={prov.id}>
                  <td>{prov.namepro}</td>
                  <td>{prov.telpro}</td>
                  <td>{prov.calleprov}</td>
                  <td>{prov.coloniaprov}</td>
                  <td>{prov.estado}</td>
                  <td>{prov.categoria}</td>
                  <td>{prov.descripcion}</td>
                  <td>
                    <Link
                      to={`/Home/EditProv/${prov.id}`}
                      className="btn btn-primary"
                    >
                      Editar
                    </Link>
                    &nbsp;
                    <Button
                      onClick={() => {
                        confirmDelete(prov.id);
                      }}
                      className="btn btn-danger"
                    >
                      Borrar
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
