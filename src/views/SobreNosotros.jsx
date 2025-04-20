import React, { useRef } from "react";
import "../style/sobreNosotros.css";

//COMPONENTS
import useIntersectionObserver from "../components/intersectionObserver";
import resizeObserver from "../components/resizeObserver";

//IMG
import sobreNostrosImg from "../assets/SobreNosotros.webp";
export default function SobreNostros() {

  const seccionSobreNosotrosRef = useRef(null);

  const nodoTamaño = resizeObserver(seccionSobreNosotrosRef);

  const tamaño = nodoTamaño.width < 500;

  const seccionSobreNosotrosInterceptada = useIntersectionObserver({threshold:tamaño ? 0.4 : 0.85},seccionSobreNosotrosRef);

  return (
    <section ref={seccionSobreNosotrosRef} id="SobreNosotros" className="seccionSobreNosotros">
      <div className={seccionSobreNosotrosInterceptada ? "sobre-nosotros-texto": "sobre-nosotros-texto-novisible"}>
        <h2>Sobre Nosotros</h2>
        <p>
          En <strong>Vidriería F&I</strong>, llevamos más de{" "}
          <strong>15 años</strong> dedicados a ofrecer soluciones en vidrio de
          alta calidad para hogares, negocios y proyectos arquitectónicos.
          Nuestra experiencia nos ha permitido consolidarnos como un referente
          local en instalación de ventanas, puertas de vidrio templado, espejos
          decorativos y cerramientos modernos.
        </p>
        <p>
          Nos enorgullece combinar tecnología, precisión y diseño en cada uno de
          nuestros trabajos. Cada proyecto que realizamos es único, porque
          entendemos que tus espacios merecen lo mejor.
        </p>
        <p>
          Contamos con un equipo comprometido y capacitado, que garantiza
          resultados duraderos, seguros y estéticamente impecables. Nuestro
          objetivo es brindarte un servicio personalizado, eficiente y a la
          altura de tus expectativas.
        </p>
        <p>
          Te invitamos a ser parte de nuestra historia, y a confiar en nosotros
          para transformar tus ideas en realidad con transparencia y calidad.
        </p>
      </div>
      <div className={seccionSobreNosotrosInterceptada ? "sobre-nosotros-img" : "sobre-nosotros-img-novisible" } >
        <img src={sobreNostrosImg} alt="imgSobreNosotros" />
      </div>
      
    </section>
  );
}
