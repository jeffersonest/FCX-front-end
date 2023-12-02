import React from 'react';
import ErrorMessage from "@/app/components/error-message";
import InputMask from 'react-input-mask';
import Input from "@/app/components/input";
import Label from "@/app/components/label";
import {FormGroupProps} from "@/app/interfaces/form-group.interface";
import DefaultInputMask from "@/app/components/input-mask";

const FormGroup: React.FC<FormGroupProps> = ({ label, mask, error, register, id, ...inputProps }) => {
  const { ref, ...rest } = register;

  return (
    <div className="flex w-[100%] flex-col">
      <Label htmlFor={id}>{label}</Label>
        {
            mask !== '' ?
                <DefaultInputMask ref={ref} id={id} {...rest} {...inputProps} mask={mask ?? ''} />
                :
                <Input ref={ref} id={id} {...rest} {...inputProps} />
        }
      {error && error.message && <ErrorMessage message={error.message} />}
    </div>
  );
};

export default FormGroup;
