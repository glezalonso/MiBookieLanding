import { useQuery } from '@tanstack/react-query'
import { getSeason, getSeasons } from '../services/seasos.services'

export const useGetSeasons = () => {
  const { data, isLoading, isError } = useQuery({ queryKey: ['seasons'], queryFn: getSeasons })
  return { data, isLoading, isError }
}

export const useGetSeason = (id) => {
  const { data, isLoading, isError } = useQuery({ queryKey: ['season', id], queryFn: () => getSeason(id) })
  return { data, isLoading, isError }
}
