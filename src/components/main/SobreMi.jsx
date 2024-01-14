import RedesLinksIcons from '../RedesLinksIcons'
import './sobreMi.css';
const SobreMi = () => {
    return (
        <section id="sobre-mi">
          <article>
          <h1> Sobre mí </h1>
          <div className="infoSobreMi">
            <div>
              <p>Desde mi amor inicial por la fotografía, he explorado el vasto territorio de la informática, fusionando estas dos pasiones en cada captura y línea de código.</p>
              <p>
En mi mundo, la fotografía y la informática se entrelazan.</p>
              </div>
            <div>
                <ul>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </ul>
            </div>
          </div>
          <RedesLinksIcons/>
          </article>
        </section>
    );
}

export default SobreMi;