import { useState,useEffect,useRef } from "react";

export default function useIntersectionObserver(opciones = {},ref){

    const [interceptado, setInterceptado] = useState(false);

    useEffect(()=>{
        const elemento = ref.current;

        const observer = new IntersectionObserver((entradas)=>{
            entradas.forEach((entrada) => {
                setInterceptado(entrada.isIntersecting);
            });
        },opciones);

            observer.observe(elemento);
        

            return () => observer.unobserve(elemento);

    },[opciones]);
    return interceptado;
}