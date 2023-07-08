import { useQuery } from '@tanstack/react-query'
import { getNews } from '../services/news.services'

export const useGetNews = () => {
  const { data, isLoading, isError } = useQuery({ queryKey: ['news'], queryFn: getNews })
  return { data, isLoading, isError }
}
