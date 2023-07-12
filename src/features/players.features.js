import { useQuery } from '@tanstack/react-query'
import { getPlayer, getPlayers, getPlayersBySport } from '../services/players.services'

export const useGetPlayers = () => {
  const { data, isLoading, isError } = useQuery({ queryKey: ['players'], queryFn: getPlayers })
  return { data, isLoading, isError }
}

export const useGetPlayer = (id) => {
  const { data, isLoading, isError } = useQuery({ queryKey: ['player', id], queryFn: () => getPlayer(id) })
  return { data, isLoading, isError }
}

export const useGetPlayerBySport = (sport) => {
  const { data, isLoading, isError } = useQuery({ queryKey: ['players'], queryFn: () => getPlayersBySport(sport) })
  return { data, isLoading, isError }
}
