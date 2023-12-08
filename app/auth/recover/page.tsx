'use client';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import Button from "@/app/components/button";
import FormGroup from "@/app/components/form-group";
import ErrorMessage from "@/app/components/error-message";
import {useRouter} from "next/navigation";
import {RecoverAccessDto} from "@/app/interfaces/dto/recover-access.dto";
import AuthService from "@/app/services/auth.service";
import Label from "@/app/components/label";
import {Check} from "@phosphor-icons/react";

const RecoveryPage: React.FC = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<RecoverAccessDto>();
    const [generalError, setGeneralError] = useState("");
    const [success, setSuccess] = useState(false);
    const router = useRouter();
    const authService = new AuthService();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: RecoverAccessDto) => {
        setLoading(true);
        const response = await authService.recoverPassword(data);
        if (!response) {
            setGeneralError("Erro ao recuperar senha");
        } else {
            setSuccess(true);
        }
        setLoading(false);
    };

    const handleLoginClick = () => {
        router.push('/auth');
    };


    return (
        <div className="shadow bg-white p-5 rounded max-w-[400px] w-[100%] h-[400px] flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center space-y-4">
                <FormGroup
                    label="Email"
                    type="email"
                    id="email"
                    register={register("email", {
                        required: "Email é obrigatório",
                        pattern: {value: /^[^@]+@[^@]+\.[^@]+$/, message: "Formato de email inválido"}
                    })}
                    error={errors.email}
                />
                <FormGroup
                    label="CPF"
                    id="cpf"
                    register={register("cpf", {required: "CPF é obrigatório" /* Aqui pode adicionar validações adicionais para CPF */})}
                    error={errors.cpf}
                    mask={"999.999.999-99"}
                />
                {generalError && <ErrorMessage message={generalError}/>}
                {success && <Label>Email enviado com sucesso! </Label>}
                <Button type="submit">Recuperar Senha</Button>
                <div className="flexitems-center justify-center">
                    <span className="text-[#a7b1bb] text-[12px] mt-1">Fazer </span><span
                    className="cursor-pointer text-[#ff1553] text-[12px] mt-1" onClick={handleLoginClick}>login</span>
                </div>
            </form>
        </div>
    );
}

export default RecoveryPage;
