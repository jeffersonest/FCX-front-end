import React from "react";
import {ButtonProps} from "@/app/interfaces/button.interface";

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      className="bg-[#ff1654] w-[100%] mt-4 p-2 rounded text-white"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
