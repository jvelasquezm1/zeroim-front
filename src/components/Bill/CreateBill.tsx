import "date-fns";
import React from "react";
import {
  Input,
  TextField,
  Collapse,
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@material-ui/core";
import SuccessAlert from "src/containers/Modals/SuccessAlert";
import { addBills } from "src/services/bills.services";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Autocomplete } from "@material-ui/lab";
import Modals from "src/containers/Modals";
import { useSelector } from "react-redux";

export default function CreateBills(props: any) {
  const clientsProps = useSelector((state: any) => state.clients.clients);
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
    props.selectedRow ? props.selectedRow.total : 0
  );

  const [billDetail, setBillDetail] = React.useState(
    props.selectedRow ? props.selectedRow.billDetail : []
  );
  const [selectedDetailRow, setSelectedDetailRow] = React.useState({
    edit: true,
    delete: false,
  });
  const [openModal, setOpenModal] = React.useState(false);
  const [openDetailModal, setOpenDetailModal] = React.useState(false);

  React.useEffect(() => {
    billDetail.map((bill: any) => setTotal(total + bill.totalValue));
  }, [billDetail]);

  const handleClose = () => {
    setOpenModal(false);
  };
  const handleDetailClose = () => {
    setOpenDetailModal(false);
  };
  const setOpenDetailModalWithDetailData = (detail: any) => {
    setSelectedDetailRow(
      Object.assign(detail, {
        edit: true,
        delete: false,
        updateBillDetail: true,
      })
    );
    setOpenDetailModal(true);
  };
  const handleId = (event: any) => {
    setId(event.target.value);
  };
  const handleDate = (date: Date | null) => {
    setDate(date);
  };
  const handleclientId = (client: any) => {
    setclientId(client ? client.id : "");
  };

  const addBills_ = () => {
    addBills(id, date, clientId, billDetail, total);
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
          options={clientsProps}
          getOptionLabel={(option) => option.name || ""}
          defaultValue={clientId}
          onChange={(event: any, newValue: string | null) => {
            handleclientId(newValue);
          }}
          style={{ width: 300 }}
          renderInput={(params: any) => <TextField {...params} />}
        />
        <h4>Id detalle de factura</h4>
        <Collapse in={true} timeout="auto" unmountOnExit>
          <Box>
            <Table size="small" aria-label="purchases">
              <TableHead>
                <TableRow>
                  <TableCell>Producto</TableCell>
                  <TableCell>Cantidad</TableCell>
                  <TableCell>Precio unitario</TableCell>
                  <TableCell>Precio total</TableCell>
                  <TableCell align="right">
                    <Button
                      onClick={() => setOpenDetailModal(true)}
                      variant="contained"
                      color="primary"
                    >
                      Nuevo
                    </Button>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {billDetail.map((detail: any) => {
                  return (
                    <TableRow key={detail.id}>
                      <TableCell component="th" scope="row">
                        {detail.name}
                      </TableCell>
                      <TableCell>{detail.quantity}</TableCell>
                      <TableCell>{detail.unitValue}</TableCell>
                      <TableCell>{detail.totalValue}</TableCell>
                      <TableCell align="right">
                        <Button
                          onClick={() =>
                            setOpenDetailModalWithDetailData(detail)
                          }
                          variant="contained"
                          color="primary"
                        >
                          <i className="fa fa-edit"></i>
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Box>
        </Collapse>
        <h4>Total</h4>
        <p>${total}</p>
      </form>
      <Modals
        openModal={openDetailModal}
        handleClose={handleDetailClose}
        selectedRow={selectedDetailRow}
        type="billDetail"
        setDetailID={setBillDetail}
        billDetail={billDetail}
      />
      <SuccessAlert openModal={openModal} handleClose={handleClose} />
      <button className="create-button" onClick={addBills_}>
        {props.edit ? "Editar" : "Crear"}
      </button>
    </div>
  );
}
