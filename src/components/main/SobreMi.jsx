import RedesLinksIcons from "../RedesLinksIcons";
import "./sobreMi.css";

import Carousel from "./Carousel";
const SobreMi = () => {
  return (
    <section id="sobre-mi">
      <article>
        <h1> Sobre mí </h1>
        <div className="infoSobreMi">
          <div className="txtSobreMi">
            <p>
              Desde mi amor inicial por la fotografía, he explorado el enorme
              mundo de la informática, fusionando estas dos pasiones en cada
              captura y línea de código.
            </p>
            <p>En mi mundo, la fotografía y la informática se entrelazan.</p>
          </div>
        </div>
        <Carousel />
        <RedesLinksIcons />
      </article>
    </section>
  );
};

export default SobreMi;
