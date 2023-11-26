import React from "react";
import {ButtonProps} from "@/app/interfaces/button.interface";

const Button: React.FC<ButtonProps> = ({ children, icon, onlyIcon, justify, ...rest }) => {
  return (
    <button
      className={`bg-[#ff1654] shadow hover:bg-[#ab153d] w-[100%] mt-5 p-2 min-h-[40px] px-4 rounded text-white flex items-center justify-${justify ?? 'center'} cursor-pointer`}
      {...rest}
    >
      {icon && <span className={onlyIcon ? `` : 'mr-2'}>{icon}</span>}
      {onlyIcon ? '' : children}
    </button>
  );
};

export default Button;
