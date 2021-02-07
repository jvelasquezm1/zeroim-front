import * as React from "react";
import { connect, useDispatch } from "react-redux";
import "font-awesome/css/font-awesome.min.css";

import Table from "src/containers/Table";
import * as StockActions from "src/store/actions/stock.actions";
import { mockedRows } from "./config";
import { ColDef, CellParams } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import Modals from "src/containers/Modals";
import Actions from "src/containers/Actions";

function Stock(props: any) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(StockActions.fetchStock());
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
    { field: "id", headerName: "ID", width: 120 },
    { field: "product", headerName: "Producto", width: 440 },
    { field: "quantity", headerName: "cantidad", width: 440 },
    {
      field: "",
      headerName: "Action",
      disableClickEventBubbling: true,
      width: 120,
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
        <h2>Stock</h2>
        <Link to="/stock/crear">Agregar</Link>
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
  stock: state.stock,
});

export default connect(mapStateToProps)(Stock);
