import React, { useState, useEffect } from "react";
import "./formacion.css";

const Card = ({ box1, box2 }) => {
  return (
    <div className="cardFormacion">
      <div className="box1">
        {box1.map((data, i) => (
          <>
            <h1>{data.titulo}</h1>
            <h3>{data.IES}</h3>
            <p>{data.desc1}</p>
          </>
        ))}
      </div>
      <div className="box2">
        {box2.map((data, i) => (
          <>
            <h1>{data.titulo}</h1>
            <h3>{data.local}</h3>
            <p>{data.desc1}</p>
          </>
        ))}
      </div>
    </div>
  );
};

const Formacion = () => {
  const [formaciones, setFormacion] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/formacion.json");
        const data = await response.json();
        setFormacion(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="formacion">
      <article>
        <h1>Formación</h1>
        <div className="cardsContainer">
          {formaciones.map((formacion, index) => (
            <Card key={index} box1={formacion.card1} box2={formacion.card2} />
          ))}
        </div>
      </article>
    </section>
  );
};

export default Formacion;
