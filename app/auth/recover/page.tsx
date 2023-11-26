'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from "@/app/components/button";
import FormGroup from "@/app/components/form-group";
import ErrorMessage from "@/app/components/error-message";
import {useRouter} from "next/navigation";


// Outros imports

const RecoveryPage: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [generalError, setGeneralError] = useState("");
    const router = useRouter();

    const onSubmit = (data: any) => {
        console.log(data);
        // Aqui você pode adicionar a lógica de recuperação de senha
    };

    const handleLoginClick = () => {
        router.push('/auth');
    };


    return (
        <div className="shadow bg-white p-5 rounded max-w-[400px] w-[100%] h-[400px] flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup
                    label="Email"
                    type="email"
                    id="email"
                    register={register("email", { required: "Email é obrigatório", pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: "Formato de email inválido" } })}
                    error={errors.email}
                />
                <FormGroup
                    label="CPF"
                    id="cpf"
                    register={register("cpf", { required: "CPF é obrigatório" /* Aqui pode adicionar validações adicionais para CPF */ })}
                    error={errors.cpf}
                />
                <FormGroup
                    label="Data de Nascimento"
                    type="date"
                    id="birthDate"
                    register={register("birthDate", { required: "Data de nascimento é obrigatória" })}
                    error={errors.birthDate}
                />
                {generalError && <ErrorMessage message={generalError}/>}
                <Button type="submit">Recuperar Senha</Button>
                <span className="text-[#a7b1bb] text-[12px] mt-1">Fazer </span><span
                className="cursor-pointer text-[#ff1553] text-[12px] mt-1"  onClick={handleLoginClick}>login</span>
            </form>
        </div>
    );
}

export default RecoveryPage;
