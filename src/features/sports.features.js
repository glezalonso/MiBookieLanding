import { useQuery } from '@tanstack/react-query'
import { getSports, getSport } from '../services/sports.services'

export const useGetSports = () => {
  const { data, isLoading, isError } = useQuery({ queryKey: ['sports'], queryFn: getSports })
  return { data, isLoading, isError }
}

export const useGetSport = (id) => {
  const { data, isLoading, isError } = useQuery({ queryKey: ['sport', id], queryFn: () => getSport(id) })
  return { data, isLoading, isError }
}
