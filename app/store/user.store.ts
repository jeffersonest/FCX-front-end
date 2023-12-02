import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { UserData } from "@/app/interfaces/user-form.interface";
import { UserStoreData } from "@/app/interfaces/store/user-store.interface";


export const useUserStore = create<UserStoreData>()(
  devtools(
    persist(
      (set) => ({
        id: 0,
        name: '',
        login: '',
        email: '',
        password: '',
        birthDate: '',
        phone: '',
        cpf: '',
        motherName: '',
        status: '',
        createdAt: '',
        updatedAt: '',
        setUserData: (userData: UserStoreData) => set(userData),
      }),
      {
        name: 'user-storage',
      },
    ),
  ),
)