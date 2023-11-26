import React from "react";
import {ErrorMessageProps} from "@/app/interfaces/error-message.interface";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <span className="text-[#ff1553] text-[12px] mt-1">
      {message}
    </span>
  );
};

export default ErrorMessage;