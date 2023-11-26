'use client';
import Button from "@/app/components/button";
import {List, UserGear, Users} from "@phosphor-icons/react";
import {useState} from "react";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import Menu from "@/app/components/menu";


const HeaderMenu: React.FC = () => {
    const [opened, setOpened] = useState<boolean>(false);

    return (
        <>
            <div className="flex items-center transition-all">
                <div>
                    <List onClick={() => setOpened(!opened)} className="cursor-pointer z-10" size={25}/>
                </div>
                <div onClick={() => setOpened(!opened)} className={`${opened ? 'flex' : 'hidden'} transition-all absolute left-0 top-0 w-[100%] h-[100%] bg-transparent flex-col items-end`}>
                    <div className="w-[200px] h-auto p-5 bg-white mr-5" style={{marginTop: 'calc(70px + 1.25rem)'}}>
                        <Menu />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderMenu;