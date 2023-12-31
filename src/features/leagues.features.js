import { useQuery } from '@tanstack/react-query'
import {
    getLeague,
    getLeagues,
    getLeaguesBySport,
} from '../services/leagues.services'

export const useGetLeagues = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['leagues'],
        queryFn: getLeagues,
    })
    return { data, isLoading, isError }
}

export const useGetLeague = (id) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['league', id],
        queryFn: () => getLeague(id),
    })
    return { data, isLoading, isError }
}

export const useGetLeaguesBySport = (sport) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['leaguesport', sport],
        queryFn: () => getLeaguesBySport(sport),
    })
    return { data, isLoading, isError }
}
