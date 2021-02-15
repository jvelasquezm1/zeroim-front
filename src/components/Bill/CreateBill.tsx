import "date-fns";
import React from "react";
import { Input, TextField } from "@material-ui/core";
import SuccessAlert from "src/containers/Modals/SuccessAlert";
import { addBills } from "src/services/bills.services";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Autocomplete } from "@material-ui/lab";

export default function CreateBills(props: any) {
  const [id, setId] = React.useState(
    props.selectedRow ? props.selectedRow.id : ""
  );
  const [date, setDate] = React.useState(
    props.selectedRow ? props.selectedRow.date : new Date()
  );
  const [clientId, setclientId] = React.useState(
    props.selectedRow ? props.selectedRow.clientId : ""
  );
  const [total, setTotal] = React.useState(
    props.selectedRow ? props.selectedRow.total : ""
  );
  const [billDetail, setDetailID] = React.useState(
    props.selectedRow ? props.selectedRow.billDetail : ""
  );
  const [openModal, setOpenModal] = React.useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleId = (event: any) => {
    setId(event.target.value);
  };
  const handleDate = (date: Date | null) => {
    setDate(date);
  };
  const handleclientId = (event: any) => {
    setclientId(event.target.value);
  };
  const handleTotal = (event: any) => {
    setTotal(event.target.value);
  };
  const handleDetailID = (event: any) => {
    setDetailID(event.target.value);
  };

  const addBills_ = () => {
    addBills(id, date.getTime(), clientId, billDetail, total);
    // setOpenModal(true);
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
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            format="MM/dd/yyyy"
            id="date-picker-inline"
            value={date}
            onChange={handleDate}
          />
        </MuiPickersUtilsProvider>
        <h4>Cliente</h4>
        <Autocomplete
          id="clientId"
          options={[
            { title: "The Godfather", year: 1972 },
            { title: "Cliente", year: 1972 },
          ]}
          defaultValue={clientId}
          onChange={(e) => handleclientId(e)}
          getOptionLabel={(option: any) => option.title}
          style={{ width: 300 }}
          renderInput={(params: any) => <TextField {...params} />}
        />
        <h4>Id detalle de factura</h4>
        <Input
          className="form-input"
          type="text"
          name="billDetail"
          defaultValue={billDetail}
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
      <button className="create-button" onClick={addBills_}>
        {props.edit ? "Editar" : "Crear"}
      </button>
    </div>
  );
}
