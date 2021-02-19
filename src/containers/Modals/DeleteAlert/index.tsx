import React from "react";
import { DeleteAlertProps } from "./types";

export default function DeleteAlert(props: DeleteAlertProps) {
  const renderEditForm = () => {
    switch (props.type) {
      case "stock": {
        console.log(props.selectedRow);
        return <div>¿Seguro?</div>;
      }
      case "client": {
        console.log(props.selectedRow);
        return <div>¿Seguro?</div>;
      }
      case "bill": {
        console.log(props.selectedRow);
        return <div>¿Seguro?</div>;
      }
      case "billDetail": {
        console.log(props.selectedRow);
        return <div>¿Seguro?</div>;
      }
      default: {
        console.log(props.selectedRow);
        return <div>¿Seguro?</div>;
      }
    }
  };
  return renderEditForm();
}
