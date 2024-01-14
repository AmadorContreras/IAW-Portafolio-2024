import React, { useState, useEffect } from "react";

import "./proyectos.css";

const Proyecto = ({ title, iconos, fondo, link, desc }) => {
  
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="rect">
        <div
          className="fondo"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${fondo})` }}
        >
          <div className="iconos">
            <h2>{title}</h2>
            <p>{desc}</p>
            <h3>Tecnologías</h3>
            <div>
              {iconos.map((icono, index) => (
                <img
                  key={index}
                  src={`${process.env.PUBLIC_URL}/${icono}`}
                  alt={`Icono ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

const Proyectos = () => {
 
  const [datosProyectos, setDatosProyectos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/proyectos.json");
        const data = await response.json();
        setDatosProyectos(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="proyectos">
      <article>
        <h1>Proyectos</h1>
        <div className="ejemplosProyectos">
          <div className="ejemProyecCuadri">
            {datosProyectos.map((datoProyecto, index) => (
              <Proyecto
                key={index}
                title={datoProyecto.title}
                desc={datoProyecto.desc}
                iconos={datoProyecto.iconos}
                fondo={datoProyecto.fondo}
                link={datoProyecto.link}
              />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Proyectos;
