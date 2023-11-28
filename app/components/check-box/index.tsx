import { Checkbox } from "@mui/material";
import React, {ForwardedRef} from "react";
import Input from "@/app/components/input";

const DefaultCheckbox = React.forwardRef<HTMLButtonElement, any>((rest, ref: ForwardedRef<HTMLButtonElement>) => (
    <Checkbox
        ref={ref}
        {...rest}
        sx={{
            color: '#ff1654',
            '&.Mui-checked': {
                color: '#ff1654',
            },
        }}
    />
));

DefaultCheckbox.displayName = 'Checkbox';
export default DefaultCheckbox;