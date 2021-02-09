import React from "react";
import { EditFormProps } from "./types";
import CreateStock from "src/components/Stock/CreateStock";
import CreateClient from "src/components/Clients/CreateClient";
import CreateBill from "src/components/Bill/CreateBill";
import CreateBillDetail from "src/components/Bill/CreateBillDetail";

export default function EditForm(props: EditFormProps) {
  const renderEditForm = () => {
    switch (props.type) {
      case "stock":
        return <CreateStock selectedRow={props.selectedRow} />;
      case "client":
        return <CreateClient selectedRow={props.selectedRow} />;
      case "bill":
        return <CreateBill selectedRow={props.selectedRow} />;
      case "billDetail":
        return <CreateBillDetail selectedRow={props.selectedRow} />;
      default:
        return <CreateClient selectedRow={props.selectedRow} />;
    }
  };
  return renderEditForm();
}
