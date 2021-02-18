import * as React from "react";
import { useSelector } from "react-redux";

import Table from "src/containers/Table";
import { ColDef, CellParams } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import Modals from "src/containers/Modals";
import Actions from "src/containers/Actions";
import { TextField } from "@material-ui/core";
import { noResults, noResultsColumns } from "src/utils/constants";
import { filterByValue } from "src/utils";
import { useDispatch } from "react-redux";
import * as stockActions from "src/store/actions/stock.actions";
import * as billsActions from "src/store/actions/bills.actions";
import * as clientsActions from "src/store/actions/clients.actions";

export default function Stock(props: any) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(stockActions.fetchStock());
    dispatch(billsActions.fetchBills());
    dispatch(clientsActions.fetchClients());
  }, []);

  const stockProps = useSelector((state: any) => state.stock.stock);

  const [openModal, setOpenModal] = React.useState(false);
  const [stock, setStock] = React.useState(stockProps);
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
            const filteredValue = filterByValue(
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
            const filteredValue = filterByValue(
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
            const filteredValue = filterByValue(
              stockProps,
              "sku",
              e.target.value
            ) as any;
            setStock(filteredValue);
          }}
        />
      </div>
      <Table
        rows={stockProps}
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
