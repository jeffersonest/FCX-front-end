'use client';
import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import Button from "@/app/components/button/button-component";
import FormGroup from "@/app/components/form-group/form-group-component";
import ErrorMessage from "@/app/components/error-message/error-message-component";
// Outros imports

const AuthPage: React.FC = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [generalError, setGeneralError] = useState("");
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

    useEffect(() => {
        console.log(errors)
    }, [errors])

    return (
        <div className="shadow bg-white p-5 rounded max-w-[400px] w-[100%] h-[400px] flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <span className="text-[#a7b1bb] text-[12px] mt-1">Esqueceu a sua senha? </span><span
                className="cursor-pointer text-[#ff1553] text-[12px] mt-1">Recuperar</span>
            </form>
        </div>
    );
}

export default AuthPage;
