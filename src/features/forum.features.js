import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query'
import { getMessages, getMessage, createMessage, updateMessage, deleteMessage, addComment,removeComment } from '../services/forum.services'
import { toast} from 'react-hot-toast'

 export const useGetMessages  = () => {
    const {data, isLoading, isError } = useQuery({
        queryKey:['forums'],
        queryFn: getMessages
    })
    return {data, isLoading, isError}
 }

  export const useGetMessage  = (id) => {
    const {data, isLoading, isError } = useQuery({
        queryKey:['forum', id],
        queryFn:() => getMessage(id)
    })
    return {data, isLoading, isError}
 }

 export const useCreateMessage = () => {
    const queryClient = useQueryClient()
    const mutationCreate = useMutation({
        mutationFn:createMessage,
        onSuccess: () => {
            toast.success('Mensaje creado')
             queryClient.invalidateQueries({ queryKey:['forums'] })
            queryClient.invalidateQueries({ queryKey:['forum'] })
        },
    })
    return mutationCreate
}
 
 export const useUpdateMessage = () => {
     const queryClient = useQueryClient()
    const mutationUpdate= useMutation({
        mutationFn:updateMessage,
        onSuccess: () => {
            toast.success('Mensaje actualizado')
            queryClient.invalidateQueries({ queryKey:['forums'] })
        },
    })
    return mutationUpdate
}

 export const useDeleteMessage = () => {
    const queryClient = useQueryClient()
    const mutationDelete= useMutation({
        mutationFn: deleteMessage,
        onSuccess: () => {
            toast.success('Mensaje Eliminado')
          queryClient.invalidateQueries({ queryKey:['forums'] })
        },
    })
    return mutationDelete
}

export const useAddcomment = () => {
     const queryClient = useQueryClient()
    const mutationAdd= useMutation({
        mutationFn: addComment,
        onSuccess: () => {
            toast.success('Comentario Agregado!')
            queryClient.invalidateQueries({ queryKey:['forums'] })
           
        },
    })
    return mutationAdd
}

export const useRemovecomment = () => {
     const queryClient = useQueryClient()
    const mutationRemove= useMutation({
        mutationFn: removeComment,
        onSuccess: () => {
            toast.success('Comentario Eliminado!')
            queryClient.invalidateQueries({ queryKey:['forums'] })
        },
    })
    return mutationRemove
}