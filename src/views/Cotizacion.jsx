import React, { useState } from "react";
import "../style/cotizacion.css";

import backImg from "../assets/flecha-atras.webp";

export default function Cotizacion() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    telefono: "",
    servicio: "",
    descripcionProyecto: "",
  });


  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "/.netlify/functions/formularioContacto",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "farinangoanthony1@gmail.com",
          subject: `Cotización de ${formulario.servicio}`,
          body: `<p><strong>Cliente : </strong>${formulario.nombre}</p>
        <p><strong>Teléfono Cliente : </strong>${formulario.telefono}</p>
        <p><strong>Descripción del Proyecto : </strong>${formulario.descripcionProyecto}<p/>

        `
        }),
      }
    );

    if (response.ok) {
      alert("Mensaje enviado correctamente");

      setFormulario({
        nombre: "",
        telefono: "",
        servicio: "",
        descripcionProyecto: "",
      });

    } else {
      alert("El mensaje no se envió correctamente");
    }
  };

  return (
    <section id="CotizarAhora">
      <div className="contenedor-cotizar-ahora">
        <div className="contenedor-encabezado">
          <button>
            <a href="/">
              <img src={backImg} alt="icon-flecha" />
            </a>
          </button>
        </div>
        <div className="contenedor-beneficios">
          <h3>Beneficios de cotizar con nosotros</h3>
          <ul>
            <li>✅ Respuesta rápida</li>
            <li>✅ Asesoría Gratuita</li>
            <li>✅ Cotización sin compromiso</li>
          </ul>
        </div>
        <div className="contenedor-form">
          <h2>Formulario de cotización</h2>
          <form className="form-cotizacion" action="" onSubmit={sendEmail}>
            <div className="div-input-form">
              <label htmlFor="nombre"><span className="asterisco">* </span>Nombre completo</label>
              <input
                required
                placeholder="Ingrese su nombre"
                onChange={handleChange}
                value={formulario.nombre}
                name="nombre"
                type="text"
              />
            </div>


            <div className="div-input-form">
              <label htmlFor="telefono"><span className="asterisco">* </span>Teléfono</label>
              <input
                required
                placeholder="Ingrese su teléfono"
                onChange={handleChange}
                value={formulario.telefono}
                type="number"
                name="telefono"
              />
            </div>

            <div className="div-input-form">
              <label htmlFor="servicio"><span className="asterisco">* </span>Tipo de servicio</label>
              <select
                required
                onChange={handleChange}
                value={formulario.servicio}
                name="servicio"
              >
                <option value="">Seleccion un servicio</option>
                <option value="Mamparas De Oficina">Mamparas de Oficina</option>
                <option value="Instalacion">
                  Instalacion de Puertas y Ventanas
                </option>
                <option value="División De Espacios">
                  División de espacios
                </option>
                <option value="Seguridad">Seguridad</option>
                <option value="Reparación">Reparación</option>

                <option value="Espejos Y Vidrios">
                  Espejos y vidrios personalizados
                </option>
              </select>
            </div>

            <div className="div-input-form">
              <label htmlFor="descripcionProyecto"><span className="asterisco">* </span>Descripción del proyecto</label>
              <textarea
                required
                placeholder="Ingrese una breve descripción de su proyecto"
                onChange={handleChange}
                value={formulario.descripcionProyecto}
                name="descripcionProyecto"
                maxLength={230}
              ></textarea>
            </div>

            <button className="btn-enviar-cotizacion" type="submit">
              Enviar
            </button>
            
          </form>
          <p>Los campos con <span className="asterisco">*</span> son obligatorios</p>
        </div>
        <div className="contenedor-horario">
          <span className="span-horario">
            Horario de atención : 08:00 am - 17:00 pm
          </span>
        </div>
      </div>
    </section>
  );
}
