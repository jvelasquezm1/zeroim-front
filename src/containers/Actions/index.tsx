import React from "react";

export default function Actions(props: any) {
  const editRow = () => {
    props.setSelectedRow(
      Object.assign({ ...props.params.row }, { edit: true, delete: false })
    );
    props.handleOpen();
  };
  const deleteRow = () => {
    props.setSelectedRow(
      Object.assign({ ...props.params.row }, { edit: false, delete: true })
    );
    props.handleOpen();
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
