import React from "react";

export default function CreateClient(props: any) {
  const [idType, setIdType] = React.useState(
    props.selectedRow ? props.selectedRow.idType : "0"
  );
  const [id, setId] = React.useState(
    props.selectedRow ? props.selectedRow.id : ""
  );
  const [name, setName] = React.useState(
    props.selectedRow ? props.selectedRow.name : ""
  );
  const [phone, setPhone] = React.useState(
    props.selectedRow ? props.selectedRow.phone : ""
  );
  const [address, setAddress] = React.useState(
    props.selectedRow ? props.selectedRow.address : ""
  );

  const handleIdType = (event: any) => {
    setIdType(event.target.value);
  };
  const handleId = (event: any) => {
    setId(event.target.value);
  };
  const handleName = (event: any) => {
    setName(event.target.value);
  };
  const handlePhone = (event: any) => {
    setPhone(event.target.value);
  };
  const handleAddress = (event: any) => {
    setAddress(event.target.value);
  };

  const addClient = () => {
    console.log(idType, id, name, phone, address);
  };

  return (
    <div className="create-container">
      <form>
        <h2>Crear cliente:</h2>
        <h4>Tipo de ID</h4>
        <select
          className="form-input form-select"
          name="select"
          id="select2"
          value={idType}
          onChange={(e) => handleIdType(e)}
        >
          <option value="0">CC</option>
          <option value="1">NIT</option>
        </select>
        <h4>ID</h4>
        <input
          className="form-input"
          type="text"
          name="id"
          defaultValue={id}
          onChange={(e) => handleId(e)}
          placeholder="ID"
        />
        <h4>Nombre</h4>
        <input
          className="form-input"
          type="text"
          name="name"
          defaultValue={name}
          onChange={(e) => handleName(e)}
          placeholder="Nombre"
        />
        <h4>Direccion</h4>
        <input
          className="form-input"
          type="text"
          name="address"
          defaultValue={address}
          onChange={(e) => handleAddress(e)}
          placeholder="Direccion"
        />
        <h4>Telefono</h4>
        <input
          className="form-input"
          type="number"
          name="phone"
          defaultValue={phone}
          onChange={(e) => handlePhone(e)}
          placeholder="Telefono"
        />
      </form>
      <button onClick={addClient}>Crear</button>
    </div>
  );
}
