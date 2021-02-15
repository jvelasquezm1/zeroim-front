import React from "react";
import { Input } from "@material-ui/core";
import SuccessAlert from "src/containers/Modals/SuccessAlert";

export default function CreateBillDetail(props: any) {
  const [id, setId] = React.useState(
    props.selectedRow ? props.selectedRow.id : ""
  );
  const [producto, setProducto] = React.useState(
    props.selectedRow ? props.selectedRow.producto : ""
  );
  const [quantity, setQuantity] = React.useState(
    props.selectedRow ? props.selectedRow.quantity : ""
  );
  const [totalPrice, setTotalPrice] = React.useState(
    props.selectedRow ? props.selectedRow.totalPrice : ""
  );
  const [openModal, setOpenModal] = React.useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleId = (event: any) => {
    setId(event.target.value);
  };
  const handleProducto = (event: any) => {
    setProducto(event.target.value);
  };
  const handleQuantity = (event: any) => {
    setQuantity(event.target.value);
  };
  const handleTotalPrice = (event: any) => {
    setTotalPrice(event.target.value);
  };

  const addBillDetail = () => {
    console.log(id, producto, quantity, totalPrice);
  };

  return (
    <div className="create-container">
      <form>
        {!props.edit && <h2>Crear detalle de factura</h2>}
        <h4>ID</h4>
        <Input
          className="form-input"
          type="text"
          name="id"
          defaultValue={id}
          onChange={(e) => handleId(e)}
          placeholder="ID"
        />
        <h4>Producto</h4>
        <Input
          className="form-input"
          type="text"
          name="producto"
          defaultValue={producto}
          onChange={(e) => handleProducto(e)}
          placeholder="Producto"
        />
        <h4>Precio total</h4>
        <Input
          className="form-input"
          type="text"
          name="totalPrice"
          defaultValue={totalPrice}
          onChange={(e) => handleTotalPrice(e)}
          placeholder="Precio total"
        />
        <h4>Cantidad</h4>
        <Input
          className="form-input"
          type="number"
          name="quantity"
          defaultValue={quantity}
          onChange={(e) => handleQuantity(e)}
          placeholder="Cantidad"
        />
      </form>
      <SuccessAlert openModal={openModal} handleClose={handleClose} />
      <button className="create-button" onClick={addBillDetail}>
        {props.edit ? "Editar" : "Crear"}
      </button>
    </div>
  );
}
