import React from "react";
import { Input, TextField } from "@material-ui/core";
import SuccessAlert from "src/containers/Modals/SuccessAlert";
import { useSelector } from "react-redux";
import { Autocomplete } from "@material-ui/lab";

export default function CreateBillDetail(props: any) {
  const stockProps = useSelector((state: any) => state.stock.stock);

  const [unitValue, setUnitValue] = React.useState(
    props.selectedRow ? props.selectedRow.unitValue : 0
  );
  const [productId, setProductId] = React.useState(
    props.selectedRow ? props.selectedRow.productId : ""
  );
  const [quantity, setQuantity] = React.useState(
    props.selectedRow && props.selectedRow.quantity
      ? props.selectedRow.quantity
      : 1
  );
  const [totalValue, setTotalValue] = React.useState(
    props.selectedRow ? props.selectedRow.totalValue : 0
  );
  const [openModal, setOpenModal] = React.useState(false);
  const [name, setName] = React.useState(
    props.selectedRow
      ? props.selectedRow.productName || props.selectedRow.name
      : ""
  );

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleProductId = (event: any, values: any) => {
    setProductId(values ? values.id : "");
    setUnitValue(values ? values.price : "");
    setTotalValue(values ? values.price * quantity : 0);
    setName(values ? values.name : "");
  };
  const handleQuantity = (event: any) => {
    setQuantity(event.target.value);
    setTotalValue(unitValue * event.target.value);
  };
  const addBillDetail = () => {
    const newBillDetail = { name, productId, quantity, unitValue, totalValue };
    props.setDetailID(props.billDetail.concat(newBillDetail));
    // setOpenModal(true);
  };
  const updateBillDetail = () => {
    const newBillDetail = { name, productId, quantity, unitValue, totalValue };
    console.log(newBillDetail, "TO UPDATE");
    // setOpenModal(true);
  };

  return (
    <div className="create-container">
      <form>
        {props.billDetail && !props.selectedRow.updateBillDetail && (
          <h2 className="center">Crear detalle de factura</h2>
        )}
        <h4>Producto</h4>
        <Autocomplete
          id="name"
          options={stockProps}
          className="form-input"
          getOptionLabel={(option: any) => option.name || name}
          defaultValue={name}
          onChange={handleProductId}
          style={{ width: 300 }}
          renderInput={(params: any) => <TextField {...params} />}
        />
        <h4>Precio unitario</h4>
        <p>${unitValue}</p>
        <h4>Cantidad</h4>
        <Input
          className="form-input"
          type="number"
          name="quantity"
          defaultValue={quantity}
          onChange={(e) => handleQuantity(e)}
          placeholder="Cantidad"
        />
        <h4>Precio total</h4>
        <p>${totalValue}</p>
      </form>
      <SuccessAlert openModal={openModal} handleClose={handleClose} />
      <button
        className="create-button"
        onClick={
          props.billDetail && !props.selectedRow.updateBillDetail
            ? addBillDetail
            : updateBillDetail
        }
      >
        {props.billDetail && !props.selectedRow.updateBillDetail
          ? "Crear"
          : "Editar"}
      </button>
    </div>
  );
}
