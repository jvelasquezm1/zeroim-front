import React from "react";

import "./Menu.scss";
import { Link } from "react-router-dom";
import { List, ListItem, Collapse } from "@material-ui/core";

export default function Menu() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
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
            {open ? (
              <i onClick={handleClick} className="fa fa-angle-up white" />
            ) : (
              <i onClick={handleClick} className="fa fa-angle-down white" />
            )}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit className="pl-4">
            <List component="div" disablePadding>
              <ListItem button>
                <Link to="/facturas/detalle">
                  <i className="fa fa-money"></i> Detalle
                </Link>
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    </div>
  );
}
