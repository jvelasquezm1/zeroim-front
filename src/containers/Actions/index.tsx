import React from "react";
import { GridApi } from "@material-ui/data-grid";

export default function Actions(props: any) {
  const editRow = () => {
    props.setSelectedRow(
      Object.assign(selectRow(props.params), { edit: true, delete: false })
    );
    props.handleOpen();
  };
  const deleteRow = () => {
    props.setSelectedRow(
      Object.assign(selectRow(props.params), { edit: false, delete: true })
    );
    props.handleOpen();
  };
  const selectRow = (params: any) => {
    const api: GridApi = params.api;
    const fields = api
      .getAllColumns()
      .map((c) => c.field)
      .filter((c) => c !== "__check__" && !!c);
    const thisRow = {} as any;

    fields.forEach((f: any) => {
      thisRow[f] = params.getValue(f);
    });

    return thisRow;
  };

  return (
    <div className="flex-container space-between">
      <button className="button-transparent" onClick={editRow}>
        <i className="fa fa-edit"></i>
      </button>
      <button className="button-transparent" onClick={deleteRow}>
        <i className="fa fa-trash red"></i>
      </button>
    </div>
  );
}
