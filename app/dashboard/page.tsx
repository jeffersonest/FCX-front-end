'use client';

import Label from "@/app/components/label";

const DashboardPage: React.FC<any> = () => {
  return (
    <div className="h-[100%] flex items-center justify-center flex-wrap space-x-5 max-[1090px]:space-y-5">
        <div className="w-[240px] h-[150px] shadow rounded p-5 max-[580px]:ml-5 max-[1090px]:mt-5">
          <Label>Total de usuários:</Label>
        </div>
        <div className="w-[240px] h-[150px] shadow rounded p-5">
            <Label>Total de usuários ativos:</Label>
        </div>
        <div className="w-[240px] h-[150px] shadow rounded p-5">
            <Label>Total de usuários inativos:</Label>
        </div>
    </div>
  );
}

export default DashboardPage;
