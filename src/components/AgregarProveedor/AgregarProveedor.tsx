import React from 'react'
import {useState} from "react";
import {db} from '../../firebase'
import "../../styles/AgregarProveedor.scss"
import {collection, addDoc,getDocs, Timestamp} from 'firebase/firestore'



export const AgregarProveedor = () => {

    
    const [namepro, setNamepro] = useState('')
    const [telpro, setTelpro] = useState('')
    const [calleprov, setCalleprov] = useState('')
    const [coloniaprov, setColoniaprov] = useState('')
    const [estado, setEstado] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const handleSubmit = async (e:any) => {
        e.preventDefault()
        try{
            await addDoc(collection(db, 'prove'),{
                namepro: namepro,
                telpro: telpro,
                calleprov: calleprov,
                coloniaprov: coloniaprov,
                estado: estado,
                descripcion: descripcion,
            })
            console.log("AGREGADA")
            limpiar();
            
        }catch (err) {
            alert(err)
        }
    }
    
    function limpiar() {
        document.getElementsByTagName("input")[0].value = "";
        document.getElementsByTagName("input")[1].value = "";
        document.getElementsByTagName("input")[2].value = "";
        document.getElementsByTagName("input")[3].value = "";
        document.getElementsByTagName("textarea")[0].value = "";
        document.getElementsByTagName("select")[0].value = "Selecciona";
        
    }
    
    return (
        <div className="bodyAgregarProveedor" id="form" onSubmit={handleSubmit}>
        <section className="content header">
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap');
        </style>
          <h2 > Agregar Proveedor</h2>
         </section>

        <div className="proveedor" onSubmit={handleSubmit}>
            <div className="content">

                <div className="contact-wrapper animated bounceInUp">
                    <div className="contact-form">
                        <form action="" id='form1'>
                            <p>
                                <label>Nombre</label>
                                <input type="text" name="namepro" id='namepro' onChange={(e) => setNamepro(e.target.value)}/>
                            </p>
                            <p>
                                <label>Télefono</label>
                                <input type="text" name="telpro"  onChange={(e) => setTelpro(e.target.value)}/>
                            </p>
                            <p>
                                <label>Calle</label>
                                <input type="text" name="calleprov"  onChange={(e) => setCalleprov(e.target.value)}/>
                            </p>
                            <p>
                                <label>Colonia</label>
                                <input type="text" name="coloniaprov"  onChange={(e) => setColoniaprov(e.target.value)}/>
                            </p>
                            <form action="">
                                <div className="content-select">
                                    <p>
                                        <label>Estado</label>
                                        <select name="estado" onChange={(e) => setEstado(e.target.value)}>
                                            <option value="aguascalientes">Aguascalientes</option>
                                            <option value="disco">Baja California</option>
                                            <option value="bcj">Baja California Sur</option>
                                            <option value="campeche">Campeche</option>
                                            <option value="chiapas">Chiapas</option>
                                            <option value="chihuahua">Chihuahua</option>
                                            <option value="coahuila">Coahuila</option>
                                            <option value="colima">Colima</option>
                                            <option value="durango">Durango</option>
                                            <option value="edm">Estado de México</option>
                                            <option value="gnj">Guanajuato</option>
                                            <option value="guerrero">Guerrero</option>
                                            <option value="hidalgo">Hidalgo</option>
                                            <option value="jalisco">Jalisco</option>
                                            <option value="michoacan">Michoacán</option>
                                            <option value="morelos">Morelos</option>
                                            <option value="nayarit">Nayarit</option>
                                            <option value="nvl">Nuevo León</option>
                                            <option value="oaxaca">Oaxaca</option>
                                            <option value="puebla">Puebla</option>
                                            <option value="qrt">Querétaro</option>
                                            <option value="qr">Quintana Roo</option>
                                            <option value="slp">San Luis Potosí</option>
                                            <option value="sinaloa">Sinaloa</option>
                                            <option value="sonora">Sonora</option>
                                            <option value="tabasco">Tabasco</option>
                                            <option value="tampl">Tamaulipas</option>
                                            <option value="tlaxcala">Tlaxcala</option>
                                            <option value="veracruz">Veracruz</option>
                                            <option value="yucatan">Yucatán</option>
                                            <option value="zacatecas">Zacatecas</option>
                                        </select>
                                    </p>
                                </div>
                            </form>
                        </form>

                    </div>
                    <div className="contact-info col">
                        <h4>Descripción</h4>
                        <textarea name="descripcion" onChange={(e) => setDescripcion(e.target.value)}></textarea>
                            <button type='submit' onClick={handleSubmit}>Agregar proveedor</button>
                            
                    </div>                                        
                </div>
                </div>

            </div>
        </div>
        
    )
}
