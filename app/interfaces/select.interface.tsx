import {UseFormRegisterReturn} from "react-hook-form";

export interface SelectOption {
  label: string;
  value: string;
}
export default interface SelectProps {
  id: string;
  defaultValue: string;
  options: SelectOption[];
  register: UseFormRegisterReturn;
}