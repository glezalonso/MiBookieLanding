import axios from '../libs/axios'
import { useMutation, useQuery, useQueryClient, useInfiniteQuery } from '@tanstack/react-query'
import {
    loginBookie,
    registerBookie,
    generateOTP,
    verifyOTP,
    resetPassword,
    getPicks,
    getBookie,
    addFollow,
    removeFollow,
    addAvatar,
    getTopBookies,
    sendMessage,
    getTopMonth,
    getTopMonthSport,
    getTournamentWinner,
    getMiniTournamentWinner
} from '../services/users.services'
import toast from 'react-hot-toast'
import { useAuthStore } from '../store/authorization'
import { useRecovery } from '../store/recovery'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
    const auth = useAuthStore((state) => state.setAuth)
    const profile = useAuthStore((state) => state.setProfile)

    const mutationLogin = useMutation({
        mutationFn: loginBookie,
        onSuccess: (data) => {
            toast.success('Inicio de sesión exitoso ')
            auth(data.token)
            profile({ username: data.username, id: data.id })
        },
        onError: (data) =>
            toast.error(`Error al iniciar sesión! ${data.response.data.error}`),
    })
    return mutationLogin
}

export const useRegister = () => {
    const auth = useAuthStore((state) => state.setAuth)
    const profile = useAuthStore((state) => state.setProfile)

    const mutationRegister = useMutation({
        mutationFn: registerBookie,
        onSuccess: (data) => {
            toast.success('Bienvenido a Mi Bookie')
            auth(data.token)
            profile({ username: data.username, id: data.id })
        },
        onError: (data) => toast.error(`${data.response.data.error}`),
    })
    return mutationRegister
}

export const useSendMessage = () => {
    const mutationSendMessage = useMutation({
        mutationFn: sendMessage,
        onSuccess: () => toast.success('Se ha enviado el comentario'),
        onError: () => toast.error('No se pudo enviar el mensaje'),
    })
    return mutationSendMessage
}

export const useGenerateCode = () => {
    const setEmail = useRecovery((state) => state.setEmail)
    const navigate = useNavigate()

    const mutationGenerateOTP = useMutation({
        mutationFn: generateOTP,
        onSuccess: (data) => {
            setEmail(data.data)
            toast.success('Se ha enviado un email de recuperación!')
            setTimeout(() => {
                navigate('../verify')
            }, 3000)
        },
        onError: () => toast.error('Error al enviar el email de recuperación!'),
    })
    return mutationGenerateOTP
}

export const useVerifyCode = () => {
    const setOTP = useRecovery((state) => state.setOTP)
    const navigate = useNavigate()

    const mutationVerifyOTP = useMutation({
        mutationFn: verifyOTP,
        onSuccess: (data) => {
            toast.success('Código correcto!')
            setOTP(data.data)
            setTimeout(() => {
                navigate('../reset')
            }, 3000)
        },
        onError: () => toast.error('Código incorrecto!'),
    })
    return mutationVerifyOTP
}

export const useResetPassword = () => {
    const empty = useRecovery((state) => state.setEmpty)
    const navigate = useNavigate()

    const resetPass = useMutation({
        mutationFn: resetPassword,
        onSuccess: () => {
            toast.success('Contraseña restablecida')
            empty()
            setTimeout(() => {
                navigate('../')
            }, 3000)
        },
        onError: () => toast.error('Error al restablecer contraseña!'),
    })
    return resetPass
}

export const useGetPicks = (username) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['query', username],
        queryFn: () => getPicks(username),
    })
    return { data, isLoading, isError }
}

export const useGetBookie = (id) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['bookie', id],
        queryFn: () => getBookie(id),
    })
    return { data, isLoading, isError }
}

export const useAddFollow = () => {
    const queryClient = useQueryClient()
    const mutationAdd = useMutation({
        mutationFn: addFollow,
        onSuccess: () => {
            toast.success('Estas siguiendo al usuario')
            queryClient.invalidateQueries({ queryKey: ['bookie'] })
        },
    })
    return mutationAdd
}

export const useRemoveFollow = () => {
    const queryClient = useQueryClient()
    const mutationRemove = useMutation({
        mutationFn: removeFollow,
        onSuccess: () => {
            toast.success('Has dejado de seguir al usuario')
            queryClient.invalidateQueries({ queryKey: ['bookie'] })
        },
    })
    return mutationRemove
}

export const useAddAvatar = () => {
    const queryClient = useQueryClient()
    const mutationAdd = useMutation({
        mutationFn: addAvatar,
        onSuccess: () => {
            toast.success('Has cambiado tu avatar')
            queryClient.invalidateQueries({ queryKey: ['bookie'] })
        },
    })
    return mutationAdd
}

export const useGetTopBookies = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['top'],
        queryFn:getTopBookies,
    })

    return { data, isLoading, isError }
}

export const useGetTopMonth = (date) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['topmonth', date],
        queryFn: () => getTopMonth(date),
    })
    return { data, isLoading, isError }
}
export const useGetTopMonthSport = (date, sport) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['topmonthsport', date, sport],
        queryFn: () => getTopMonthSport(date, sport),
    })
    return { data, isLoading, isError }
}

export const useGetTournamentWinner= (season, minimun) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['tournament', season, minimun],
        queryFn: () => getTournamentWinner(season, minimun),
    })
    return { data, isLoading, isError }
}

export const useGetBookies = () => {
    const {
        data,
        isError,
        isLoading,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    } = useInfiniteQuery(
        ['bookies'],
        async ({ pageParam = 1 }) => {
            const { data } = await axios.get(
                `/api/bookies/page/${pageParam}/`
            )
            return data
        },

        {
            getNextPageParam: (lastPage) => {
                if (lastPage.page === lastPage.totalPages) return false
                return lastPage.page + 1
            },
        }
    )
    return {
        data,
        isError,
        isLoading,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    }
}

export const useGetMiniTournamentWinner= (round, minimun) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['minitournament', round, minimun],
        queryFn: () => getMiniTournamentWinner(round, minimun),
    })
    return { data, isLoading, isError }
}