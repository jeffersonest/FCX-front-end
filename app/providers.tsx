'use client';
import React from "react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {ProvidersProps} from "@/app/interfaces/providers.interface";

const Providers:React.FC<ProvidersProps> = ({children}) => {
    return(
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                {children}
            </LocalizationProvider>
        </>
    )
};

export default Providers;