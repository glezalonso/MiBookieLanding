import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
    getMatch,
    getMatches,
    addComment,
    removeComment,
    getMatchesToday,
    getMatchesOpenByLeague,
    getMatchesClosedByLeague,
    getMatchesByRound,
    getMatchesOpen,
    getMatchesByTeam,
    getNextMatchesBySport,
    pickEm,
    getPicksOpen,
    getPicksClosed,
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
            queryClient.invalidateQueries({ queryKey: ['match'] })
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
export const useGetMatchesOpenByLeague = (league) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['matches', league],
        queryFn: () => getMatchesOpenByLeague(league),
    })
    return { data, isLoading, isError }
}

export const useGetMatchesClosedByLeague = (league) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['matches', league],
        queryFn: () => getMatchesClosedByLeague(league),
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

export const useGetNextMatchesBySport = (sport) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['matchessport', sport],
        queryFn: () => getNextMatchesBySport(sport),
    })
    return { data, isLoading, isError }
}

export const useAddPickEm = () => {
    const queryClient = useQueryClient()
    const mutationAddPickEm = useMutation({
        mutationFn: pickEm,
        onSuccess: () => {
            toast.success('Voto agregado')
            queryClient.invalidateQueries({ queryKey: ['matchestoday'] })
            queryClient.invalidateQueries({ queryKey: ['match'] })
        },
        onError: () => toast.error('Ya se ha colocado su voto'),
    })
    return mutationAddPickEm
}
export const useGetPicksOpen = (id) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['query', id],
        queryFn: () => getPicksOpen(id),
    })
    return { data, isLoading, isError }
}

export const useGetPicksClosed = (id) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['query', id],
        queryFn: () => getPicksClosed(id),
    })
    return { data, isLoading, isError }
}
