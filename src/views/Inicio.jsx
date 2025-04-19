import React from "react";
import '../style/Inicio.css'

export default function Inicio(){
    return(
        <section id="Inicio" className="seccionInicio">
            <div className="contenedor-texto-hero">
                <h1>Dale transparencia y estilo a tu espacio.</h1>
                <div className="contenedor-botones-hero">
                    <button className="btns-hero btn-ver-servicios-hero"><a href="#Servicios">Ver Servicios</a></button>
                    <button className="btns-hero btn-ver-servicios-hero"><a href="/cotizar-ahora" >Cotizar Ahora</a></button>
                </div>
            </div>
        </section>
    )
}