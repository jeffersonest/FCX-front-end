import HeaderMenu from "@/app/components/header-menu";
import Image from "next/image";

const Header: React.FC<any> = () => {
    return (
        <div className="h-[70px] flex justify-between items-center p-5">
            <div>
                <Image src="/assets/mstile-70x70.png" alt="logo" className="w-[50px]" width="50" height="50" />
            </div>
            <div>
                <HeaderMenu />
            </div>
        </div>
    )
};

export default Header;