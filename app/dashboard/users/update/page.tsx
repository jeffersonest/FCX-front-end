'use client';
import React, {useState, useEffect, useMemo} from 'react';
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
    const userService = useMemo(() => new UserService(accessToken), [accessToken]);
    const [userForms, setUserForms] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

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

            setUser(response);
        }

        fetchUsers();
    }, [ids, router, userService]);

    const onSubmit = async (data: any) => {
        setLoading(true);
        if(data.password !== data.repeatPassword) {
            setError("As senhas não coincidem");
            setLoading(false);
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

        setLoading(false);

        router.push('/dashboard/users');
    }


    return (
        <div className="mb-10">
            {user.login ? <UserForm loading={loading} userData={user} error={error} onSubmit={onSubmit}/> : <div>Carregando...</div> }
        </div>
    );

};

export default UpdateUsersPage;
