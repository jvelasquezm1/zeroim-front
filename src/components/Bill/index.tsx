import * as React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { compose } from "redux";
import { ColDef, CellParams } from "@material-ui/data-grid";
import { TextField } from "@material-ui/core";
import isEmpty from "lodash/isEmpty";
import filter from "lodash/filter";

import Table from "src/containers/Table";
import Modals from "src/containers/Modals";
import Actions from "src/containers/Actions";
import { filterByValue } from "src/utils";
import { noResults, noResultsColumns } from "src/utils/constants";
import withBillsDataProvider from "../HOCs/withBillsDataProvider";
import withClientsDataProvider from "../HOCs/withClientsDataProvider";

function Bill(props: any) {
  const billsProps = useSelector((state: any) => state.bills.bills);
  const clientsProps = useSelector((state: any) => state.clients.clients);

  const [openModal, setOpenModal] = React.useState(false);
  const [openDetailModal, setOpenDetailModal] = React.useState(false);
  const [bills, setBills] = React.useState([]);
  const [selectedRow, setSelectedRow] = React.useState({
    edit: false,
    delete: false,
  });
  const [selectedDetailRow, setSelectedDetailRow] = React.useState({
    edit: false,
    delete: false,
  });
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
        return (
          <div>
            {params.row.billDetail.map((detail: any) => (
              <button key={detail.id} onClick={() => handleDetailOpen(detail)}>
                {detail.productName}
              </button>
            ))}
          </div>
        );
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
      <Table
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

export default compose(withBillsDataProvider, withClientsDataProvider)(Bill);
