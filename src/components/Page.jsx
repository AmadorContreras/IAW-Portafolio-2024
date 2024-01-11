import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Page = () => {
  return (
    <>
      <header>
        <section>
          <Header />
        </section>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/projects"> +Projects </Link>
        </nav>
      </header>
      <section>
        <h1> Outlet</h1>
        <Outlet />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Page;
