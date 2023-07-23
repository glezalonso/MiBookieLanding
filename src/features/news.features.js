import { useQuery } from '@tanstack/react-query'
import { getNewsBySport } from '../services/news.services'

export const useGetNewsbySport = (sport) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['news', sport],
        queryFn: () => getNewsBySport(sport),
    })
    return { data, isLoading, isError }
}
