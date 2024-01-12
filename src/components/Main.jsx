import Inicio from "./main/Inicio";
import Redes from "./main/Redes";
import SobreMi from "./main/SobreMi";
import Proyectos from "./main/Proyectos";

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
        
        <section id="skils">
          <article>
          <h1>Skils</h1>

          </article>
        </section>
        <section id="cv">
          <article>

          <h1>Curriculum</h1>
          </article>

        </section>
        <section id="contact-info">
          <article>
          <h1>Información de contacto</h1>

          </article>
        </section>
        <Redes />
        <MainNavBar />
      </div>
    </>
  );
};

export default Main;
