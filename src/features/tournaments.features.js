import {  useQuery } from '@tanstack/react-query'
import {
    getTournaments,
  
} from '../services/tournament.services'

export const useGetTournaments = () => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ['tournaments'],
        queryFn: getTournaments,
    })
    return { data, isLoading, isError }
}
