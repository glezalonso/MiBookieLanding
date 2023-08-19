import axios from '../libs/axios'
import {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery,
} from '@tanstack/react-query'
import {
    getMatch,
    getMatches,
    addComment,
    removeComment,
    getMatchesOpenByLeague,
    getMatchesClosedByLeague,
    getMatchesByRound,
    getMatchesOpen,
    getMatchesByTeam,
    getNextMatchesBySport,
    pickEm,
    getPicksOpen,
    getPicksClosed,
    getMatchesTodaySport,
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
    const { data, isError, isLoading, hasNextPage, fetchNextPage } =
        useInfiniteQuery(
            ['matchToday', date],
            async ({ pageParam = 1 }) => {
                const { data } = await axios.get(
                    `/api/matches/today/${pageParam}/${date}`
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
    return { data, isError, isLoading, hasNextPage, fetchNextPage }
}

export const useGetMatchesTodaySport = (sport, date) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['matchestoday', sport],
        queryFn: () => getMatchesTodaySport(sport, date),
    })
    return { data, isLoading, isError }
}

export const useGetMatchesByTeam = (team, limit, status) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['matches', limit, status],
        queryFn: () => getMatchesByTeam(team, limit, status),
    })
    return { data, isLoading, isError }
}
export const useGetMatchesOpenByLeague = (league, limit) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['matches', limit],
        queryFn: () => getMatchesOpenByLeague(league, limit),
    })
    return { data, isLoading, isError }
}

export const useGetMatchesClosedByLeague = (league, limit) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['matches', limit],
        queryFn: () => getMatchesClosedByLeague(league, limit),
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
export const useGetPicksOpen = (id, limit) => {
    const { data, isLoading, isError, isFetching } = useQuery({
        queryKey: ['query', limit],
        queryFn: () => getPicksOpen(id, limit),
    })
    return { data, isLoading, isError, isFetching }
}

export const useGetPicksClosed = (id, limit) => {
    const { data, isLoading, isError, isFetching } = useQuery({
        queryKey: ['query', limit],
        queryFn: () => getPicksClosed(id, limit),
    })
    return { data, isLoading, isError, isFetching }
}
