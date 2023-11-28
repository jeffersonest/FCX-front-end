import {DataGrid, GridRowsProp, GridColDef} from '@mui/x-data-grid';
import {pink} from "@mui/material/colors";
import DefaultCheckbox from "@/app/components/check-box";

const rows: GridRowsProp = [
    {id: 1, col1: 'aaaa', col2: 'World'},
    {id: 2, col1: 'bbbbb', col2: 'is Awesome'},
    {id: 3, col1: 'ccccc', col2: 'is Amazing'},
    {id: 4, col1: 'ddddd', col2: 'World'},
    {id: 5, col1: 'eeeee', col2: 'is Awesome'},
    {id: 6, col1: 'fffffff', col2: 'is Amazing'},
    {id: 7, col1: 'gggggggg', col2: 'World'},
    {id: 8, col1: 'hhhhhhhhh', col2: 'is Awesome'},
    {id: 9, col1: 'iiiiiii', col2: 'is Amazing'},
    {id: 10, col1: 'jjjjjjjj', col2: 'World'},
];

const columns: GridColDef[] = [
    {field: 'col1', headerName: 'Column 1', width: 150},
    {field: 'col2', headerName: 'Column 2', width: 150},
    {field: 'col3', headerName: 'Column 3', width: 150},
];

export default function DataTable() {
    return (
        <div className="w-[100%] h-[100%] z-0">
            <DataGrid rows={rows} columns={columns} initialState={{pagination: {paginationModel: {pageSize: 10}}}}
                      slots={{
                          noRowsOverlay: () => <div>No rows 👌</div>,
                          baseCheckbox: DefaultCheckbox,
                      }}
                      checkboxSelection
                      disableColumnSelector
                      disableColumnFilter

            />
        </div>
    );
}