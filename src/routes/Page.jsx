import React from "react";
import { Outlet,NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


import '../Styles/page.css'

const Page = () => {
  return (
    <>
      <header>
        <Header />
        <nav>
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/newsletter"> Newsletter </NavLink>
          <NavLink to="/contacto"> contacto </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Page;
