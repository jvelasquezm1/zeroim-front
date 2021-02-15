import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "font-awesome/css/font-awesome.min.css";

import Stock from "../Stock";
import Bill from "../Bill";
import Clients from "../Clients";
import Menu from "../Menu";

import "./App.scss";
import CreateClient from "../Clients/CreateClient";
import CreateStock from "../Stock/CreateStock";
import CreateBills from "../Bill/CreateBill";
import CreateBillDetail from "../Bill/CreateBillDetail";
import Home from "../Home";
import BillDetail from "../Bill/BillDetail";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex-container">
        <Menu />
        <Switch>
          <Route path="/clientes" exact component={Clients} />
          <Route path="/clientes/crear" exact component={CreateClient} />
          <Route path="/inventario" exact component={Stock} />
          <Route path="/inventario/crear" exact component={CreateStock} />
          <Route path="/facturas" exact component={Bill} />
          <Route path="/facturas/crear" exact component={CreateBills} />
          <Route path="/facturas/detalle" exact component={BillDetail} />
          <Route
            path="/facturas/crear/detalle"
            exact
            component={CreateBillDetail}
          />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
