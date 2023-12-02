import React, {useEffect} from "react";
import {ButtonProps} from "@/app/interfaces/button.interface";
import {CircleNotch} from "@phosphor-icons/react";

const Button: React.FC<ButtonProps> = ({ children, disabled, loading, icon, onlyIcon, justify, ...rest }) => {
  const [ _disabled, setDisabled ] = React.useState(false);
  useEffect(() => {
    setDisabled(disabled ?? false);
  }, [disabled]);
  return (
    <button disabled={_disabled}
      className={`bg-[#ff1654] shadow hover:bg-[#ab153d] w-[100%] p-2 min-h-[40px] px-4 rounded text-white flex items-center justify-${justify ?? 'center'} cursor-pointer ${disabled ? 'bg-gray-400 hover:bg-gray-300 cursor-not-allowed' : ''}`}
      {...rest}
    >
      {icon && <span className={`${onlyIcon ? '' : 'mr-2'} ${loading ? 'hidden' : ''}` }>{icon}</span>}
      {loading && <CircleNotch className="animate-spin mr-2" />}
      {onlyIcon ? '' : children}
    </button>
  );
};

export default Button;
