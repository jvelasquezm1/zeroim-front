import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { TableProps } from "./types";


export default function Table(props: TableProps) {
  return (
    <DataGrid
      rows={props.rows}
      columns={props.columns}
      pageSize={props.pageSize}
      checkboxSelection
    />
  );
}
