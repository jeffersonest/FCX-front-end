import HeaderMenu from "@/app/components/header-menu";

const Header: React.FC<any> = () => {
    return (
        <div className="h-[70px] flex justify-between items-center p-5">
            <div>
                <img src="/assets/mstile-70x70.png" alt="logo" className="w-[50px]" />
            </div>
            <div>
                <HeaderMenu />
            </div>
        </div>
    )
};

export default Header;