import { GridColDef } from "@material-ui/data-grid";

export interface TableProps {
  rows: any;
  columns: GridColDef[];
  pageSize: number;
}
