'use client';
import React, {useCallback, useEffect, useMemo} from "react";
import DataTable from "@/app/components/data-table";
import {GridColDef, GridRowsProp} from "@mui/x-data-grid";
import FormGroup from "@/app/components/form-group";
import {Controller, useForm} from "react-hook-form";
import Button from "@/app/components/button";
import Select from "@/app/components/select";
import {SelectOption} from "@/app/interfaces/select.interface";
import DefaultSwitch from "@/app/components/switch";
import DefaultDatePicker from "@/app/components/date-picker";
import {Container, TextField} from "@mui/material";
import Label from "@/app/components/label";
import {FileCsv, FileDoc, FilePdf, FolderUser, Trash} from "@phosphor-icons/react";
import UserService from "@/app/services/user.service";
import {useAuthStore} from "@/app/store/auth-store";
import {UserFilterDto} from "@/app/interfaces/dto/user-filter.dto";
import {UserDto} from "@/app/interfaces/dto/user.dto";
import Table from "@/app/components/table";
import {useRouter} from "next/navigation";
import {selectedStore} from "@/app/store/selected-row.store";

const columns: GridColDef[] = [
    {field: 'id', headerName: 'Id', minWidth: 0, },
    {field: 'name', headerName: 'Nome', minWidth: 0, },
    {field: 'login', headerName: 'Login', minWidth: 0, },
    {field: 'email', headerName: 'Email', minWidth: 0, },
    {field: 'cpf', headerName: 'CPF', minWidth: 0, },
    {field: 'phone', headerName: 'Telefone', minWidth: 0, },
    {field: 'birth', headerName: 'Data de Nascimento', minWidth: 0, },
    {field: 'motherName', headerName: 'Nome da mãe', minWidth: 0, },
    {field: 'status', headerName: 'Status', minWidth: 0, },
    {field: 'createdAt', headerName: 'Data de Cadastro', minWidth: 0, },
    {field: 'updatedAt', headerName: 'Data de Atualização', minWidth: 0, },
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
    {label: "Maior que 40", value: ">40"},
];

const UsersPage: React.FC = () => {
    const [loading, setLoading] = React.useState(false);
    const [disableLoading, setDisableLoading] = React.useState(false);
    const [multiUpdate, setMultiUpdate] = React.useState(true);
    const [refresh, setRefresh] = React.useState(false);
    const router = useRouter();
    const [selected, setSelected] = React.useState([]);
    const [disable, setDisable] = React.useState(true);
    const {accessToken} = useAuthStore();
    const [users, setUsers] = React.useState<UserDto[]>([]);
    const usersService = useMemo(() => new UserService(accessToken), [accessToken]);
    const {ids, setIds} = selectedStore();
    const {control, register, handleSubmit, watch} = useForm<UserFilterDto>({
        defaultValues: {
            filterValue: '',
            filterType: 'none',
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

    useEffect(() => {
        setIds(selected.join(','));
    }, [selected, setIds]);

    const onRowSelectionModelChange = useCallback((event: []) => {
        setSelected(event);
        if (event.length > 0) {
            setDisable(false)
            setMultiUpdate(false);
        } else {
            setDisable(true);
            setMultiUpdate(true);
        }

        if(event.length > 0 && event.length < 2) {
            setMultiUpdate(false);
        } else {
            setMultiUpdate(true);
        }

    }, []);

    const onSubmit = useCallback(async (data: UserFilterDto) => {
        setLoading(true);
        const response = await usersService.filter(data)


        if ('statusCode' in response && 'message' in response) {
            if(response.statusCode === 401) {
                router.push('/auth');
            }
            return;
        }

        setUsers(response);
        setLoading(false);
    }, [router, usersService]);

    const updateUsers = async () => {
        router.push(`/dashboard/users/update`);
    }

    const disableUser = async () => {

        setDisableLoading(true);

        selected.map(async (item) => {
            const response = await usersService.disable(item);

            if ('statusCode' in response && 'message' in response) {
            if(response.statusCode === 401) {
                router.push('/auth');
            }
            return;
        }
        });


        setDisableLoading(false);
        setRefresh(true);
    };

    useEffect(() => {
        const fetchData = async () => {
            const defaultData = {
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
            };
            await onSubmit(defaultData);
        };
        fetchData();
        setRefresh(false)
    }, [refresh, onSubmit]);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                <FormGroup
                    label="Pesquise"
                    register={register("filterValue")}
                    placeholder="Digite o valor do filtro"
                />
                <div className="md:flex md:space-x-4 items-center">
                    <div className="flex flex-col w-[100%]">
                        <Label>Selecione o intervalo de idade</Label>
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
                    <div className="flex flex-col w-[150px] justify-start max-[768px]:mt-4 ">
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
                    <div className="min-w-[130px] my-5">
                        <Button loading={loading}>Aplicar Filtro</Button>
                    </div>
                </div>
            </form>
            <div className="w-[100%] h-[2px] bg-gray-400"></div>
            <div
                className="w-[100%] flex flex-wrap items-center justify-end py-5 space-x-5 space-y-2">
                <div className="min-w-[130px] flex mt-2"><Button onClick={()=> updateUsers()} disabled={multiUpdate} icon={<FolderUser/>}>Alterar</Button>
                </div>
                <div className="min-w-[130px] flex"><Button onClick={()=> router.push("/dashboard/users/create")} icon={<FolderUser/>}>Adicionar</Button>
                </div>
                <div className="min-w-[130px] flex"><Button loading={disableLoading} onClick={()=> disableUser()} disabled={disable} icon={<Trash/>}>Desativar</Button></div>
            </div>

            <div>
                <DataTable onRowSelectionModelChange={onRowSelectionModelChange} rows={users} columns={columns}/>
            </div>
        </div>
    );
}

export default UsersPage;