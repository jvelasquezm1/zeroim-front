import React from "react";
import { Input } from "@material-ui/core";
import SuccessAlert from "src/containers/Modals/SuccessAlert";
import { addStock } from "src/services/stock.services";

export default function CreateStock(props: any) {
  const [id, setId] = React.useState(
    props.selectedRow ? props.selectedRow.id : ""
  );
  const [product, setProduct] = React.useState(
    props.selectedRow ? props.selectedRow.product : ""
  );
  const [quantity, setQuantity] = React.useState(
    props.selectedRow ? props.selectedRow.quantity : ""
  );
  const [price, setPrice] = React.useState(
    props.selectedRow ? props.selectedRow.price : ""
  );
  const [openModal, setOpenModal] = React.useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleId = (event: any) => {
    setId(event.target.value);
  };
  const handleProduct = (event: any) => {
    setProduct(event.target.value);
  };
  const handleQuantity = (event: any) => {
    setQuantity(event.target.value);
  };
  const handlePrice = (event: any) => {
    setPrice(event.target.value);
  };

  const addStock_ = () => {
    addStock(id, product, price, quantity);
    setOpenModal(true);
  };

  const editStock = () => {
    console.log(id, product, price, quantity);
    // setOpenModal(true);
  };

  return (
    <div className="create-container">
      <form>
        {!props.edit && (
          <h2 className="center">Crear producto en inventario</h2>
        )}
        <h4>ID</h4>
        <Input
          className="form-input"
          type="text"
          name="id"
          defaultValue={id}
          onChange={(e) => handleId(e)}
          placeholder="ID"
        />
        <h4>Nombre de producto</h4>
        <Input
          className="form-input"
          type="text"
          name="product"
          defaultValue={product}
          onChange={(e) => handleProduct(e)}
          placeholder="Producto"
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
        <h4>Precio</h4>
        <Input
          className="form-input"
          type="text"
          name="price"
          defaultValue={price}
          onChange={(e) => handlePrice(e)}
          placeholder="Precio"
        />
      </form>
      <SuccessAlert openModal={openModal} handleClose={handleClose} />
      <button
        className="create-button"
        onClick={props.edit ? editStock : addStock_}
      >
        {props.edit ? "Editar" : "Crear"}
      </button>
    </div>
  );
}
