import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as stockActions from "src/store/actions/stock.actions";
import * as billsActions from "src/store/actions/bills.actions";
import * as clientsActions from "src/store/actions/clients.actions";

export default function Home() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(stockActions.fetchStock());
    dispatch(billsActions.fetchBills());
    dispatch(clientsActions.fetchClients());
  }, []);

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
