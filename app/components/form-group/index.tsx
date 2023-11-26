import React from 'react';
import ErrorMessage from "@/app/components/error-message";
import Input from "@/app/components/input";
import Label from "@/app/components/label";
import {FormGroupProps} from "@/app/interfaces/form-group.interface";

const FormGroup: React.FC<FormGroupProps> = ({ label, error, register, id, ...inputProps }) => {
  const { ref, ...rest } = register;

  return (
    <div className="flex w-[100%] flex-col">
      <Label htmlFor={id}>{label}</Label>
      <Input ref={ref} id={id} {...rest} {...inputProps} />
      {error && error.message && <ErrorMessage message={error.message} />}
    </div>
  );
};

export default FormGroup;
