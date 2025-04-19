import "./App.css";

//COMPONENTES
import Header from "./components/header";
import Cotizacion from "./views/cotizacion";

//VISTAS
import Inicio from "./views/Inicio";
import SobreNosotros from "./views/SobreNosotros";
import Servicios from "./views/Servicios";
import GaleriaTrabajos from "./views/GaleriaTrabajos";
import Contacto from "./views/Contacto";
import Footer from "./components/footer";

//LIBRERIAS
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  /*PROXIMO PROYECTO, DISEÑAR UNA APP QUE MANTENGA LA ESTRUCTURA DE 
  DE UNA PAGINA WEB Y ESTE SE PUEDA REUTILIZAR, DEBERA TENER 
  UNA INTERFAZ DONDE SE PUEDA MODIFICAR LOS TEXTOS E IMAGENES Y */

  return (
    //PON UN CONTENEDOR PARA USAR EL flex 1, debe contener el header y las otras secciones
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header/>
              <Inicio/>
              <SobreNosotros/>
              <Servicios/>
              <GaleriaTrabajos/>
              <Contacto/>
              <Footer/>
            </>
          }
        ></Route>
      </Routes>

      <Routes>
        <Route path="/cotizar-ahora" element={
          <>
          <Cotizacion/>
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
