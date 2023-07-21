import { useQuery } from '@tanstack/react-query'
import {
    getSeason,
    getSeasons,
    getSeasonsBySport,
    getSeasonsByLeague,
} from '../services/seasos.services'

export const useGetSeasons = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['seasons'],
        queryFn: getSeasons,
    })
    return { data, isLoading, isError }
}

export const useGetSeason = (id) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['season', id],
        queryFn: () => getSeason(id),
    })
    return { data, isLoading, isError }
}

export const useGetSeasonsBySport = (sport) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['seasonsbysport', sport],
        queryFn: () => getSeasonsBySport(sport),
    })
    return { data, isLoading, isError }
}

export const useGetSeasonsByLeague = (league) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['seasonsbyleague', league],
        queryFn: () => getSeasonsByLeague(league),
    })
    return { data, isLoading, isError }
}
