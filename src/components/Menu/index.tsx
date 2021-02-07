import React from "react";

import "./Menu.scss";

export default function Menu() {
  return (
    <div className="sidenav">
      <a href="clientes">Clientes</a>
      <a href="inventario">Inventario</a>
      <a href="factura">Factura</a>
    </div>
  );
}
