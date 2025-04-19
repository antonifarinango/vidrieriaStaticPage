import React, { useEffect, useRef, useState } from "react";

export default function Observar(ref){

    const [tamañoNodo,setTamañoNodo] = useState({width:0, height:0});

    useEffect(()=>{
        const nodo = ref.current;

        const observer = new ResizeObserver((entradas)=>{
            for(let entrada of entradas){
                const {width, heigth} = entrada.contentRect;
                setTamañoNodo({width,heigth});
            }
        })

        if(nodo){
            observer.observe(nodo);
        }

        return()=>{
            if(nodo){
                observer.unobserve(nodo);
            }
        }
    },[])
    return tamañoNodo;
}