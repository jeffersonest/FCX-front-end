'use client';
import React from "react";
import DataTable from "@/app/components/data-table";
import {GridColDef, GridRowsProp} from "@mui/x-data-grid";
import FormGroup from "@/app/components/form-group";
import {Controller, useForm} from "react-hook-form";
import Button from "@/app/components/button";
import Select from "@/app/components/select";
import {SelectOption} from "@/app/interfaces/select.interface";
import DefaultSwitch from "@/app/components/switch";
import DefaultDatePicker from "@/app/components/date-picker";
import {TextField} from "@mui/material";
import Label from "@/app/components/label";

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
    {field: 'col1', headerName: 'Column 1', minWidth: 150},
    {field: 'col2', headerName: 'Column 2', minWidth: 150},
    {field: 'col3', headerName: 'Column 3', minWidth: 150},
];

const options: SelectOption[] = [
    {label: "Nome", value: "name"},
    {label: "CPF", value: "document"},
    {label: "Email", value: "email"}
];

const ageOptions: SelectOption[] = [
    {label: "Maior que 18 e menor que 26", value: "18>26"},
    {label: "Maior que 25 e menor que 31", value: "25>31"},
    {label: "Maior que 30 e menor que 36", value: "30>36"},
    {label: "Maior que 35 e menor que 41", value: "35>41"},
    {label: "Maior que 40", value: "<40"},
];

const UsersPage: React.FC = () => {
    const {control, register, handleSubmit, watch} = useForm({
        defaultValues: {
            filterValue: '',
            filterType: '',
            ageRange: '',
            userActive: true,
            birthDateBegin: '',
            birthDateEnd: '',
            registerDateBegin: '',
            registerDateEnd: '',
            updateDateBegin: '',
            updateDateEnd: '',

        }
    },);

    const onSubmit = (data: any) => {
        console.log(data);
        // Aqui você pode implementar a lógica para filtrar os usuários
    };
    return (
        <section className="p-5 bg-transparent">
            <div className="bg-white rounded p-5 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <FormGroup
                        label="Pesquise"
                        register={register("filterValue")}
                        placeholder="Digite o valor do filtro"
                    />
                    <div className="md:flex md:space-x-4 items-center">
                        <div className="flex flex-col w-[100%]">
                            <Label>Selecione o filtro</Label>
                            <Controller
                                name="filterType"
                                control={control}
                                defaultValue="none"
                                render={({field: {onChange, value}}) => (
                                    <Select
                                        id="filter-option"
                                        options={options}
                                        value={value}
                                        onChange={onChange}
                                    />
                                )}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:space-x-4 items-center">
                        <div className="flex flex-col w-[100%]">
                            <Label>Selecione o range de idade</Label>
                            <Controller
                                name="ageRange"
                                control={control}
                                defaultValue="none"
                                render={({field: {onChange, value}}) => (
                                    <Select
                                        id="age-option"
                                        options={ageOptions}
                                        value={value}
                                        onChange={onChange}
                                    />
                                )}
                            />
                        </div>
                        <div className="flex flex-col w-[150px] justify-start">
                            <Label>Cliente ativo</Label>
                            <DefaultSwitch defaultChecked {...register("userActive")} />
                        </div>
                    </div>
                    <div
                        className="flex space-y-2 min-[880px]:space-x-2 justify-center items-center max-[440px]:space-y-2 flex-wrap">
                        <div className="mt-2">
                            <Label>Período de nascimento</Label>
                            <div className="flex items-center flex-wrap space-y-2 min-[440px]:space-y-0">
                                <DefaultDatePicker {...register("birthDateBegin")}/>
                                <Label> <span className="mx-2">Até</span> </Label>
                                <DefaultDatePicker {...register("birthDateEnd")}/>
                            </div>
                        </div>
                        <div>
                            <Label>Período de cadastro</Label>
                            <div className="flex items-center flex-wrap space-y-2 min-[440px]:space-y-0">
                                <DefaultDatePicker {...register("registerDateBegin")}/>
                                <Label> <span className="mx-2">Até</span> </Label>
                                <DefaultDatePicker {...register("registerDateEnd")}/>
                            </div>
                        </div>
                        <div>
                            <Label>Período de atualização</Label>
                            <div className="flex items-center flex-wrap space-y-2 min-[440px]:space-y-0">
                                <DefaultDatePicker {...register("updateDateBegin")}/>
                                <Label> <span className="mx-2">Até</span> </Label>
                                <DefaultDatePicker {...register("updateDateEnd")}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="max-w-[210px] my-5">
                            <Button>Aplicar Filtro</Button>
                        </div>
                    </div>
                </form>
                <div className="w-[100%] h-[2px] bg-gray-400 mb-5"></div>
                <DataTable rows={rows} columns={columns}/>
            </div>
        </section>
    );
}

export default UsersPage;