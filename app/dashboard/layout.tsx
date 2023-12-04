'use client';
import LayoutProps from "@/app/interfaces/layout.interface";
import Header from "@/app/components/header";
import Sidebar from "@/app/components/sidebar";
import {useAuthStore} from "@/app/store/auth-store";
import Image from "next/image";

const DashboardLayout: React.FC<LayoutProps> = ({children}) => {
    const {setAccessToken, accessToken} = useAuthStore();

    if (!accessToken || accessToken === '') {
        return (
            <main className="flex h-[100%] w-[100%] items-center justify-center p-24">
                <Image src="/assets/loader.gif" alt="Logo" width={64} height={64}/>
            </main>
        )
    } else {
        return (
            <div className="flex flex-col h-[100%] w-[100%]">
                <Header/>
                <div className="flex flex-1 flex-col md:flex-row">
                    <Sidebar/>
                    <main className="flex-1 bg-[#f5f7fa]">
                        <section className="p-5 bg-transparent">
                            <div className="bg-white rounded p-5 mx-auto">
                                {children}
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        );
    }
}

export default DashboardLayout;