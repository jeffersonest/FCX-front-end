export interface UserData {
    id: number;
    name: string;
    email: string;
    login: string;
    password: string;
    phone: string;
    cpf: string;
    birthDate: string;
    motherName: string;
    status: boolean;
    createdAt: string;
    updatedAt: string;
}


export interface UserFormProps {
    userData?: UserData;
    onSubmit?: (e: any) => void;
    onCancel?: (e: any) => void;
    onChange?: (e: any) => void;
    errors?: any;
    isEdit?: boolean;
}