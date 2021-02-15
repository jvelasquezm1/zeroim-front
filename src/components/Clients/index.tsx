import * as React from "react";
import { connect, useDispatch } from "react-redux";

import Table from "src/containers/Table";
import * as ClientsActions from "src/store/actions/clients.actions";
import { mockedRows } from "./config";
import { ColDef, CellParams } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import Modals from "src/containers/Modals";
import Actions from "src/containers/Actions";

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
    { field: "idType", headerName: "Tipo de Id", width: 95 },
    { field: "idNumber", headerName: "Numero", width: 185 },
    { field: "name", headerName: "Nombre", width: 185 },
    { field: "address", headerName: "Direccion", width: 185 },
    { field: "phone", headerName: "Telefono", width: 185 },
    {
      field: "",
      headerName: "Action",
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
      <Table rows={props.clients.clients} columns={columns} pageSize={10} />
      <Modals
        openModal={openModal}
        handleClose={handleClose}
        selectedRow={selectedRow}
        type="clients"
      />
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  clients: state.clients,
});

export default connect(mapStateToProps)(Client);
