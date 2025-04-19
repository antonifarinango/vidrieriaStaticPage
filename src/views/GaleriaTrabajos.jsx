import React, { useEffect, useRef, useState } from "react";
import "../style/galeriaTrabajos.css";

//COMPONENTES
import useIntersectionObserver from "../components/intersectionObserver";
import resizeObserver from "../components/resizeObserver";

//LIBRERIA
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

export default function GaleriaTrabajos() {
  const divRef = useRef(null);
  const carruselRef = useRef(null);
  const cerrarCarrusel = useRef(null);
  const [listaSrc, setListaSrc] = useState([]);
  const swiperRef = useRef(null);
  const contenedorPc = useRef(null);

  const seccionGaleriaRef = useRef(null);
  const seccionGaleriaInterceptada = useIntersectionObserver({ threshold: 0.2 },seccionGaleriaRef);

  function clickImg() {
    const nodos = Array.from(divRef.current.childNodes);
    setListaSrc(nodos.map((nodo) => nodo.src));
  }

  useEffect(() => {
    clickImg();
  }, []);

  const nodoRef = useRef(null);
  const nodoTamaño = resizeObserver(nodoRef);
  const tamañoDiv = nodoTamaño.width < 550;

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Verifica si el clic fue fuera del contenedor
      if (
        cerrarCarrusel.current &&
        !cerrarCarrusel.current.contains(event.target)
      ) {
        carruselRef.current.style.display = "none";
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const imagenes = [
    {
      className: "alta",
      src: "/GaleriaImagenes/cortinaDeBaño1.webp",
    },
    { className: "grande", src: "/GaleriaImagenes/puerta1.webp" },
    {
      className: "grande",
      src: "/GaleriaImagenes/cortinaDeBaño2.webp",
    },
    {
      className: "alta",
      src: "/GaleriaImagenes/cortinaDeBañoVidrio1.webp",
    },
    {
      className: "alta",
      src: "/GaleriaImagenes/puerta4.webp",
    },
    {
      className: "grande",
      src: "/GaleriaImagenes/divisionDeBaños2.webp",
    },
    {
      className: "alta",
      src: "/GaleriaImagenes/divisionOficina3.webp",
    },
    {
      className: "ancha",
      src: "/GaleriaImagenes/divisionesOficinaConDiseño1.webp",
    },
    {
      className: "extra-grande",
      src: "/GaleriaImagenes/divisionOficina2.webp",
    },
    {
      className: "grande",
      src: "/GaleriaImagenes/puertaCorrediza1.webp",
    },
    {
      className: "grande",
      src: "/GaleriaImagenes/divisionOficina4.webp",
    },
    { className: "ancha", src: "/GaleriaImagenes/ventana3.webp" },
    { className: "grande", src: "/GaleriaImagenes/mampara3.webp" },
    { className: "ancha", src: "/GaleriaImagenes/puerta5.webp" },
    {
      className: "grande",
      src: "/GaleriaImagenes/mamparaDeOficina4.webp",
    },
    { className: "grande", src: "/GaleriaImagenes/mampara4.webp" },
    { className: "alta", src: "/GaleriaImagenes/puerta2.webp" },
    { className: "grande", src: "/GaleriaImagenes/mampara1.webp" },
    { className: "alta", src: "/GaleriaImagenes/puerta3.webp" },
    { className: "ancha", src: "/GaleriaImagenes/ventana2.webp" },
  ];

  return (
    <section
      ref={seccionGaleriaRef}
      id="GaleríadeTrabajos"
      className="seccionGaleria"
    >
      <div ref={nodoRef} className="contenedor-galeria">
        <h2>Nuestros Trabajos</h2>
        <div
          style={{ display: tamañoDiv ? "none" : "grid" }}
          className={
            seccionGaleriaInterceptada
              ? "contenedor-imgs"
              : "contenedor-imgs-novisible"
          }
        >
          <div
            ref={divRef}
            className="column"
            onClick={() => {
              if (carruselRef.current) {
                carruselRef.current.style.display = "flex";
                swiperRef.current.swiper.update();
              }
            }}
          >
            {imagenes.map((img, index) => (
              <img
                onClick={() => {
                  swiperRef.current.swiper.slideToLoop(index);
                  //Valor de la img al hacer click
                }}
                key={index}
                className={img.className}
                src={img.src}
                alt={`imgGaleria${index}`}
              />
            ))}
          </div>
        </div>

        {/*CONTENEDOR MUESTRA MOVIL */}

        <div
          style={{ display: tamañoDiv ? "flex" : "none" }}
          className="contenedor-movil"
        >
          <div className="contenedor-swiper-movil">
            <Swiper grabCursor={true} className="swiper-movil" loop={true}>
              {imagenes.map((img, index) => (
                <SwiperSlide key={index} className="swiper-slide-movil">
                  <img
                    
                    className="img-swiper-movil"
                    src={img.src}
                    alt={`imgSwiperMovil${index}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/*CONTENEDOR SWIPER */}

        <div ref={carruselRef} className="contenedor-carrusel-img">
          <div className="contenedor-img-carrusel">
            <Swiper
              ref={swiperRef}
              className="swiper"
              modules={[EffectCoverflow]}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              effect={"coverflow"}
              loop={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 8,
                slideShadows: true,
              }}
            >
              {listaSrc.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="swiper-img">
                    <img
                      ref={cerrarCarrusel}
                      className="img-carrusel"
                      src={item}
                      alt={`ìmgSwiper${index}`}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
