import * as React from "react";
import { connect, useDispatch } from "react-redux";
import "font-awesome/css/font-awesome.min.css";

import Table from "src/containers/Table";
import * as BillsActions from "src/store/actions/bills.actions";
import { mockedRows } from "./config";
import { ColDef, CellParams } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import Modals from "src/containers/Modals";
import Actions from "src/containers/Actions";

function Bill(props: any) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(BillsActions.fetchBills());
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
    { field: "id", headerName: "ID", width: 100 },
    { field: "date", headerName: "Fecha", width: 220 },
    { field: "clientID", headerName: "ID Cliente", width: 220 },
    { field: "detailID", headerName: "Detalles", width: 220 },
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
        <Link to="/facturas/crear">Agregar Factura</Link>
        <Link to="/facturas/crear/detalle">Agregar Detalle</Link>
      </div>
      <Table rows={mockedRows} columns={columns} pageSize={10} />
      <Modals
        openModal={openModal}
        handleClose={handleClose}
        selectedRow={selectedRow}
      />
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  bills: state.bills,
});

export default connect(mapStateToProps)(Bill);
