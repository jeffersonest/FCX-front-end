import React from 'react';
import {InputProps} from "@/app/interfaces/input.interface";

// Input
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ value, onChange, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className="text-[#171a24] p-2 rounded border border-[#eaedef] h-[40px]"
        value={value}
        onChange={onChange}
        {...rest}
      />
    );
  }
);


Input.displayName = 'Input';
export default Input;
