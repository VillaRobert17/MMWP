import React from 'react'
import "../../styles/AgregarProveedor.scss"


export const AgregarProveedor = () => {
    return (
        <div className="proveedor">
            <div className="content">

                <h1 className="logo">Proveedores</h1>

                <div className="contact-wrapper animated bounceInUp">
                    <div className="contact-form">
                        <form action="">
                            <p>
                                <label>Nombre</label>
                                <input type="text" name="namepro"/>
                            </p>
                            <p>
                                <label>Télefono</label>
                                <input type="text" name="telpro"/>
                            </p>
                            <p>
                                <label>Calle</label>
                                <input type="text" name="calleprov"/>
                            </p>
                            <p>
                                <label>Colonia</label>
                                <input type="text" name="coloniaprov"/>
                            </p>
                            <form action="">
                                <div className="content-select">
                                    <p>
                                        <label>Estado</label>
                                        <select>
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
                    <div className="contact-info">
                        <h4>Descripción</h4>
                        <textarea name="descripcion"></textarea>
                        <p>
                            <button>Agregar proveedor</button>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
