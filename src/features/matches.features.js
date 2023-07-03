import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getMatch, getMatches, addComment, removeComment } from '../services/matches.services'
import { toast } from 'react-hot-toast'

export const useGetMatches = () => {
  const { data, isLoading, isError } = useQuery({ queryKey: ['matches'], queryFn: getMatches })
  return { data, isLoading, isError }
}

export const useGetMatch = (id) => {
  const { data, isLoading, isError } = useQuery({ queryKey: ['match', id], queryFn: () => getMatch(id) })
  return { data, isLoading, isError }
}

export const useAddComment = () => {
  const queryClient = useQueryClient()
  const mutationAdd = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      toast.success('comment added succesfully')
      queryClient.invalidateQueries({ queryKey: ['matches'] })
    }
  })
  return mutationAdd
}

export const useRemoveComment = (id) => {
  const queryClient = useQueryClient()
  const mutationRemove = useMutation({
    mutationFn: removeComment,
    onSuccess: () => {
      toast.success('comment removed succesfully')
      queryClient.invalidateQueries({ queryKey: ['matches'] })
    }
  })
  return mutationRemove
}
