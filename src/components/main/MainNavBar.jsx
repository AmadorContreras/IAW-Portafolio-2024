
import { Link } from "react-scroll";
import './mainNavBar.css';

const ScrollNavLink = ({ id, name, }) => (
  <Link 
    className={`MainNavBarBtn`}
    to={id} 
    spy={true} 
    smooth={true} 
    offset={-200} 
    duration={500}
  >
    {name}
  </Link>
);



const MainNavBar = () => {
  
  return (<>
    <div  className="MainNavBar">
      <ScrollNavLink id="inicio" name="Home" />
      <ScrollNavLink id="sobre-mi" name="Sobre mí"/>
      <ScrollNavLink id="proyectos" name="Proyectos" />
      <ScrollNavLink id="skils" name="Skils" />
      <ScrollNavLink id="cv" name="Curriculum" />
      <ScrollNavLink id="contact-info" name="Información de contacto" />
      <ScrollNavLink id="redes" name="Redes" />
    </div>
  </>
  );
};

export default MainNavBar;
