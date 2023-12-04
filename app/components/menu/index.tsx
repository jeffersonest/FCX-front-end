import Button from "@/app/components/button";
import { UserGear, Users } from "@phosphor-icons/react";
import { CloseIcon } from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import { MenuItem, MenuProps } from "@/app/interfaces/menu.interface";
import { useAuthStore } from "@/app/store/auth-store";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

const Menu: React.FC<MenuProps> = ({ onlyIcon, menuItems }) => {
    const { setAccessToken } = useAuthStore();
    const router = useRouter();

       const MenuItems: MenuItem[] = [
        {
            name: 'Infos',
            icon: <UserGear/>,
            action: () => {
                router.push('/dashboard');
            }
        },
        {
            name: 'Usuários',
            icon: <Users/>,
            action: () => {
                router.push('/dashboard/users');
            }
        },
        {
            name: 'Sair',
            icon: <CloseIcon/>,
            action: () => {
                setAccessToken('');
                router.push('/auth');
            }
        },
    ]

    const Items = useMemo(() => { return (menuItems || MenuItems)}, [menuItems, MenuItems]);

    return (
        <ul className="flex flex-col items-center w-full space-y-3">
            {Items.map((item, index) => (
                <li key={item.name} className="w-full">
                    <Button onClick={() => item.action()} justify="center" onlyIcon={onlyIcon} icon={item.icon}>
                        {item.name}
                    </Button>
                </li>
            ))}
        </ul>
    );
};

export default Menu;
