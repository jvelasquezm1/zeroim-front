import * as React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { compose } from "redux";
import { ColDef, CellParams } from "@material-ui/data-grid";
import { TextField } from "@material-ui/core";

import Table from "src/containers/Table";
import Modals from "src/containers/Modals";
import Actions from "src/containers/Actions";
import { filterByValue } from "src/utils";
import { noResults, noResultsColumns } from "src/utils/constants";
import withClientsDataProvider from "../HOCs/withClientsDataProvider";

function Client(props: any) {
  const clientsProps = useSelector((state: any) => state.clients.clients);

  const [openModal, setOpenModal] = React.useState(false);
  const [clients, setClients] = React.useState(clientsProps);
  const [selectedRow, setSelectedRow] = React.useState({
    edit: false,
    delete: false,
  });
  const handleClose = () => {
    setOpenModal(false);
  };
  const handleOpen = () => {
    setOpenModal(true);
  };
  const columns: ColDef[] = [
    { field: "idType", headerName: "Tipo de Id", width: 185 },
    { field: "idNumber", headerName: "Numero", width: 185 },
    { field: "name", headerName: "Nombre", width: 185 },
    { field: "address", headerName: "Direccion", width: 185 },
    { field: "phone", headerName: "Telefono", width: 185 },
    {
      field: "",
      headerName: "Action",
      width: 195,
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
      <div className="flex-container space-between add-button">
        <h2>Clientes</h2>
        <Link to="/clientes/crear">Agregar Cliente</Link>
      </div>
      <div className="flex-container space-between filter-container">
        <TextField
          id="id"
          label="Tipo de ID"
          onChange={(e) => {
            const filteredValue = filterByValue(
              clientsProps,
              "idType",
              e.target.value
            ) as any;
            setClients(filteredValue);
          }}
        />
        <TextField
          id="number"
          label="Numero"
          onChange={(e) => {
            const filteredValue = filterByValue(
              clientsProps,
              "idNumber",
              e.target.value
            ) as any;
            setClients(filteredValue);
          }}
        />
        <TextField
          id="name"
          label="Nombre"
          onChange={(e) => {
            const filteredValue = filterByValue(
              clientsProps,
              "name",
              e.target.value
            ) as any;
            setClients(filteredValue);
          }}
        />
        <TextField
          id="address"
          label="Direccion"
          onChange={(e) => {
            const filteredValue = filterByValue(
              clientsProps,
              "address",
              e.target.value
            ) as any;
            setClients(filteredValue);
          }}
        />
        <TextField
          id="phone"
          label="Telefono"
          onChange={(e) => {
            const filteredValue = filterByValue(
              clientsProps,
              "phone",
              e.target.value
            ) as any;
            setClients(filteredValue);
          }}
        />
      </div>
      <Table
        rows={clientsProps}
        columns={clients === noResults ? noResultsColumns : columns}
        pageSize={10}
      />
      <Modals
        openModal={openModal}
        handleClose={handleClose}
        selectedRow={selectedRow}
        type="clients"
      />
    </div>
  );
}

export default compose(withClientsDataProvider)(Client);
