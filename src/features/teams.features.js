import { useQuery } from '@tanstack/react-query'
import { getTeam, getTeams, getTeamsBySport } from '../services/teams.services'

export const useGetTeams = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['teams'],
        queryFn: getTeams,
    })
    return { data, isLoading, isError }
}

export const useGetTeam = (id) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['team', id],
        queryFn: () => getTeam(id),
    })
    return { data, isLoading, isError }
}

export const useGetTeamsBySport = (sport) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['teams', sport],
        queryFn: () => getTeamsBySport(sport),
    })
    return { data, isLoading, isError }
}
