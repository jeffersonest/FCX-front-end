import {GridToolbarContainer, GridToolbarExport} from "@mui/x-data-grid";
import Button from "@/app/components/button";


const CustomToolbar = () => {
  return (
    <GridToolbarContainer className="flex items-center justify-end h-[70px]">
      <GridToolbarExport slot={{
        button: Button,
      }} />
    </GridToolbarContainer>
  );
}

export default CustomToolbar;
