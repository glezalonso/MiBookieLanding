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
    getMatchesByLeague,
    getMatchesByRound,
    getMatchesOpen,
    getMatchesByTeam,
    getNextMatchesBySport,
    pickEm,
    getHeadToHead,
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
            queryClient.invalidateQueries({ queryKey: ['matchToday'] })
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
            queryClient.invalidateQueries({ queryKey: ['match'] })
            queryClient.invalidateQueries({ queryKey: ['matchToday'] })
        },
    })
    return mutationRemove
}

export const useGetMatchesToday = (date) => {
    const {
        data,
        isError,
        isLoading,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    } = useInfiniteQuery(
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
    return {
        data,
        isError,
        isLoading,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    }
}

export const useGetMatchesTodaySport = (date, sport) => {
    const {
        data,
        isError,
        isLoading,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    } = useInfiniteQuery(
        ['matchTodayS', sport, date],
        async ({ pageParam = 1 }) => {
            const { data } = await axios.get(
                `/api/matches/todaysport/${pageParam}/${date}/${sport}`
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


export const useGetMatchesByTeam = (team, limit, status) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['matches', team, limit, status],
        queryFn: () => getMatchesByTeam(team, limit, status),
    })
    return { data, isLoading, isError }
}
export const useGetMatchesByLeague = (league, limit, status) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['matches', league, limit, status],
        queryFn: () => getMatchesByLeague(league, limit, status),
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
            queryClient.invalidateQueries({ queryKey: ['matchToday'] })
        },
        onError: () => toast.error('Ya se ha colocado su voto'),
    })
    return mutationAddPickEm
}


export const useGetMatchesBookie = (id,status) => {
    const {
        data,
        isError,
        isLoading,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    } = useInfiniteQuery(
        ['predictions', id, status],
        async ({ pageParam = 1 }) => {
            const { data } = await axios.get(
                `/api/matches/matchbookie/${id}/${status}/${pageParam}`
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

export const useGetHeadtoHead = (local, away) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['headtohead', local, away],
        queryFn: () => getHeadToHead(local, away),
    })
    return { data, isLoading, isError }
}
