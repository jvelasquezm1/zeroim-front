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

import { default as Util } from "src/containers/Table";
import Modals from "src/containers/Modals";
import Actions from "src/containers/Actions";
import { filterByValue } from "src/utils";
import { noResults, noResultsColumns } from "src/utils/constants";
import withBillsDataProvider from "../HOCs/withBillsDataProvider";
import withClientsDataProvider from "../HOCs/withClientsDataProvider";
import withStockDataProvider from "../HOCs/withStockDataProvider";

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
  });
  const [selectedDetailRow, setSelectedDetailRow] = React.useState({
    edit: false,
    delete: false,
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
    setOpenDetailModal(false);
  };
  const handleDetailOpen = (params: any) => {
    setSelectedDetailRow(Object.assign(params, { edit: true, delete: false }));
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
                      <Button onClick={() => handleDetailOpen(row)}>
                        <i className="fa fa-edit"></i>
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
            const filteredValue = filterByValue(
              billsProps,
              "id",
              e.target.value
            ) as any;
            setBills(filteredValue);
          }}
        />
        <TextField
          id="date"
          label="Fecha"
          onChange={(e) => {
            const filteredValue = filterByValue(
              billsProps,
              "date",
              e.target.value
            ) as any;
            setBills(filteredValue);
          }}
        />
        <TextField
          id="clientId"
          label="Cliente"
          onChange={(e) => {
            const filteredValue = filterByValue(
              billsProps,
              "clientId",
              e.target.value
            ) as any;
            setBills(filteredValue);
          }}
        />
        <TextField
          id="billDetail"
          label="Detalle"
          onChange={(e) => {
            const filteredValue = filterByValue(
              billsProps,
              "billDetail",
              e.target.value
            ) as any;
            setBills(filteredValue);
          }}
        />
        <TextField
          id="total"
          label="Total"
          onChange={(e) => {
            const filteredValue = filterByValue(
              billsProps,
              "total",
              e.target.value
            ) as any;
            setBills(filteredValue);
          }}
        />
      </div>
      <Util
        rows={billsProps}
        columns={bills === noResults ? noResultsColumns : columns}
        pageSize={10}
      />
      <Modals
        openModal={openModal}
        handleClose={handleClose}
        selectedRow={selectedRow}
        type="bill"
      />
      <Modals
        openModal={openDetailModal}
        handleClose={handleDetailClose}
        selectedRow={selectedDetailRow}
        type="billDetail"
      />
    </div>
  );
}

export default compose(
  withBillsDataProvider,
  withClientsDataProvider,
  withStockDataProvider
)(Bill);
