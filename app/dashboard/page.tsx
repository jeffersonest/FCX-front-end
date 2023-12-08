'use client';

import Label from "@/app/components/label";
import {useUserStore} from "@/app/store/user.store";
import {useAuthStore} from "@/app/store/auth-store";
import UserService from "@/app/services/user.service";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {CountUsersDto} from "@/app/interfaces/dto/count-users.dto";


const DashboardPage: React.FC<any> = () => {
    const {accessToken} = useAuthStore();
    const userService = new UserService(accessToken);
    const [counters, setCounters] = useState<CountUsersDto>();
    const router = useRouter();

    const loadUsers = async () => {
        const response = await userService.countUsers();

        if ('statusCode' in response && 'message' in response) {
            if(response.statusCode === 401) {
                router.push('/auth');
            }
            return;
        }

        setCounters(response);
    };

    useEffect(() => {
        const fetchData = async () => {

            await loadUsers();
        };
        fetchData();

    }, []);

    return (
        <div className="h-[100%] flex items-center justify-center flex-wrap space-x-5 max-[1090px]:space-y-5">
            <div className="w-[240px] h-[150px] shadow rounded p-5 max-[580px]:ml-5 max-[1090px]:mt-5">
                <Label>Total de usuários:</Label>
                <h1 className="text-4xl font-bold text-center mt-5">{counters?.totalUsers}</h1>
            </div>
            <div className="w-[240px] h-[150px] shadow rounded p-5">
                <Label>Total de usuários ativos:</Label>
                <h1 className="text-4xl font-bold text-center mt-5">{counters?.totalUsersActive}</h1>
            </div>
            <div className="w-[240px] h-[150px] shadow rounded p-5">
                <Label>Total de usuários inativos:</Label>
                <h1 className="text-4xl font-bold text-center mt-5">{counters?.totalUsersInactive}</h1>
            </div>
        </div>
    );
}

export default DashboardPage;
