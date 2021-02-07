import * as React from "react";
import Table from "src/containers/Table";
import { rows, columns } from "./config";

export default function Client() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <Table rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}
