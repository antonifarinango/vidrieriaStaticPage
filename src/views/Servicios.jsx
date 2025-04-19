import React ,{ useRef }from "react";
import "../style/servicios.css";

//COMPONENTES
import CardServicios from "../components/cardServicios";
import useIntersectionObserver from "../components/intersectionObserver";
import resizeObserver from "../components/resizeObserver";

//img-servicios
import ventana from "../imgs/ventana.webp";
import reparacion from "../imgs/configuraciones.webp";
import diseñoInteriores from "../imgs/diseno-de-interiores.webp";
import seguridad from "../imgs/bloquear.webp";
import ducha from "../imgs/ducha.webp";
import oficina from "../imgs/oficina.webp";

export default function Servicios() {

  const seccionServiciosRef = useRef(null);

  const seccionServiciosInterceptada = useIntersectionObserver({threshold: 0.7},seccionServiciosRef)

  const nodoTamaño = resizeObserver(seccionServiciosRef);

  const tamaño = nodoTamaño.width < 500;

  const lista = [
    {
      titulo: "Instalación",
      img: `${ventana}`,
      descripcionServicio:
        "Ofrecemos instalación profesional de vidrios y cristales de alta calidad, adaptándonos a cualquier espacio con acabados elegantes y modernos.",
      servicios: [
        "Instalación de ventanas en diferentes estilos y materiales.",
        "Ventanas de vidrio templado, laminado y doble acristalamiento.",
        "Puertas de vidrio para interiores y exteriores.",
        "Fachadas de vidrio para comercios y oficinas.",
      ],
    },
    {
      titulo: "Reparación",
      img: `${reparacion}`,
      descripcionServicio:
        "¿Vidrio roto? Nos encargamos de la reparación y sustitución de vidrios con rapidez y seguridad.",
      servicios: [
        "Cambio de vidrios rotos en puertas y ventanas.",
        "Reparación de mamparas y estructuras de vidrio.",
        "Reemplazo de cristales dañados por nuevas piezas seguras.",
      ],
    },
    {
      titulo: "Decoración",
      img: `${diseñoInteriores}`,
      descripcionServicio:
        "Transformamos espacios con vidrios decorativos y espejos personalizados, creando ambientes modernos y sofisticados.",
      servicios: [
        "Vidrios decorativos con grabados o arenados.",
        "Espejos personalizados para hogares y gimnasios.",
        "Mesas, barandales y cubiertas de vidrio.",
      ],
    },
    {
      titulo: "Seguridad",
      img: `${seguridad}`,
      descripcionServicio:
        "Aumenta la seguridad de tu hogar o negocio con nuestros vidrios templados y laminados, resistentes a impactos y cambios climáticos.",
      servicios: [
        "Vidrios templados y laminados para mayor resistencia.",
        "Instalación de vidrios antibalas y anti-impacto.",
        "Protección contra robos y accidentes con vidrios reforzados.",
      ],
    },
    {
      titulo: "División de espacios",
      img: `${ducha}`,
      descripcionServicio:
        "Instalamos cortinas de baño en vidrio templado o acrílico para mayor durabilidad y estilo.",
      servicios: [
        "Cerramientos en vidrio para oficinas y balcones.",
        "Paneles divisorios de vidrio para interiores.",
        "Cabinas de ducha de vidrio templado.",
        "Cortinas de baño en vidrio templado o acrílico.",
      ],
    },
    {
      titulo: "Manparas de Oficina",
      img: `${oficina}`,
      descripcionServicio:
        "Optimiza el espacio en tu oficina con nuestras mamparas de vidrio, diseñadas para mejorar la estética y la funcionalidad del entorno de trabajo.",
      servicios: [
        "Mamparas de vidrio para oficinas modernas.",
        "Separaciones con vidrio templado y marco de aluminio.",
        "Instalaciones con aislamiento acústico para privacidad.",
      ],
    },
  ];


  
  return (
    <section  ref={seccionServiciosRef} id="Servicios" className="seccionServicios">
      <h2>Servicios</h2>
      <div className="contenedor-cards-servicios">
        {lista.map((servicio, index) => (
          <CardServicios
          tamaño={tamaño}
            estiloContenedor={seccionServiciosInterceptada}
            key={index}
            titulo={servicio.titulo}
            imagen={servicio.img}
            alt={`imgServicio-${index}`}
            descripcionServicio={servicio.descripcionServicio}
            servicios={servicio.servicios}
          />
        ))}
      </div>
    </section>
  );
}
