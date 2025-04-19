import React, { useRef, useState } from "react";
import "../style/header.css";

export default function Header() {
  const marcadorRef = useRef(null);
  const ulRef = useRef(null);

  const backdrop = (e) => {
    if (!e || !e.target) return;
    const reaccion = e.target.getBoundingClientRect();

    const marcador = marcadorRef.current;
    if (marcador) {
      marcador.style.width = `${reaccion.width}px`;
      marcador.style.height = `${reaccion.height}px`;
      marcador.style.left = `${reaccion.left}px`;
      marcador.style.top = `${reaccion.top}px`;
      marcador.style.opacity = "1";
      marcador.style.visibility = "visible";
    }
  };

  const handleMouseLeave = () => {
    const marcador = marcadorRef.current;

    marcador.style.opacity = "0";
    marcador.style.visibility = "hidden";
  };

  //ACCION MENU MOVILES
  const [toggleHamburguer, setToggleHamburguer] = useState(false);

  function handleMenu() {
    if (toggleHamburguer) {
      setToggleHamburguer(false);
    } else {
      setToggleHamburguer(true);
    }
  }

  return (
    <header>
      <div className="contenedor-logo">
        <img src="../../public/ventana-logo.webp" alt="ventanaLogo-header" />
        <span>F&I</span>
      </div>

      <div className="contenedor-nav">
        <nav className="nav">
          <ul ref={ulRef} className="lista-desordenada">
            {[
              "Inicio",
              "Sobre Nosotros",
              "Servicios",
              "Galería de Trabajos",
              "Contacto",
            ].map((item, index) => (
              <li
                key={index}
                onMouseEnter={backdrop}
                onMouseLeave={handleMouseLeave}
                className="item-lista"
              >
                <a href={`#${item.replace(/\s+/g, "")}`}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="contenedor-btn-cotizar">
          <button className="btn-cotizar">
            <a href="/cotizar-ahora">Cotizar Ahora</a>
          </button>
        </div>

        <div ref={marcadorRef} id="menu-backdrop"></div>
      </div>



            {/*MENU HAMBURGUESA*/}
      <div className="contenedor-nav-hamburguesa" onClick={handleMenu}>
        <div
          className={
            toggleHamburguer ? "nav-hamburguesa-active" : "nav-hamburguesa"
          }
        >
          <nav className="nav-menu-hamburguesa">
            <ul
              ref={ulRef}
              className={
                toggleHamburguer
                  ? "lista-desordenada-hamburguer-active"
                  : "lista-desordenada-hamburguer"
              }
            >
              {[
                "Inicio",
                "Sobre Nosotros",
                "Servicios",
                "Galería de Trabajos",
                "Contacto",
              ].map((item, index) => (
                <li
                  key={index}
                  onMouseEnter={backdrop}
                  onMouseLeave={handleMouseLeave}
                  className="item-lista"
                >
                  <a href={`#${item.replace(/\s+/g, "")}`}>{item}</a>
                </li>
              ))}
              <div className="contenedor-btn-cotizar-hamburguesa">
                <button className="btn-cotizar">
                  <a href="/cotizar-ahora">Cotizar Ahora</a>
                </button>
              </div>
            </ul>
          </nav>
        </div>
        <div className="div-menu-hamburguesa"></div>
      </div>
    </header>
  );
}
