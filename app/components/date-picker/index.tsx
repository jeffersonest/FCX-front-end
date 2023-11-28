import React from 'react';
import {DatePicker, DatePickerProps} from '@mui/x-date-pickers/DatePicker';
import {TextField} from '@mui/material';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import Input from "@/app/components/input";
import {InputProps} from "@/app/interfaces/input.interface";

// Definindo os tipos de props incluindo renderInput
interface DefaultDatePickerProps extends Omit<DatePickerProps<Date>, 'renderInput'> {
    renderInput?: (params: any) => React.ReactElement;
}

const DefaultDatePicker: React.FC<InputProps> = React.forwardRef<HTMLInputElement, InputProps>(
    (props, ref) => {
        return (
            <div className="flex items-center">
                <div className="relative">
                    <Input name="end" id="datetime" type="date"
                           {...props}
                           ref={ref}
                           placeholder="Selecione a data"></Input>
                </div>
            </div>
        );
    }
);

DefaultDatePicker.displayName = 'DefaultDatePicker';

export default DefaultDatePicker;
