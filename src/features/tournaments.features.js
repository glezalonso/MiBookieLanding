import {  useQuery } from '@tanstack/react-query'
import {
    getTournaments,
    getTournament
  
} from '../services/tournament.services'

export const useGetTournaments = (status) => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ['tournaments', status],
        queryFn: () => getTournaments(status),
    })
    return { data, isLoading, isError }
}

export const useGetTournament = (id) => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ['tournament', id],
        queryFn: () => getTournament(id),
    })
    return { data, isLoading, isError }
}
