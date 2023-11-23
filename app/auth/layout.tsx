import LayoutProps from "@/app/interfaces/layout.interface";

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <section className="background-wallpaper flex items-center justify-center w-[100%] h-[100%] p-5">
            {children}
        </section>
    );
};

export default AuthLayout;