import React from "react";

export default function CreateStock() {
  const [id, setId] = React.useState("");
  const [product, setProduct] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [price, setPrice] = React.useState("");

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

  const addStock = () => {
    console.log(id, product, quantity);
  };

  return (
    <div className="create-container">
      <form>
        <h2>Crear producto en inventario:</h2>
        <h4>ID</h4>
        <input
          className="form-input"
          type="text"
          name="id"
          defaultValue={id}
          onChange={(e) => handleId(e)}
          placeholder="ID"
        />
        <h4>Nombre de producto</h4>
        <input
          className="form-input"
          type="text"
          name="product"
          defaultValue={product}
          onChange={(e) => handleProduct(e)}
          placeholder="Producto"
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
        <h4>Precio</h4>
        <input
          className="form-input"
          type="text"
          name="price"
          defaultValue={price}
          onChange={(e) => handlePrice(e)}
          placeholder="Precio"
        />
      </form>
      <button onClick={addStock}>Crear</button>
    </div>
  );
}
