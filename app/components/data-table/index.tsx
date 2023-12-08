import {
    DataGrid,
    GridRowsProp,
    GridColDef,
    gridFilteredSortedRowIdsSelector,
    selectedGridRowsSelector, GridRowId, GridPrintGetRowsToExportParams
} from '@mui/x-data-grid';
import {pink} from "@mui/material/colors";
import DefaultCheckbox from "@/app/components/check-box";
import {DataTableProps} from "@/app/interfaces/data-table.interface";
import Label from "@/app/components/label";
import CustomToolbar from "@/app/components/table-toobar";

const getSelectedRowsToExport = ({
  apiRef,
}: GridPrintGetRowsToExportParams): GridRowId[] => {
  const selectedRowIds = selectedGridRowsSelector(apiRef);
  if (selectedRowIds.size > 0) {
    return Array.from(selectedRowIds.keys());
  }

  return gridFilteredSortedRowIdsSelector(apiRef);
};
const DataTable: React.FC<DataTableProps> = ({rows, columns, onRowSelectionModelChange}) => {
    return (
        <div style={{width: '100%'}}>
            <DataGrid rows={rows} columns={columns} initialState={{pagination: {paginationModel: {pageSize: 10}}}}
                      slots={{
                          noRowsOverlay: () => <div
                              className="p-20 flex w-[100%] h-[150px] items-center justify-center"><Label>Sem
                              dados.</Label></div>,
                          baseCheckbox: DefaultCheckbox,
                          toolbar: CustomToolbar,
                      }}

                      slotProps={{
                          toolbar: {printOptions: {getRowsToExport: getSelectedRowsToExport}},
                      }}

                      pageSizeOptions={[5, 10]}
                      checkboxSelection
                      disableColumnSelector
                      disableColumnFilter
                      disableColumnMenu
                      autoHeight
                      onRowSelectionModelChange={onRowSelectionModelChange}
                      pagination
                      hideFooterSelectedRowCount
            />
        </div>
    );
}

export default DataTable;