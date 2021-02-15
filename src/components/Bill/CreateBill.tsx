import React from "react";
import { Input } from "@material-ui/core";
import SuccessAlert from "src/containers/Modals/SuccessAlert";

export default function CreateBills(props: any) {
  const [id, setId] = React.useState(
    props.selectedRow ? props.selectedRow.id : ""
  );
  const [date, setDate] = React.useState(
    props.selectedRow ? props.selectedRow.date : ""
  );
  const [clientID, setClientID] = React.useState(
    props.selectedRow ? props.selectedRow.clientID : ""
  );
  const [total, setTotal] = React.useState(
    props.selectedRow ? props.selectedRow.total : ""
  );
  const [detailID, setDetailID] = React.useState(
    props.selectedRow ? props.selectedRow.detailID : ""
  );
  const [openModal, setOpenModal] = React.useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

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
        {!props.edit && <h2>Crear factura</h2>}
        <h4>ID</h4>
        <Input
          className="form-input"
          type="text"
          name="id"
          defaultValue={id}
          onChange={(e) => handleId(e)}
          placeholder="ID"
        />
        <h4>Fecha</h4>
        <Input
          className="form-input"
          type="text"
          name="date"
          defaultValue={date}
          onChange={(e) => handleDate(e)}
          placeholder="Fecha"
        />
        <h4>Id de clientIDe</h4>
        <Input
          className="form-input"
          type="text"
          name="clientID"
          defaultValue={clientID}
          onChange={(e) => handleClientID(e)}
          placeholder="ClientIDe"
        />
        <h4>Id detalle de factura</h4>
        <Input
          className="form-input"
          type="text"
          name="detailID"
          defaultValue={detailID}
          onChange={(e) => handleDetailID(e)}
          placeholder="Precio total"
        />
        <h4>Total</h4>
        <Input
          className="form-input"
          type="number"
          name="total"
          defaultValue={total}
          onChange={(e) => handleTotal(e)}
          placeholder="Total"
        />
      </form>
      <SuccessAlert openModal={openModal} handleClose={handleClose} />
      <button className="create-button" onClick={addBills}>
        {props.edit ? "Editar" : "Crear"}
      </button>
    </div>
  );
}
