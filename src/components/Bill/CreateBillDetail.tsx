import React from "react";
import { Input, TextField } from "@material-ui/core";
import SuccessAlert from "src/containers/Modals/SuccessAlert";
import { connect, useDispatch, useSelector } from "react-redux";
import * as stockActions from "src/store/actions/stock.actions";
import { Autocomplete } from "@material-ui/lab";
import isEmpty from "lodash/isEmpty";

function CreateBillDetail(props: any) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(stockActions.fetchStock());
    if (props.stock.stock) {
      setStock(props.stock.stock);
    }
  }, []);
  const stockProps = useSelector((state: any) => state.stock.stock);
  const [unitValue, setUnitValue] = React.useState(
    props.selectedRow ? props.selectedRow.unitValue : 0
  );
  const [productId, setProductId] = React.useState(
    props.selectedRow ? props.selectedRow.productId : ""
  );
  const [stock, setStock] = React.useState([]);
  const [quantity, setQuantity] = React.useState(
    props.selectedRow && props.selectedRow.quantity
      ? props.selectedRow.quantity
      : 1
  );
  const [totalValue, setTotalValue] = React.useState(
    props.selectedRow ? props.selectedRow.totalValue : 0
  );
  const [openModal, setOpenModal] = React.useState(false);
  const [name, setName] = React.useState("");

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleProductId = (event: any, values: any) => {
    console.log(values);
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

  return (
    <div className="create-container">
      <form>
        {(!props.edit || props.billDetail) && <h2>Crear detalle de factura</h2>}
        <h4>Producto</h4>
        <Autocomplete
          id="stock"
          options={isEmpty(stock) ? stockProps : stock}
          getOptionLabel={(option: any) => option.name || ""}
          defaultValue={stock}
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
      <button className="create-button" onClick={addBillDetail}>
        {props.edit && !props.billDetail ? "Editar" : "Crear"}
      </button>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  stock: state.stock,
});

export default connect(mapStateToProps)(CreateBillDetail);
