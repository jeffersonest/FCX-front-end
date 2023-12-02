import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import {AuthStore} from "@/app/interfaces/store/auth-store.interface";



export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        accessToken: '',
        setAccessToken: (accessToken: string) => set({accessToken}),
      }),
      {
        name: 'auth-storage',
      },
    ),
  ),
)