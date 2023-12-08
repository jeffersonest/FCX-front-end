'use client';
import React, {useEffect, useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import FormGroup from "@/app/components/form-group";
import Button from "@/app/components/button";
import DefaultDatePicker from "@/app/components/date-picker";
import {TextField} from '@mui/material';
import Label from "@/app/components/label";
import {UserData, UserFormProps} from "@/app/interfaces/user-form.interface";
import {cpfValidation, emailValidation} from "@/app/utils/validations";
import DefaultSwitch from "@/app/components/switch";
import ErrorMessage from "@/app/components/error-message";

const UserForm: React.FC<UserFormProps> = ({userData, error, loading, onSubmit}) => {

    const isUpdateMode = !!userData;

    const [checked, setChecked] = useState(isUpdateMode ? userData?.status : true);

    const validationRules = {
        name: isUpdateMode ? {} : {required: "Nome é obrigatório"},
        login: isUpdateMode ? {} : {required: "Login é obrigatório"},
        password: isUpdateMode ? {} : {required: "Senha é obrigatória"},
        repeatPassword: isUpdateMode ? {} : {required: "Repetir a senha é obrigatório"},
        email: isUpdateMode ? emailValidation : {...emailValidation, required: "E-mail é obrigatório"},
        phone: isUpdateMode ? {} : {required: "Telefone é obrigatório"},
        cpf: isUpdateMode ? cpfValidation : {...cpfValidation, required: "CPF é obrigatório"},
        motherName: isUpdateMode ? {} : {required: "Nome da mãe é obrigatório"},
        birth: isUpdateMode ? {} : {required: "Data de nascimento é obrigatório"},
        status: {},
    };
    const formatDateForInput = (dateString: any) => {
        return new Date(dateString).toISOString().split('T')[0];
    };

    const {formState: {errors}, register, watch, handleSubmit, control, reset} = useForm<UserData>({
        defaultValues: {
            name: userData?.name ?? '',
            email: userData?.email ?? '',
            login: userData?.login ?? '',
            password: userData?.password ?? '',
            repeatPassword: userData?.password ?? '',
            phone: userData?.phone ?? '',
            cpf: userData?.cpf ?? '',
            birth: userData?.birth ? formatDateForInput(userData?.birth) : '',
            motherName: userData?.motherName ?? '',
            status: userData ? userData.status : true
        },
    });

    useEffect(() => {
        setChecked(userData ? userData.status : true);
    },[userData]);


    return (
        <div className="my-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
                <FormGroup label="Nome" register={register("name", validationRules.name)}
                           error={errors.name}/>
                <FormGroup label="Login" register={register("login", validationRules.login)}
                           error={errors.login}/>
                <FormGroup label="Senha" type="password"
                           register={register("password", validationRules.password)}
                           error={errors.password}/>
                <FormGroup label="Repetir Senha" type="password"
                           register={register("repeatPassword", validationRules.repeatPassword)}
                           error={errors.repeatPassword}/>
                <FormGroup label="E-mail" type="email" register={register("email", validationRules.email)}
                           error={errors.email}/>
                <FormGroup label="Telefone" register={register("phone", validationRules.phone)}
                           error={errors.phone}/>
                <FormGroup label="CPF" register={register("cpf")} error={errors.cpf}/>
                <FormGroup label="Nome da Mãe"
                           register={register("motherName", validationRules.motherName)}
                           error={errors.motherName}/>
                <div className="flex flex-col w-[150px] justify-start max-[768px]:mt-4 ">
                    <Label>Cliente ativo</Label>
                    <DefaultSwitch defaultChecked={userData?.status} {...register("status")} />
                </div>
                <FormGroup label="Data de Nascimento" type="date"
                           register={register("birth", validationRules.birth)}
                           error={errors.birth}/>
                {error !== '' && <ErrorMessage message={error}/>}
                <Button loading={loading}>Salvar</Button>
            </form>
        </div>
    );
};

export default UserForm;
