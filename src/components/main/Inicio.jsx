import "./inicio.css";

const Inicio = () => {
  return (
    <section id="inicio">
      <div className="inicioContenedor">
        <h1> ¡Hola! </h1>
        <h2>
          {" "}
          Soy <span> Amador</span>.
        </h2>
        <p>
          Estudiante de {<br />}Administración en Sistemas informáticos y Redes.
          {<br />}En el desarrollo web, destaco en el frontend, pero disfruto
          explorando el backend.{<br />}
          Soy fotógrafo profesional e intento siempre juntar mis dos pasiones.
        </p>
      </div>
    </section>
  );
};

export default Inicio;
