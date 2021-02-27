import * as React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { compose } from "redux";
import { ColDef, CellParams } from "@material-ui/data-grid";
import { TextField } from "@material-ui/core";
import isEmpty from "lodash/isEmpty";

import Table from "src/containers/Table";
import Modals from "src/containers/Modals";
import Actions from "src/containers/Actions";
import { noResults, noResultsColumns } from "src/utils/constants";
import { filterByTextValue, filterByNumberValue } from "src/utils";
import withStockDataProvider from "../HOCs/withStockDataProvider";
import { deleteStock } from "src/services/stock.services";

function Stock(props: any) {
  const stockProps = useSelector((state: any) => state.stock.stock);

  const [openModal, setOpenModal] = React.useState(false);
  const [stock, setStock] = React.useState(stockProps);
  const [selectedRow, setSelectedRow] = React.useState({
    edit: false,
    delete: false,
    id: "",
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
            const filteredValue = filterByTextValue(
              stockProps,
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
            const filteredValue = filterByTextValue(
              stockProps,
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
            const filteredValue = filterByNumberValue(
              stockProps,
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
            const filteredValue = filterByNumberValue(
              stockProps,
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
        deleteAction={() => deleteStock(selectedRow.id)}
      />
    </div>
  );
}

export default compose(withStockDataProvider)(Stock);
