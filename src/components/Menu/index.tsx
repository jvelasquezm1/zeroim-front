import React from "react";

import "./Menu.scss";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="side-container">
      <div className="sidenav">
        <Link to="/">
          <h3>
            <i className="fa fa-home"></i> Inicio
          </h3>
        </Link>
        <Link to="/clientes">
          <i className="fa fa-users"></i> Clientes
        </Link>
        <Link to="/inventario">
          <i className="fa fa-sliders"></i> Inventario
        </Link>
        <Link to="/facturas">
          <i className="fa fa-money"></i> Facturas
        </Link>
      </div>
    </div>
  );
}
