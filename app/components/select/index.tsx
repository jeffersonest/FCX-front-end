import React from 'react';
import SelectProps from "@/app/interfaces/select.interface";

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ id, options, value, onChange, ...rest }, ref) => {
    return (
      <select
        ref={ref}
        id={id}
        value={value}
        onChange={onChange}
        className="font-inter bg-white border border-[#eaedef] h-[40px] text-[#171a24] p-2 rounded block w-full"
        {...rest}
      >
        <option value="none">Selecione</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

Select.displayName = 'Select';
export default Select;
