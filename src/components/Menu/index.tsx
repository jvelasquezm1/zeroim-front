import React from "react";

import "./Menu.scss";
import { Link } from "react-router-dom";
import { List, ListItem } from "@material-ui/core";

export default function Menu() {
  return (
    <div className="side-container">
      <div className="sidenav">
        <List component="nav" aria-labelledby="nested-list-subheader">
          <ListItem button>
            <Link to="/">
              <h3>
                <i className="fa fa-home"></i> Inicio
              </h3>
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/clientes">
              <i className="fa fa-users"></i> Clientes
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/inventario">
              <i className="fa fa-sliders"></i> Inventario
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/facturas">
              <i className="fa fa-money"></i> Facturas
            </Link>
          </ListItem>
        </List>
      </div>
    </div>
  );
}
