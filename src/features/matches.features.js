import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
    getMatch,
    getMatches,
    addComment,
    removeComment,
    getMatchesToday,
    getMatchesByLeague,
    getMatchesByRound,
    getMatchesClosed,
    getMatchesOpen,
    getMatchesByTeam,
} from '../services/matches.services'
import { toast } from 'react-hot-toast'

export const useGetMatches = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['matches'],
        queryFn: getMatches,
    })
    return { data, isLoading, isError }
}

export const useGetMatch = (id) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['match', id],
        queryFn: () => getMatch(id),
    })
    return { data, isLoading, isError }
}

export const useAddComment = () => {
    const queryClient = useQueryClient()
    const mutationAdd = useMutation({
        mutationFn: addComment,
        onSuccess: () => {
            toast.success('Comentario agregado')
            queryClient.invalidateQueries({ queryKey: ['matchestoday'] })
        },
    })
    return mutationAdd
}

export const useRemoveComment = (id) => {
    const queryClient = useQueryClient()
    const mutationRemove = useMutation({
        mutationFn: removeComment,
        onSuccess: () => {
            toast.success('Comentario eliminado')
            queryClient.invalidateQueries({ queryKey: ['matchestoday'] })
        },
    })
    return mutationRemove
}

export const useGetMatchesToday = (date) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['matchestoday', date],
        queryFn: () => getMatchesToday(date),
    })
    return { data, isLoading, isError }
}
export const useGetMatchesByTeam = (team) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['matches', team],
        queryFn: () => getMatchesByTeam(team),
    })
    return { data, isLoading, isError }
}
export const useGetMatchesByLeague = (league) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['matches', league],
        queryFn: () => getMatchesByLeague(league),
    })
    return { data, isLoading, isError }
}
export const useGetMatchesByRound = (round) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['matches', round],
        queryFn: () => getMatchesByRound(round),
    })
    return { data, isLoading, isError }
}

export const useGetMatchesOpen = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['matches'],
        queryFn: getMatchesOpen,
    })
    return { data, isLoading, isError }
}
export const useGetMatchesClosed = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['matches'],
        queryFn: getMatchesClosed,
    })
    return { data, isLoading, isError }
}
