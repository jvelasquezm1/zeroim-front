import React from "react";

import "./Menu.scss";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="side-container">
      <div className="sidenav">
        <Link to="/clientes">Clientes</Link>
        <Link to="/inventario">Inventario</Link>
        <Link to="/facturas">Facturas</Link>
      </div>
    </div>
  );
}
