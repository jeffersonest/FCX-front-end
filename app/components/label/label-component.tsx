import React from 'react';
import {LabelProps} from "@/app/interfaces/label.interface";

const Label: React.FC<LabelProps> = ({ children, ...rest }) => {
  return (
    <label className="text-[#a7b1bb]" {...rest}>
      {children}
    </label>
  );
};

export default Label;