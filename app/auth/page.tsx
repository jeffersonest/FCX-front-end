'use client';
import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import Button from "@/app/components/button";
import FormGroup from "@/app/components/form-group";
import ErrorMessage from "@/app/components/error-message";
import {useRouter} from "next/navigation";
// Outros imports

const AuthPage: React.FC = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [generalError, setGeneralError] = useState("");
    const router = useRouter();

    const onSubmit = (data: any) => {

        console.log(data)
        // Substitua por sua lógica de autenticação
        const userIsValid = true;


        if (!userIsValid) {
            setGeneralError("Usuário ou senha inválidos.");
        } else {
            console.log("Usuário autenticado:", data);
            // Prossiga com a autenticação
        }
    };

    const handleRecoverClick = () => {
        router.push('/auth/recover');
    };

    useEffect(() => {
        console.log(errors)
    }, [errors])

    return (
        <div className=" shadow bg-white p-5 rounded max-w-[400px] w-[100%] h-[400px] flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center space-y-4">
                <FormGroup
                    label="Email"
                    id="email"
                    register={register("email", {required: "Email é obrigatório"})}
                    error={errors.email}
                />
                <FormGroup
                    label="Password"
                    type="password"
                    id="password"
                    register={register("password", {required: "Senha é obrigatória"})}
                    error={errors.password}
                />
                {generalError && <ErrorMessage message={generalError}/>}
                <Button type="submit">Login</Button>
                <div className="flex flex-col items-center justify-center space-y-[-5px]">
                    <span className="text-[#a7b1bb] text-[12px] mt-1">Esqueceu a sua senha? </span>
                    <span className="cursor-pointer text-[#ff1553] text-[12px] mt-1"
                    onClick={handleRecoverClick}>Recuperar</span>
                </div>
            </form>
        </div>
    );
}

export default AuthPage;
