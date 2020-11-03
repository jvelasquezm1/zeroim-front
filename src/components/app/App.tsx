import React from "react";

import "./App.scss";
import Table from "../Table";

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <Table></Table>
      </header>
    </div>
  );
};

export default App;
