import React from "react";

export default function CreateBillDetail() {
  const [id, setId] = React.useState("");
  const [producto, setProducto] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [totalPrice, setTotalPrice] = React.useState("");

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
        <h2>Crear detalle de factura:</h2>
        <h4>ID</h4>
        <input
          className="form-input"
          type="text"
          name="id"
          defaultValue={id}
          onChange={(e) => handleId(e)}
          placeholder="ID"
        />
        <h4>Producto</h4>
        <input
          className="form-input"
          type="text"
          name="producto"
          defaultValue={producto}
          onChange={(e) => handleProducto(e)}
          placeholder="Producto"
        />
        <h4>Precio total</h4>
        <input
          className="form-input"
          type="text"
          name="totalPrice"
          defaultValue={totalPrice}
          onChange={(e) => handleTotalPrice(e)}
          placeholder="Precio total"
        />
        <h4>Cantidad</h4>
        <input
          className="form-input"
          type="number"
          name="quantity"
          defaultValue={quantity}
          onChange={(e) => handleQuantity(e)}
          placeholder="Cantidad"
        />
      </form>
      <button onClick={addBillDetail}>Crear</button>
    </div>
  );
}
