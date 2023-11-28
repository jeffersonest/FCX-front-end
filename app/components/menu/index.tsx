import Button from "@/app/components/button";
import {UserGear, Users} from "@phosphor-icons/react";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import {MenuItem, MenuProps} from "@/app/interfaces/menu.interface";

const MenuItems: MenuItem[] = [
    {
        name: 'Perfil',
        icon: <UserGear/>,
        action: () => {
            console.log('Perfil');
        }
    },
    {
        name: 'Usuários',
        icon: <Users/>,
        action: () => {
            console.log('Usuários');
        }
    },
    {
        name: 'Sair',
        icon: <CloseIcon/>,
        action: () => {
            console.log('Sair');
        }
    },
]

const Menu: React.FC<MenuProps> = ({onlyIcon, menuItems}) => {

    const Items = menuItems ?? MenuItems;

    return (
        <ul className="flex flex-col items-center w-[100%]  space-y-3">
            {Items.map((item, index) => (
                <li key={index} className="w-[100%]">
                    <Button onClick={item.action} justify="center" onlyIcon={onlyIcon} icon={item.icon}>
                        {item.name}
                    </Button>
                </li>
            ))}

        </ul>
    );
};

export default Menu;