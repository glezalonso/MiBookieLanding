import { useQuery } from '@tanstack/react-query'
import { getRound, getRounds } from '../services/rounds.services'

export const useGetRounds = () => {
  const { data, isLoading, isError } = useQuery({ queryKey: ['rounds'], queryFn: getRounds })
  return { data, isLoading, isError }
}

export const useGetRound = (id) => {
  const { data, isLoading, isError } = useQuery({ queryKey: ['round', id], queryFn: () => getRound(id) })
  return { data, isLoading, isError }
}
