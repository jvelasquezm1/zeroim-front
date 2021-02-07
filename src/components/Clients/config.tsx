import * as React from "react";
import { ColDef, CellParams, GridApi } from "@material-ui/data-grid";
import "font-awesome/css/font-awesome.min.css";
import "./Clients.scss";

export let rowSelected = {} as any;

export const columns: ColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "idType", headerName: "Tipo ID", width: 170 },
  { field: "firstName", headerName: "Nombre", width: 170 },
  { field: "lastName", headerName: "Apellido", width: 170 },
  { field: "address", headerName: "Direccion", width: 170 },
  { field: "phone", headerName: "Telefono", width: 170 },
  {
    field: "",
    headerName: "Action",
    disableClickEventBubbling: true,
    renderCell: (params: CellParams) => {
      const selectRow = () => {
        const api: GridApi = params.api;
        const fields = api
          .getAllColumns()
          .map((c) => c.field)
          .filter((c) => c !== "__check__" && !!c);
        const thisRow = {} as any;

        fields.forEach((f: any) => {
          thisRow[f] = params.getValue(f);
        });

        rowSelected = thisRow;
        return thisRow;
      };

      return (
        <div className="flex-container space-between">
          <button className="button-transparent" onClick={selectRow}>
            <i className="fa fa-edit"></i>
          </button>
          <button className="button-transparent" onClick={selectRow}>
            <i className="fa fa-trash red"></i>
          </button>
        </div>
      );
    },
  },
];

export const mockedRows = [
  {
    id: 1,
    idType: "nit",
    address: "Cra 43 No 21-32",
    phone: "31243214",
    lastName: "Snow",
    firstName: "Jon",
  },
  {
    id: 2,
    idType: "cc",
    address: "Cra 43 No 21-32",
    phone: "31243214",
    lastName: "Lannister",
    firstName: "Cersei",
  },
  {
    id: 3,
    idType: "cc",
    address: "Cra 43 No 21-32",
    phone: "31243214",
    lastName: "Lannister",
    firstName: "Jaime",
  },
  {
    id: 4,
    idType: "cc",
    address: "Cra 43 No 21-32",
    phone: "31243214",
    lastName: "Stark",
    firstName: "Arya",
  },
  {
    id: 5,
    idType: "cc",
    address: "Cra 43 No 21-32",
    phone: "31243214",
    lastName: "Targaryen",
    firstName: "Daenerys",
  },
  {
    id: 6,
    idType: "cc",
    address: "Cra 43 No 21-32",
    phone: "31243214",
    lastName: "Melisandre",
    firstName: "Daenerys",
  },
  {
    id: 7,
    idType: "cc",
    address: "Cra 43 No 21-32",
    phone: "31243214",
    lastName: "Clifford",
    firstName: "Ferrara",
  },
  {
    id: 8,
    idType: "cc",
    address: "Cra 43 No 21-32",
    phone: "31243214",
    lastName: "Frances",
    firstName: "Rossini",
  },
  {
    id: 9,
    idType: "cc",
    address: "Cra 43 No 21-32",
    phone: "31243214",
    lastName: "Roxie",
    firstName: "Harvey",
  },
  {
    id: 10,
    idType: "cc",
    address: "Cra 43 No 21-32",
    phone: "31243214",
    lastName: "Roxie",
    firstName: "Harvey",
  },
];
