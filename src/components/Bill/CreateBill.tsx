import React from "react";

export default function CreateBills() {
  const [id, setId] = React.useState("");
  const [date, setDate] = React.useState("");
  const [clientID, setClientID] = React.useState("");
  const [total, setTotal] = React.useState("");
  const [detailID, setDetailID] = React.useState("");

  const handleId = (event: any) => {
    setId(event.target.value);
  };
  const handleDate = (event: any) => {
    setDate(event.target.value);
  };
  const handleClientID = (event: any) => {
    setClientID(event.target.value);
  };
  const handleTotal = (event: any) => {
    setTotal(event.target.value);
  };
  const handleDetailID = (event: any) => {
    setDetailID(event.target.value);
  };

  const addBills = () => {
    console.log(id, date, clientID, total, detailID);
  };

  return (
    <div className="create-container">
      <form>
        <h2>Crear detalle de factura:</h2>
        <h4>ID</h4>
        <input
          className="form-input"
          type="text"
          name="id"
          defaultValue={id}
          onChange={(e) => handleId(e)}
          placeholder="ID"
        />
        <h4>Fecha</h4>
        <input
          className="form-input"
          type="text"
          name="date"
          defaultValue={date}
          onChange={(e) => handleDate(e)}
          placeholder="Fecha"
        />
        <h4>Id de clientIDe</h4>
        <input
          className="form-input"
          type="text"
          name="clientID"
          defaultValue={clientID}
          onChange={(e) => handleClientID(e)}
          placeholder="ClientIDe"
        />
        <h4>Id detalle de factura</h4>
        <input
          className="form-input"
          type="text"
          name="detailID"
          defaultValue={detailID}
          onChange={(e) => handleDetailID(e)}
          placeholder="Precio total"
        />
        <h4>Total</h4>
        <input
          className="form-input"
          type="number"
          name="total"
          defaultValue={total}
          onChange={(e) => handleTotal(e)}
          placeholder="Total"
        />
      </form>
      <button onClick={addBills}>Crear</button>
    </div>
  );
}