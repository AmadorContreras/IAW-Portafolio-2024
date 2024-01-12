import "./inicio.css";
const Inicio = () => {
  return (
    <section id="inicio">
      <div className="inicioContenedor">
        <h1> ¡Hola! </h1>
        <h2>
          {" "}
          Soy <span> Amador </span>
        </h2>
        <p>
          Estudiante de Administrador en Sistemas Microinformáticos y Redes.{<br/>}En el desarrolo web destaco en el
          frontend, pero disfruto explorando el backend. Fotógrafo
          profesional e intento siempre juntar mis dos pasiones.
        </p>
      </div>
    </section>
  );
};

export default Inicio;
