export interface UserStoreData {
    id: number;
    name: string;
    email: string;
    login: string;
    phone: string;
    cpf: string;
    birthDate: string;
    motherName: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    setUserData: (data: UserStoreData) => void;
}