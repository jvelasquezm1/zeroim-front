import * as React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { compose } from "redux";
import { ColDef, CellParams } from "@material-ui/data-grid";
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import isEmpty from "lodash/isEmpty";
import filter from "lodash/filter";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import { default as Util } from "src/containers/Table";
import Modals from "src/containers/Modals";
import Actions from "src/containers/Actions";
import {
  filterByTextValue,
  filterByDateValue,
  filterByNumberValue,
} from "src/utils";
import { noResults, noResultsColumns } from "src/utils/constants";
import withBillsDataProvider from "../HOCs/withBillsDataProvider";
import withClientsDataProvider from "../HOCs/withClientsDataProvider";
import withStockDataProvider from "../HOCs/withStockDataProvider";
import { deleteBill } from "src/services/bills.services";

function Bill(props: any) {
  const billsProps = useSelector((state: any) => state.bills.bills);
  const clientsProps = useSelector((state: any) => state.clients.clients);

  const [openModal, setOpenModal] = React.useState(false);
  const [openDetailModal, setOpenDetailModal] = React.useState(false);
  const [bills, setBills] = React.useState([]);
  const [selectedRow, setSelectedRow] = React.useState({
    edit: false,
    delete: false,
    billDetail: [],
    billNumber: "",
    id: "",
  });
  const [selectedDetailRow, setSelectedDetailRow] = React.useState({
    edit: false,
    delete: false,
    productId: "",
  });
  const [openDetails, setOpenDetails] = React.useState(false);

  const handleDetailsOpen = (row: any) => {
    setSelectedRow(row);
    setOpenDetails(true);
  };

  const handleDetailsClose = () => {
    setOpenDetails(false);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleDetailClose = () => {
    if (selectedDetailRow.delete && selectedRow.billDetail) {
      const filteredArray = selectedRow.billDetail.filter(
        (item: any) => item.productId !== selectedDetailRow.productId
      );
      const newSelectedRow = Object.assign({}, selectedRow);
      newSelectedRow.billDetail = filteredArray;
      setSelectedRow(newSelectedRow);
      console.log("TODO - Update on DB");
    }
    setOpenDetailModal(false);
  };
  const handleDetailOpen = (params: any, edit: any, delete_: any) => {
    setSelectedDetailRow(
      Object.assign(params, { edit: edit, delete: delete_ })
    );
    setOpenDetailModal(true);
  };
  const renderBillDetails = (params: any) => {
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => handleDetailsOpen(params.row)}
        >
          Ver detalles
        </Button>
        <Dialog open={openDetails} onClose={handleDetailsClose} fullWidth>
          <DialogTitle>
            Detalles de factura {selectedRow.billNumber}
          </DialogTitle>
          <DialogContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Producto</TableCell>
                  <TableCell>Cantidad</TableCell>
                  <TableCell>Valor unitario</TableCell>
                  <TableCell>Valor Total</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedRow.billDetail.map((row: any) => (
                  <TableRow key={row.productId}>
                    <TableCell>{row.productName}</TableCell>
                    <TableCell>{row.quantity}</TableCell>
                    <TableCell>{row.unitValue}</TableCell>
                    <TableCell>{row.totalValue}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleDetailOpen(row, true, false)}
                      >
                        <i className="fa fa-edit"></i>
                      </Button>
                      <Button
                        onClick={() => handleDetailOpen(row, false, true)}
                      >
                        <i className="fa fa-trash red"></i>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDetailsClose} color="primary">
              Cancelar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };
  const columns: ColDef[] = [
    { field: "billNumber", headerName: "ID", width: 100 },
    {
      field: "date",
      headerName: "Fecha",
      width: 220,
      renderCell: (params: CellParams) => {
        return <p>{new Date(params.row.date).toLocaleString()}</p>;
      },
    },
    {
      field: "clientId",
      headerName: "Cliente",
      width: 220,
      renderCell: (params: CellParams) => {
        const client = filter(clientsProps, { id: params.row.clientId }) as any;
        return <p>{isEmpty(client) ? "" : client[0].name}</p>;
      },
    },
    {
      field: "billDetail",
      headerName: "Detalles",
      width: 220,
      renderCell: (params: CellParams) => {
        return renderBillDetails(params);
      },
    },
    { field: "total", headerName: "TOTAL", width: 220 },
    {
      field: "",
      headerName: "Action",
      width: 140,
      disableClickEventBubbling: true,
      renderCell: (params: CellParams) => {
        return (
          <Actions
            setSelectedRow={setSelectedRow}
            params={params}
            handleOpen={handleOpen}
          />
        );
      },
    },
  ];

  return (
    <div className="table-container">
      <div className="flex-container space-between">
        <h2>Facturas</h2>
        <div className="flex-container add-button">
          <Link to="/facturas/crear">Agregar Factura</Link>
        </div>
      </div>
      <div className="flex-container space-between filter-container">
        <TextField
          id="id"
          label="ID"
          onChange={(e) => {
            const filteredValue = filterByTextValue(
              billsProps,
              "billNumber",
              e.target.value
            ) as any;
            setBills(filteredValue);
          }}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            format="MM/dd/yyyy"
            id="date-picker-inline"
            value={new Date()}
            label="Fecha"
            onChange={(value) => {
              const filteredValue = filterByDateValue(
                billsProps,
                "date",
                value
              ) as any;
              setBills(filteredValue);
            }}
          />
        </MuiPickersUtilsProvider>
        <TextField
          id="clientId"
          label="Cliente"
          onChange={(e) => {
            const filteredValue = filterByTextValue(
              billsProps,
              "clientId",
              e.target.value,
              clientsProps
            ) as any;
            setBills(filteredValue);
          }}
        />
        <TextField
          id="total"
          label="Total"
          onChange={(e) => {
            const filteredValue = filterByNumberValue(
              billsProps,
              "total",
              e.target.value
            ) as any;
            setBills(filteredValue);
          }}
        />
        <Button
          color="primary"
          variant="contained"
          onClick={() => setBills(billsProps)}
        >
          Remover filtro
        </Button>
      </div>
      <Util
        rows={isEmpty(bills) ? billsProps : bills}
        columns={bills === noResults ? noResultsColumns : columns}
        pageSize={10}
      />
      <Modals
        openModal={openModal}
        handleClose={handleClose}
        selectedRow={selectedRow}
        type="bill"
        deleteAction={() => deleteBill(selectedRow.id)}
      />
      <Modals
        openModal={openDetailModal}
        handleClose={handleDetailClose}
        selectedRow={selectedDetailRow}
        type="billDetail"
        deleteAction={() => console.log("Update Selected row")}
      />
    </div>
  );
}

export default compose(
  withBillsDataProvider,
  withClientsDataProvider,
  withStockDataProvider
)(Bill);
