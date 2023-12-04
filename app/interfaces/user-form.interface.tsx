export interface UserData {
    id: number;
    name: string;
    email: string;
    login: string;
    password: string;
    phone: string;
    cpf: string;
    birth: string;
    motherName: string;
    status: boolean;
    createdAt: string;
    updatedAt: string;
}


export interface UserFormProps {
    userData?: UserData;
    onSubmit: (e: any) => void;
    onCancel?: (e: any) => void;
    onChange?: (e: any) => void;
    error?: any;
    isEdit?: boolean;
    loading?: boolean;
}