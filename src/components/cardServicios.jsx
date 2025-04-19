import React, { useRef, useState,useEffect } from "react";

//COMPONENTES

export default function cardServicios({
  imagen,
  alt,
  descripcionServicio,
  titulo,
  servicios = [],
  estiloContenedor,
  tamaño
}) {

  const cardDivRef = useRef(null);
  
  const [girado, setGirado] = useState(false);

  useEffect(() => {
    if (!tamaño && cardDivRef.current) {
      cardDivRef.current.style.transform = "";
      setGirado(false);
    }
  }, [tamaño]);
  

  function handleClick() {
    if (tamaño && cardDivRef.current) {
      cardDivRef.current.style.transform = girado
        ? "rotateY(0deg)"
        : "rotateY(180deg)";
      setGirado(!girado);
    }
  }
  

  return (
    <div onClick={handleClick} className={estiloContenedor ? "contenedorVisible-card" : "contenedorNoVisible-card"}>
      <div  ref={cardDivRef} className= "cardVisible">
        <div className="card-vista frente">
          <div className="card-frente-titulo">
            <h3>{titulo}</h3>
          </div>
          <div className="card-frente-img">
            <img src={imagen} alt={alt}/>
          </div>
          <div className="card-frente-span">
            <span>{descripcionServicio}</span>
          </div>
        </div>

        <div className="card-vista reverso">
          {servicios.map((servicio, index) => {
            return (
              <div className="contenedor-servicio" key={index}>
                <div className="img-servicio">✅</div>
                <div className="texto-servicio">{servicio}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
