'use client';
import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import Button from "@/app/components/button";
import FormGroup from "@/app/components/form-group";
import ErrorMessage from "@/app/components/error-message";
import {useRouter} from "next/navigation";
import AuthService from "@/app/services/auth.service";
import {useAuthStore} from "@/app/store/auth-store";
import {useUserStore} from "@/app/store/user.store";
import {LoginFormDto} from "@/app/interfaces/dto/login-form.dto";
// Outros imports

const AuthPage: React.FC = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<LoginFormDto>();
    const [generalError, setGeneralError] = useState("");
    const router = useRouter();
    const authService = new AuthService();
    const { setAccessToken, accessToken } = useAuthStore();
    const { setUserData } = useUserStore();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const validateAccessToken = async () => {
            const isValid =await authService.validateToken(accessToken);

                if (isValid) {
                    router.push('/dashboard');
                }
            }

        validateAccessToken();
    });

    const onSubmit = async (data: LoginFormDto): Promise<any> => {
        setLoading(true);
        const response = await authService.login(data);
        setLoading(false);
        if (!response) {
            setGeneralError("Usuário ou senha inválidos.");
        } else {
            setAccessToken(response.access_token);
            setUserData(response.user);
            router.push('/dashboard');
        }
    };

    const handleRecoverClick = () => {
        router.push('/auth/recover');
    };

    useEffect(() => {

    }, [errors])

    return (
        <div className=" shadow bg-white p-5 rounded max-w-[400px] w-[100%] h-[400px] flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center space-y-4">
                <FormGroup
                    label="Login"
                    id="login"
                    register={register("login", {required: "Login é obrigatório"})}
                    error={errors.login}
                />
                <FormGroup
                    label="Password"
                    type="password"
                    id="password"
                    register={register("password", {required: "Senha é obrigatória"})}
                    error={errors.password}
                />
                {generalError && <ErrorMessage message={generalError}/>}
                <Button loading={loading} type="submit">Login</Button>
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
