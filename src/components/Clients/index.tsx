import * as React from "react";
import { connect, useDispatch } from "react-redux";
import "font-awesome/css/font-awesome.min.css";
import "./Clients.scss";

import Table from "src/containers/Table";
import * as ClientsActions from "src/store/actions/clients.actions";
import { mockedRows } from "./config";
import { ColDef, CellParams, GridApi } from "@material-ui/data-grid";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import EditForm from "src/containers/EditForm";
import DeleteAlert from "src/containers/DeleteAlert";
import { Link } from "react-router-dom";

function Client(props: any) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(ClientsActions.fetchClients());
  }, []);
  const [openModal, setOpenModal] = React.useState(false);
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
    { field: "idType", headerName: "Tipo", width: 95 },
    { field: "id", headerName: "ID", width: 185 },
    { field: "firstName", headerName: "Nombre", width: 185 },
    { field: "lastName", headerName: "Apellido", width: 185 },
    { field: "address", headerName: "Direccion", width: 185 },
    { field: "phone", headerName: "Telefono", width: 185 },
    {
      field: "",
      headerName: "Action",
      disableClickEventBubbling: true,
      renderCell: (params: CellParams) => {
        const editRow = () => {
          setSelectedRow(
            Object.assign(selectRow(), { edit: true, delete: false })
          );
          handleOpen();
        };
        const deleteRow = () => {
          setSelectedRow(
            Object.assign(selectRow(), { edit: false, delete: true })
          );
          handleOpen();
        };
        const selectRow = () => {
          const api: GridApi = params.api;
          const fields = api
            .getAllColumns()
            .map((c) => c.field)
            .filter((c) => c !== "__check__" && !!c);
          const thisRow = {} as any;

          fields.forEach((f: any) => {
            thisRow[f] = params.getValue(f);
          });

          return thisRow;
        };

        return (
          <div className="flex-container space-between">
            <button className="button-transparent" onClick={editRow}>
              <i className="fa fa-edit"></i>
            </button>
            <button className="button-transparent" onClick={deleteRow}>
              <i className="fa fa-trash red"></i>
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="table-container">
      <div className="flex-container space-between">
        <h2>Clientes</h2>
        <Link to="/clientes/crear">Agregar</Link>
      </div>
      <Table rows={mockedRows} columns={columns} pageSize={10} />
      <Dialog
        open={openModal}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {selectedRow.edit ? "Editar" : "Borrar"}
        </DialogTitle>
        <DialogContent>
          {selectedRow.edit ? (
            <EditForm selectedRow={selectedRow} type="clients" />
          ) : (
            <DeleteAlert selectedRow={selectedRow} />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  clients: state.clients,
});

export default connect(mapStateToProps)(Client);
