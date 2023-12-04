'use client';
import UserForm from "@/app/components/user-form";
import {useAuthStore} from "@/app/store/auth-store";
import UserService from "@/app/services/user.service";
import {useState} from "react";
import {useRouter} from "next/navigation";

const CreateUsersPage: React.FC = () => {
    const {accessToken} = useAuthStore();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const handleSubmit = async (data: any) => {

        if(data.password !== data.repeatPassword) {
            setError("As senhas não coincidem");
            return;
        }

        delete data.repeatPassword;

        setLoading(true);
        const userService = new UserService(accessToken);
        const response = await userService.create(data);
        setLoading(false);

        // Verificar se a resposta é BadRequestDto
        if ('statusCode' in response && 'message' in response) {
            setError(response.message);
            return;
        }

        // Caso contrário, trata como UserDto
        router.push('/dashboard/users');
    }


    return (
        <div className="h-[100%]">
            <div className="w-[100%] flex items-center justify-center py-10">
                <h1 className="text-2xl font-bold text-gray-600">Adicionar Usuário</h1>
            </div>
            <div className="py-50">
                <UserForm error={error} loading={loading} onSubmit={handleSubmit}/>
            </div>
        </div>
    );
}

export default CreateUsersPage;