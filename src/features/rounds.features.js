import { useQuery } from '@tanstack/react-query'
import {
    getRound,
    getRounds,
    getRoundsBySeason,
    getRoundsTour,
} from '../services/rounds.services'

export const useGetRounds = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['rounds'],
        queryFn: getRounds,
    })
    return { data, isLoading, isError }
}

export const useGetRound = (id) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['round', id],
        queryFn: () => getRound(id),
    })
    return { data, isLoading, isError }
}

export const useGetRoundsBySeason = (season) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['roundseason', season],
        queryFn: () => getRoundsBySeason(season),
    })
    return { data, isLoading, isError }
}

export const useGetRoundsTour = (season) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['roundtour', season],
        queryFn: () => getRoundsTour(season),
    })
    return { data, isLoading, isError }
}