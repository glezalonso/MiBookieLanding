import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAuthStore = create(
    persist(
        (set) => ({
            auth: null,
            isLogged: false,
            profile: { username: null, id: null },
            isDisable: true,
            setAuth: (token) =>
                set((status) => ({
                    ...status,
                    auth: token,
                    isLogged: true,
                    isDisable: false,
                })),
            setProfile: (username, id) =>
                set((status) => ({ profile: username, id })),
            logOut: () =>
                set((status) => ({
                    ...status,
                    auth: null,
                    isLogged: false,
                    profile: { username: null, id: null },
                    isDisable: true,
                })),
        }),
        { name: 'miBookieAuth' }
    )
)
