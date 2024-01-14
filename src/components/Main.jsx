import Inicio from "./main/Inicio";

import SobreMi from "./main/SobreMi";
import Proyectos from "./main/Proyectos";
import Skills from "./main/Skills";
import Formacion from "./main/Formacion";

import MainNavBar from "./main/MainNavBar";

import '../Styles/main.css';
import './main/general.css';

const Main = () => {
  return (
    <>
      <Inicio />
      <div id="contenido">
        <SobreMi/>
        <Proyectos/>
        
        <Skills/>
        
        <Formacion/>
        
        <MainNavBar />
      </div>
    </>
  );
};

export default Main;
