import UserForm from "@/app/components/user-form";

const UpdateUsersPage: React.FC = () => {
    return (
        <div className="h-[100%]">
            <div className="w-[100%] flex items-center justify-center py-10">
                <h1 className="text-2xl font-bold text-gray-600">Atualizar Usuário</h1>
            </div>
            <div className="py-50">
                <UserForm />
            </div>
        </div>
    );
}

export default UpdateUsersPage;