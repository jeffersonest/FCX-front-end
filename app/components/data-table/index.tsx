import {DataGrid, GridRowsProp, GridColDef} from '@mui/x-data-grid';
import {pink} from "@mui/material/colors";
import DefaultCheckbox from "@/app/components/check-box";
import {DataTableProps} from "@/app/interfaces/data-table.interface";
import Label from "@/app/components/label";

const DataTable: React.FC<DataTableProps> = ({rows, columns, onRowSelectionModelChange}) => {
    return (

            <DataGrid rows={rows} columns={columns} initialState={{pagination: {paginationModel: {pageSize: 10}}}}
                      slots={{
                          noRowsOverlay: () => <div className="p-20 flex w-[100%] items-center justify-center"><Label>No rows 👌</Label></div>,
                          baseCheckbox: DefaultCheckbox,
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

    );
}

export default DataTable;