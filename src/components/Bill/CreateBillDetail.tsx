import React from "react";
import { Input } from "@material-ui/core";
import SuccessAlert from "src/containers/Modals/SuccessAlert";

export default function CreateBillDetail(props: any) {
  const [unitValue, setUnitValue] = React.useState(
    props.selectedRow ? props.selectedRow.unitValue : 0
  );
  const [productId, setProductId] = React.useState(
    props.selectedRow ? props.selectedRow.productId : ""
  );
  const [quantity, setQuantity] = React.useState(
    props.selectedRow ? props.selectedRow.quantity : 0
  );
  const [totalValue, setTotalValue] = React.useState(
    props.selectedRow ? props.selectedRow.totalValue : 0
  );
  const [openModal, setOpenModal] = React.useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleUnitValue = (event: any) => {
    setUnitValue(event.target.value);
  };
  const handleProductId = (event: any) => {
    setProductId(event.target.value);
    setTotalValue(event.target.value * quantity);
  };
  const handleQuantity = (event: any) => {
    setQuantity(event.target.value);
    setTotalValue(unitValue * event.target.value);
  };
  const addBillDetail = () => {
    const newBillDetail = { productId, quantity, unitValue, totalValue };
    props.setDetailID(props.billDetail.concat(newBillDetail));
    // setOpenModal(true);
  };

  return (
    <div className="create-container">
      <form>
        {(!props.edit || props.billDetail) && <h2>Crear detalle de factura</h2>}
        <h4>Producto</h4>
        <Input
          className="form-input"
          type="text"
          name="productId"
          defaultValue={productId}
          onChange={(e) => handleProductId(e)}
          placeholder="Producto"
        />
        <h4>Precio unitario</h4>
        <Input
          className="form-input"
          type="text"
          name="unitValue"
          defaultValue={unitValue}
          onChange={(e) => handleUnitValue(e)}
          placeholder="Precio unitario"
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
        <h4>Precio total</h4>
        <p>${totalValue}</p>
      </form>
      <SuccessAlert openModal={openModal} handleClose={handleClose} />
      <button className="create-button" onClick={addBillDetail}>
        {props.edit && !props.billDetail ? "Editar" : "Crear"}
      </button>
    </div>
  );
}
