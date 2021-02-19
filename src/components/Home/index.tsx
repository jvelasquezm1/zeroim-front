import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <img className="logo-img" src="logo_noBg.png" alt="logo" />
      <div className="home-menu">
        <Link to="/clientes">Clientes</Link>
        <Link to="/inventario">Inventario</Link>
        <Link to="/facturas">Facturas</Link>
      </div>
    </div>
  );
}
