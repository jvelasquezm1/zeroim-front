import React from "react";
import { DeleteAlertProps } from "./types";

export default function DeleteAlert(props: DeleteAlertProps) {
  const renderEditForm = () => {
    switch (props.type) {
      case "stock": {
        return (
          <div>Seguro quiere borrar el producto {props.selectedRow.name}?</div>
        );
      }
      case "clients": {
        return (
          <div>¿Seguro quiere borrar el cliente {props.selectedRow.name}?</div>
        );
      }
      case "bill": {
        return (
          <div>
            ¿Seguro quiere borrar la factura {props.selectedRow.billNumber}?
          </div>
        );
      }
      case "billDetail": {
        return (
          <div>
            ¿Seguro quiere borrar el producto {props.selectedRow.productName}{" "}
            del detalle de la factura?
          </div>
        );
      }
      default: {
        return <div>¿Seguro?</div>;
      }
    }
  };
  return renderEditForm();
}
