export interface MenuItem {
    name: string;
    icon: React.ReactNode;
    action: () => void;
}

export interface MenuProps {
    onlyIcon?: boolean;
    menuItems?: MenuItem[];
}