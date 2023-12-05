import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import {AuthStore} from "@/app/interfaces/store/auth-store.interface";



export const selectedStore = create<{ids: string, setIds: (ids: string)=> void}>()(
  devtools(
    persist(
      (set) => ({
        ids: '',
        setIds: (ids: string) => set({ids : ids}),
      }),
      {
        name: 'selected-storage',
      },
    ),
  ),
)