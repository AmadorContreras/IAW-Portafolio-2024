import React from "react";
import RedesLinksIcons from "../components/RedesLinksIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";



import "../Styles/contacto.css";
const Contacto = () => {
  return (
    <section className="contacto">
      
        <h1>Contacto</h1>
        <article className="datosContainer">
          <div className="datos-contacto">
            <h2>Dirección</h2>
            <h3>
              Palma de Mallorca,
              <br />
              Islas Baleares, España
            </h3>
            <h4>
            <FontAwesomeIcon icon={faMobile} /> +34 600 000 000
            </h4>
            <h4>
            <FontAwesomeIcon icon={faPhone} />  +34 900 000 000
            </h4>
            <h4>
            <FontAwesomeIcon icon={faEnvelope} /> acl@gmail.com
            </h4>
            <div className="social-media">
              <RedesLinksIcons />
            </div>
          </div>
          <div className="formulario">
            <form action="#" target="" method="get" name="formDatosPersonales">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Escriba su nombre"
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="e-mail"
                required=""
              />
              <label htmlFor="asunto">Asunto</label>
              <input
                type="text"
                name="asunto"
                id="asunto"
                placeholder="Asunto de la consulta"
              />
              <label id="mensajeLabel" htmlFor="mensaje">Mensaje</label>
              <textarea
                name="mensaje"
                id="mensaje"
                placeholder="Escriba su mensaje aquí (max 300 caracteres)"
                maxLength="300"
              ></textarea>
              <input id='enviarBtn' type="submit" name="enviar" value="Enviar" />
            </form>
          </div>
        </article>
      
    </section>
  );
};

export default Contacto;
