import "./proyectos.css";
const Proyectos = () => {
  return (
    // <section id="proyectos">
    //   <article>
    //     <h1> proyectos </h1>
    //     <div className="ejemplosProyectos">
    //       <div className="ejemProyecCuadri">
    //         <div className="rect1">1</div>
    //         <div className="rect2">2</div>
    //         <div className="rect3">3</div>
    //         <div className="rect4">4</div>
    //       </div>
    //     </div>
    //   </article>
    // </section>
    <section id="proyectos">
    <article>
      <h1>Proyectos</h1>
      <div className="ejemplosProyectos">
        <div className="ejemProyecCuadri">
          <div className="rect rect1">
            <div className="overlay">
              <div className="iconos">
                {/* Agrega tus iconos aquí */}
                <img src="icono1.png" alt="Icono 1" />
                <img src="icono2.png" alt="Icono 2" />
              </div>
            </div>
          </div>
          <div className="rect rect2">
            <div className="overlay">
              <div className="iconos">
                {/* Agrega tus iconos aquí */}
                <img src="icono3.png" alt="Icono 3" />
                <img src="icono4.png" alt="Icono 4" />
              </div>
            </div>
          </div>
          <div className="rect rect3"></div>
          <div className="rect rect4"></div>
        </div>
      </div>
    </article>
  </section>
    );
};

export default Proyectos;
