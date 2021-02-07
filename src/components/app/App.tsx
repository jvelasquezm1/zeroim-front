import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Clients from "../Clients";
import Menu from "../Menu";

import "./App.scss";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex-container">
        <Menu />
        <Switch>
          <Route path="/clientes" exact component={Clients} />
          <Route path="/" exact component={Clients} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
