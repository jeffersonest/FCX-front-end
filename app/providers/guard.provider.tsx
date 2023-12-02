import LayoutProps from "@/app/interfaces/layout.interface";
import {useAuthStore} from "@/app/store/auth-store";
import {useEffect} from "react";
import {useRouter} from "next/navigation";

const GuardProvider: React.FC<LayoutProps> = ({children}) => {
    const {setAccessToken, accessToken} = useAuthStore();
    const router = useRouter();

    useEffect(() => {
        if (!accessToken || accessToken === '') {
            router.push('/auth');
        }
    }, []);

    return (
        <>
            {children}
        </>
    )
}

export default GuardProvider;