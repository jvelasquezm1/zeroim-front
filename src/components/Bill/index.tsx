import * as React from "react";
import { connect, useDispatch } from "react-redux";

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
  const [openDetailModal, setOpenDetailModal] = React.useState(false);
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
  const mockBillDetails = [
    {
      id: 9,
      producto: "23/12/2020",
      quantity: "31243214",
      totalPrice: "31243214",
    },
    {
      id: 8,
      producto: "23/12/2020",
      quantity: "31243214",
      totalPrice: "31243214",
    },
  ];
  const columns: ColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "date", headerName: "Fecha", width: 220 },
    { field: "clientID", headerName: "ID Cliente", width: 220 },
    {
      field: "detailID",
      headerName: "Detalles",
      width: 220,
      renderCell: (params: CellParams) => {
        return (
          <div key={params.row.id}>
            {mockBillDetails.map((detail) => (
              <button key={detail.id} onClick={() => handleDetailOpen(detail)}>
                {detail.id}
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
          <Link to="/facturas/crear/detalle">Agregar Detalle</Link>
        </div>
      </div>
      <Table rows={mockedRows} columns={columns} pageSize={10} />
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

const mapStateToProps = (state: any) => ({
  bills: state.bills,
});

export default connect(mapStateToProps)(Bill);
