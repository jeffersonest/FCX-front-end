import React from 'react';
import {InputProps} from "@/app/interfaces/input.interface";
import InputMask from "react-input-mask";

// Input
const DefaultInputMask = React.forwardRef<HTMLInputElement, InputProps>(
  ({ value, mask, onChange, ...rest }, ref) => {
    return (
      <InputMask
        inputRef={ref}
        mask={mask ?? ''}
        className="text-[#171a24] p-2 rounded border border-[#eaedef] h-[40px]"
        value={value}
        onChange={onChange}
        {...rest}
      />
    );
  }
);


DefaultInputMask.displayName = 'InputMask';
export default DefaultInputMask;
