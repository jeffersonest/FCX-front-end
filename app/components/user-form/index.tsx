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

const UserForm: React.FC<UserFormProps> = ({userData}) => {
    const {formState: {errors}, register, handleSubmit, control, reset} = useForm({
        defaultValues: {
            name: userData?.name ?? '',
            email: userData?.email ?? '',
            login: userData?.login ?? '',
            password: userData?.password ?? '',
            phone: userData?.phone ?? '',
            cpf: userData?.cpf ?? '',
            birthDate: userData?.birthDate ?? '',
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
                phone: userData.phone,
                cpf: userData.cpf,
                birthDate: userData.birthDate,
                motherName: userData.motherName,
                status: userData.status
            });
        }
    }, [userData, reset]);

    const onSubmit = (data: any) => {
        console.log(data);
    };

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
                <FormGroup label="E-mail" type="email" register={register("email", emailValidation)}
                           error={errors.email}/>
                <FormGroup label="Telefone" register={register("phone", {required: "Telefone é obrigatório"})}
                           error={errors.phone}/>
                <FormGroup label="CPF" register={register("cpf", cpfValidation)} error={errors.cpf}/>
                <FormGroup label="Nome da Mãe"
                           register={register("motherName", {required: "Nome da mãe é obrigatório"})}
                           error={errors.motherName}/>
                <div className="flex flex-col w-[150px] justify-start max-[768px]:mt-4 ">
                        <Label>Cliente ativo</Label>
                        <DefaultSwitch defaultChecked {...register("status")} />
                </div>
                <FormGroup label="Data de Nascimento" type="date"
                           register={register("birthDate", {required: "Data de nascimento é obrigatório"})} error={errors.birthDate}/>
                <Button>Salvar</Button>
            </form>
        </div>
    );
};

export default UserForm;
