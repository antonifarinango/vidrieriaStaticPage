import React from "react";
import "../style/contacto.css";

//iconos
import iconWhatssapp from "../assets/whatsapp.webp";

export default function Contacto() {
  const num = "593984053628";
  const mensaje = "Hola, quiero realizar una cotizacion sobre: ";
  const url = `https://wa.me/${num}?text=${encodeURIComponent(mensaje)}`;

  return (
    <section id="Contacto" className="seccionContacto">
      <div className="contenedor-mapa">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d249.3633769980486!2d-78.43080213818595!3d-0.08400544852807215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d58f2790e9afcb%3A0x7b5db3244a0a1445!2sFeI%20Alumunio%20Y%20Vidrio!5e0!3m2!1ses-419!2sec!4v1743127863576!5m2!1ses-419!2sec"></iframe>
      </div>
      <button className="btn-contacto-whatsApp">
        <a href={url} target="_blank">
          <img src={iconWhatssapp} alt="iconoWhatssapp" />
        </a>
      </button>
    </section>
  );
}
