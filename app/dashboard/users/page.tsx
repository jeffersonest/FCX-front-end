'use client';
import React from "react";
import DataTable from "@/app/components/data-table";
import {GridColDef, GridRowsProp} from "@mui/x-data-grid";
import FormGroup from "@/app/components/form-group";
import {useForm} from "react-hook-form";
import Button from "@/app/components/button";
import Select from "@/app/components/select";
import {SelectOption} from "@/app/interfaces/select.interface";
import DefaultSwitch from "@/app/components/switch";

const rows: GridRowsProp = [
    {id: 1, col1: 'aaaa', col2: 'World'},
    {id: 2, col1: 'bbbbb', col2: 'is Awesome'},
    {id: 3, col1: 'ccccc', col2: 'is Amazing'},
    {id: 4, col1: 'ddddd', col2: 'World'},
    {id: 5, col1: 'eeeee', col2: 'is Awesome'},
    {id: 6, col1: 'fffffff', col2: 'is Amazing'},
    {id: 7, col1: 'gggggggg', col2: 'World'},
    {id: 8, col1: 'hhhhhhhhh', col2: 'is Awesome'},
    {id: 9, col1: 'iiiiiii', col2: 'is Amazing'},
    {id: 10, col1: 'jjjjjjjj', col2: 'World'},
];

const columns: GridColDef[] = [
    {field: 'col1', headerName: 'Column 1', width: 150},
    {field: 'col2', headerName: 'Column 2', width: 150},
    {field: 'col3', headerName: 'Column 3', width: 150},
];

const options: SelectOption[] = [
    {label: "Nome", value: "name"},
    {label: "CPF", value: "document"},
    {label: "Email", value: "email"}
];

const UsersPage: React.FC = () => {
    const {register, handleSubmit, watch} = useForm({
        defaultValues: {
            filterValue: '',
            filterType: 'nome',
            userActive: true,
        }
    },);
    const onSubmit = (data: any) => {
        console.log(data);
        // Aqui você pode implementar a lógica para filtrar os usuários
    };
    return (
        <section className="p-5 w-[100%] h-[100%] bg-transparent">
            <div className="bg-white w-[100%] h-[100%] rounded p-5">
                <form className="flex flex-wrap px-0 py-5 pt-0 items-center h-auto w-[100%]"
                      onSubmit={handleSubmit(onSubmit)}>
                    <div className="max-w-[200px] mr-5">
                        <FormGroup
                            label=""
                            register={register("filterValue")}
                            placeholder={"Digite o valor do filtro"}
                        />
                    </div>
                    <div className="max-w-[200px] mr-5">
                        <Select id="filter-option" options={options} defaultValue="none" register={register("filterType")}/>
                    </div>
                    <div className="">
                        <label className="text-[#a7b1bb] text-sm font-semibold">Usuário Ativo</label>
                        <DefaultSwitch defaultChecked {...register("userActive")} />
                    </div>
                    <div className="max-w-[200px]">
                        <Button>Aplicar Filtro</Button>
                    </div>
                </form>

                <DataTable rows={rows} columns={columns}/>
            </div>
        </section>
);
}

export default UsersPage;