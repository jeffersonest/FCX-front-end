'use client';
import React from "react";
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {ProvidersProps} from "@/app/interfaces/providers.interface";
import GuardProvider from "@/app/providers/guard.provider";

const Providers: React.FC<ProvidersProps> = ({children}) => {
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <GuardProvider>
                    {children}
                </GuardProvider>
            </LocalizationProvider>
        </>
    )
};

export default Providers;