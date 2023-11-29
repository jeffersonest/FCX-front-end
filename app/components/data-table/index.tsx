import {DataGrid, GridRowsProp, GridColDef} from '@mui/x-data-grid';
import {pink} from "@mui/material/colors";
import DefaultCheckbox from "@/app/components/check-box";
import {DataTableProps} from "@/app/interfaces/data-table.interface";

const DataTable: React.FC<DataTableProps> = ({rows, columns, onRowSelectionModelChange}) => {
    return (
        <div className="w-[100%] z-0">
            <DataGrid rows={rows} columns={columns} initialState={{pagination: {paginationModel: {pageSize: 10}}}}
                      slots={{
                          noRowsOverlay: () => <div>No rows 👌</div>,
                          baseCheckbox: DefaultCheckbox,
                      }}
                      pageSizeOptions={[5, 10]}
                      checkboxSelection
                      disableColumnSelector
                      disableColumnFilter
                      disableColumnMenu
                      autoHeight
                      onRowSelectionModelChange={onRowSelectionModelChange}
            />
        </div>
    );
}

export default DataTable;