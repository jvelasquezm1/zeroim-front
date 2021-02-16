import * as React from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import Table from "src/containers/Table";
import * as StockActions from "src/store/actions/stock.actions";
import { ColDef, CellParams } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import Modals from "src/containers/Modals";
import Actions from "src/containers/Actions";
import isEmpty from "lodash/isEmpty";
import { TextField } from "@material-ui/core";
import { noResults, noResultsColumns } from "src/utils/constants";
import { filterByValue } from "src/utils";

function Stock(props: any) {
  const dispatch = useDispatch();
  const stockProps = useSelector((state: any) => state.stock.stock);

  React.useEffect(() => {
    dispatch(StockActions.fetchStock());
    if (props.stock.stock) {
      setStock(props.stock.stock);
    }
  }, []);
  const [openModal, setOpenModal] = React.useState(false);
  const [stock, setStock] = React.useState(props.stock.stock);
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
    { field: "name", headerName: "Producto", width: 293 },
    { field: "price", headerName: "Precio", width: 293 },
    { field: "sku", headerName: "Cantidad", width: 293 },
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
      <div className="flex-container space-between add-button">
        <h2>Inventario</h2>
        <Link to="/inventario/crear">Agregar Producto</Link>
      </div>
      <div className="flex-container space-between filter-container">
        <TextField
          id="id"
          label="ID"
          onChange={(e) => {
            const filteredValue = filterByValue(
              props.stock.stock,
              "id",
              e.target.value
            ) as any;
            setStock(filteredValue);
          }}
        />
        <TextField
          id="name"
          label="Nombre"
          onChange={(e) => {
            const filteredValue = filterByValue(
              props.stock.stock,
              "name",
              e.target.value
            ) as any;
            setStock(filteredValue);
          }}
        />
        <TextField
          id="price"
          label="Precio"
          onChange={(e) => {
            const filteredValue = filterByValue(
              props.stock.stock,
              "price",
              e.target.value
            ) as any;
            setStock(filteredValue);
          }}
        />
        <TextField
          id="sku"
          label="Cantidad"
          onChange={(e) => {
            const filteredValue = filterByValue(
              props.stock.stock,
              "sku",
              e.target.value
            ) as any;
            setStock(filteredValue);
          }}
        />
      </div>
      <Table
        rows={isEmpty(stock) ? stockProps : stock}
        columns={stock === noResults ? noResultsColumns : columns}
        pageSize={10}
      />
      <Modals
        openModal={openModal}
        handleClose={handleClose}
        selectedRow={selectedRow}
        type="stock"
      />
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  stock: state.stock,
});

export default connect(mapStateToProps)(Stock);
