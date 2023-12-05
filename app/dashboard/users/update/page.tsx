'use client';
import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';
import UserForm from "@/app/components/user-form";
import {selectedStore} from "@/app/store/selected-row.store";
import {UserDto} from "@/app/interfaces/dto/user.dto";
import {useAuthStore} from "@/app/store/auth-store";
import UserService from "@/app/services/user.service";


const UpdateUsersPage = () => {
    const [error, setError] = useState("");
    const router = useRouter();
    const {ids, setIds} = selectedStore();
    const [user, setUser] = useState<UserDto>({birth: "", cpf: "", createdAt: "", email: "", id: 0, login: "", motherName: "", name: "", password: "", phone: "", status: false, updatedAt: ""});
    const {accessToken} = useAuthStore();
    const userService = new UserService(accessToken);
    const [userForms, setUserForms] = useState<any[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await userService.getUserById(ids);
            if ('statusCode' in response && 'message' in response) {
                if (response.statusCode === 401) {
                    router.push('/auth');
                }
                setError(response.message);

                return;
            }

            console.log("REPONSE.STATUS",response.status);

            setUser(response);
        }

        fetchUsers();
    }, []);

    const onSubmit = async (data: any) => {
        console.log(data);

        if(data.password !== data.repeatPassword) {
            setError("As senhas não coincidem");
            return;
        }

        delete data.repeatPassword;

        if(data.password === "") {
            delete data.password;
        }

        const response = await userService.update(data, ids);

        if ('statusCode' in response && 'message' in response) {
            if(response.statusCode === 401) {
                router.push('/auth');
            }
            setError(response.message);

            return;
        }

        router.push('/dashboard/users');
    }


    return (
        <div className="mb-10">
            {user.login ? <UserForm userData={user} error={error} onSubmit={onSubmit}/> : <div>Carregando...</div> }
        </div>
    );

};

export default UpdateUsersPage;
