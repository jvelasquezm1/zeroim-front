import { ColDef } from "@material-ui/data-grid";

export const columns: ColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "idType", headerName: "Tipo ID", width: 200 },
  { field: "firstName", headerName: "Nombre", width: 200 },
  { field: "lastName", headerName: "Apellido", width: 200 },
  { field: "address", headerName: "Direccion", width: 200 },
  { field: "phone", headerName: "Telefono", width: 200 },
];

export const mockedRows = [
  { id: 1, idType: "nit", address: "Cra 43 No 21-32", phone: "31243214", lastName: "Snow", firstName: "Jon" },
  { id: 2, idType: "cc", address: "Cra 43 No 21-32", phone: "31243214", lastName: "Lannister", firstName: "Cersei" },
  { id: 3, idType: "cc", address: "Cra 43 No 21-32", phone: "31243214", lastName: "Lannister", firstName: "Jaime" },
  { id: 4, idType: "cc", address: "Cra 43 No 21-32", phone: "31243214", lastName: "Stark", firstName: "Arya" },
  { id: 5, idType: "cc", address: "Cra 43 No 21-32", phone: "31243214", lastName: "Targaryen", firstName: "Daenerys" },
  { id: 6, idType: "cc", address: "Cra 43 No 21-32", phone: "31243214", lastName: "Melisandre", firstName: "Daenerys" },
  { id: 7, idType: "cc", address: "Cra 43 No 21-32", phone: "31243214", lastName: "Clifford", firstName: "Ferrara" },
  { id: 8, idType: "cc", address: "Cra 43 No 21-32", phone: "31243214", lastName: "Frances", firstName: "Rossini" },
  { id: 9, idType: "cc", address: "Cra 43 No 21-32", phone: "31243214", lastName: "Roxie", firstName: "Harvey" },
];