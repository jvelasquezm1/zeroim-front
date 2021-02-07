import { RowsProp, ColDef } from "@material-ui/data-grid";

export interface TableProps {
  rows: RowsProp;
  columns: ColDef[];
  pageSize: number;
}
