import * as React from "react";
import { connect, useDispatch } from "react-redux";

import Table from "src/containers/Table";
import * as BillsActions from "src/store/actions/bills.actions";
import { mockedRows } from "./config";
import { ColDef, CellParams } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import Modals from "src/containers/Modals";
import Actions from "src/containers/Actions";

function BillDetail(props: any) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(BillsActions.fetchDetailBills());
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
    { field: "clientId", headerName: "ID Cliente", width: 220 },
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
        <h2>Facturas Detalle</h2>
        <div className="flex-container add-button">
          <Link to="/facturas/crear/detalle">Agregar Detalle</Link>
        </div>
      </div>
      <Table
        rows={props.detailBills.detailBills}
        columns={columns}
        pageSize={10}
      />
      <Modals
        openModal={openModal}
        handleClose={handleClose}
        selectedRow={selectedRow}
        type="billDetail"
      />
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  detailBills: state.detailBills,
});

export default connect(mapStateToProps)(BillDetail);
