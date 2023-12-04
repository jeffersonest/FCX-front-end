'use client';
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import Button from "@/app/components/button";
import Menu from "@/app/components/menu";
import React, {useEffect} from "react";
import {AlignLeft, ArrowArcLeft, ArrowLeft, ArrowRight} from "@phosphor-icons/react";


const Sidebar: React.FC<any> = () => {
    const [opened, setOpened] = React.useState<boolean>(true);
    const [width, setWidth] = React.useState<number>(250);

    const handleOpened = () => {
        setOpened(!opened);
    };

    useEffect(() => {
        if (opened) {
            setWidth(250);
        } else {
            setWidth(100);
        }
    }, [opened]);

    return (
        <div className="hidden min-[910px]:flex min-[910px]:flex-col p-5 transition-all " style={{width: width, minWidth: width}}>
            <div className="w-[100%] flex items-center justify-end relative h-[40px]">
                {opened ?
                    <span className="bg-[#ff1654] p-1 rounded-2xl text-white absolute right-[-30px]">
                        <ArrowLeft className="cursor-pointer" onClick={() => handleOpened()}/>
                    </span>
                    :
                    <span className="bg-[#ff1654] p-1 rounded-2xl text-white absolute right-[-30px]">
                        <ArrowRight className="cursor-pointer" onClick={() => handleOpened()}/>
                    </span>
                }
            </div>
            <Menu onlyIcon={!opened}/>
        </div>
    )
};

export default Sidebar;