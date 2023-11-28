'use client';
import React from "react";
import DataTable from "@/app/components/data-table";

const UsersPage: React.FC = () => {

    return (
        <section className="p-5 w-[100%] h-[100%] bg-transparent">
            <div className="bg-white w-[100%] h-[100%] rounded p-5">
                <DataTable/>
            </div>
        </section>
    );
}

export default UsersPage;