import { UseFormRegisterReturn } from 'react-hook-form';
import {InputProps} from "@/app/interfaces/input.interface";

export interface FormGroupProps extends Omit<InputProps, 'ref'> {
  label: string;
  error?: {
    message?: string;
  };
  register: UseFormRegisterReturn;
}
