export interface TableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
  onRowSelect?: (selectedRows: T[]) => void; // Callback para lidar com linhas selecionadas
}

export interface Column<T extends object> {
  Header: string;
  accessor: keyof T;
}
