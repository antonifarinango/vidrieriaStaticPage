import React from "react";
import '../style/footer.css'

export default function footer() {
  return (
    <footer className="footer">
      <div className="contenedor-footer-logo">
        <img className="footer-logo" src="/ventana-logo.webp" alt="ventana-logo" />
        <span className="footer-span">
        Dale transparencia y estilo a tu espacio.
        </span>
      </div>

      <div className="contenedor-footer-nav">
        <nav className="footer-nav">
          <ul className="footer-lista-desordenada">
            <li className="footer-item-lista">
              <a href="#Inicio">Inicio</a>
            </li>
            <li className="footer-item-lista">
              <a href="#SobreNosotros">Sobre Nosotros</a>
            </li>
            <li className="footer-item-lista">
              <a href="#Servicios">Servicios</a>
            </li>
            <li className="footer-item-lista">
              <a href="#GaleríadeTrabajos">Galería de Trabajos</a>
            </li>
          </ul>
        </nav>

        <div className="contenedor-footer-btn-cotizar">
        <button className="btn-cotizar"><a href="/cotizar-ahora" >Cotizar Ahora</a></button>
        </div>

        <span className="span-direccion">
          Quito, Calderón, Calle De los Fundadores y Sebástian de Benálcazar.
        </span>

        <span className="span-horario">Horario de atención : 08:00 am - 17:00 pm</span>
      </div>
    </footer>
  );
}
