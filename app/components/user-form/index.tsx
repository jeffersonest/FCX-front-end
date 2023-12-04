'use client';
import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import FormGroup from "@/app/components/form-group";
import Button from "@/app/components/button";
import DefaultDatePicker from "@/app/components/date-picker";
import {TextField} from '@mui/material';
import Label from "@/app/components/label";
import {UserFormProps} from "@/app/interfaces/user-form.interface";
import {cpfValidation, emailValidation} from "@/app/utils/validations";
import DefaultSwitch from "@/app/components/switch";
import ErrorMessage from "@/app/components/error-message";

const UserForm: React.FC<UserFormProps> = ({userData, error, loading, onSubmit}) => {
    const {formState: {errors}, register, handleSubmit, control, reset} = useForm({
        defaultValues: {
            name: userData?.name ?? '',
            email: userData?.email ?? '',
            login: userData?.login ?? '',
            password: userData?.password ?? '',
            repeatPassword: userData?.password ?? '',
            phone: userData?.phone ?? '',
            cpf: userData?.cpf ?? '',
            birth: userData?.birth ?? '',
            motherName: userData?.motherName ?? '',
            status: userData?.status ?? true
        },
    });

    React.useEffect(() => {
        if (userData) {
            reset({
                name: userData.name,
                email: userData.email,
                login: userData.login,
                password: userData.password,
                repeatPassword: userData.password,
                phone: userData.phone,
                cpf: userData.cpf,
                birth: userData.birth,
                motherName: userData.motherName,
                status: userData.status
            });
        }
    }, [userData, reset]);

    useEffect(() => {
        console.log(errors)
    }, [errors]);

    return (
        <div className="my-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
                <FormGroup label="Nome" register={register("name", {required: "Nome é obrigatório"})}
                           error={errors.name}/>
                <FormGroup label="Login" register={register("login", {required: "Login é obrigatório"})}
                           error={errors.login}/>
                <FormGroup label="Senha" type="password"
                           register={register("password", {required: "Senha é obrigatória"})}
                           error={errors.password}/>
                <FormGroup label="Repetir Senha" type="password"
                           register={register("repeatPassword", {required: "Repetir a senha é obrigatório"})}
                           error={errors.repeatPassword}/>
                <FormGroup label="E-mail" type="email" register={register("email", emailValidation)}
                           error={errors.email}/>
                <FormGroup mask={"(99) 9 9999-9999"} label="Telefone" register={register("phone", {required: "Telefone é obrigatório"})}
                           error={errors.phone}/>
                <FormGroup mask={"999.999.999-99"} label="CPF" register={register("cpf", cpfValidation)} error={errors.cpf}/>
                <FormGroup label="Nome da Mãe"
                           register={register("motherName", {required: "Nome da mãe é obrigatório"})}
                           error={errors.motherName}/>
                <div className="flex flex-col w-[150px] justify-start max-[768px]:mt-4 ">
                    <Label>Cliente ativo</Label>
                    <DefaultSwitch defaultChecked {...register("status")} />
                </div>
                <FormGroup label="Data de Nascimento" type="date"
                           register={register("birth", {required: "Data de nascimento é obrigatório"})}
                           error={errors.birth}/>
                 {error !== '' && <ErrorMessage message={error}/>}
                <Button loading={loading}>Salvar</Button>
            </form>
        </div>
    );
};

export default UserForm;
