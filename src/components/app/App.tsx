import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
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
import Home from "../Home";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex-container">
        <Menu />
        <Routes>
          <Route path="/clientes" element={<Clients />} />
          <Route path="/clientes/crear" element={<CreateClient />} />
          <Route path="/inventario" element={<Stock />} />
          <Route path="/inventario/crear" element={<CreateStock />} />
          <Route path="/facturas" element={<Bill />} />
          <Route path="/facturas/crear" element={<CreateBills />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
