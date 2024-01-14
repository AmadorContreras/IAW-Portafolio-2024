import React, { useState, useEffect } from "react";

import "./skills.css";
const Skill = ({ title, subTitle, icons }) => {
  return (
    <div className="skillBlock">
      <h2>{title}</h2>
      <p>{subTitle}</p>
      <div className="skillsIcons">
        {icons.map((icono, index) => (
          <img
            key={index}
            src={`${process.env.PUBLIC_URL}/${icono}`}
            alt={`Icono ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/skills.json");
        const data = await response.json();
        setSkill(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="skills">
      <article>
        <h1>Skills</h1>
        <div className="skillsContainer">
          <div className="skillsCuadri">
            {skill.map((skill, index) => (
              <Skill key={index} title={skill.title} subTitle={skill.subTitle} icons={skill.icons} />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Skills;
