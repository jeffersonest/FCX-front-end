import {GridColDef, GridRowsProp} from "@mui/x-data-grid";

export interface DataTableProps {
  rows: GridRowsProp;
  columns: GridColDef[];
  onRowSelectionModelChange?: (e: any) => void;
}
