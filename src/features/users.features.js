import { useMutation } from '@tanstack/react-query'
import { loginBookie, registerBookie } from '../services/users.services'
import toast from 'react-hot-toast'
import { useAuthStore } from '../store/authorization'

export const useLogin = () => {
  const auth = useAuthStore(state => state.setAuth)
  const profile = useAuthStore(state => state.setProfile)

  const mutationLogin = useMutation({
    mutationFn: loginBookie,
    onSuccess: (data) => {
      toast.success('Logged in successfully! ')
      auth(data.token)
      profile(data.username)
    },
    onError: data => toast.error(`Failed to log in! ${data.response.data.error}`)
  })
  return mutationLogin
}

export const useRegister = () => {
  const auth = useAuthStore(state => state.setAuth)
  const profile = useAuthStore(state => state.setProfile)

  const mutationRegister = useMutation({
    mutationFn: registerBookie,
    onSuccess: (data) => {
      toast.success('Welcome to Mi Bookie')
      auth(data.token)
      profile(data.username)
    },
    onError: data => toast.error(`${data.response.data.error}`)
  })
  return mutationRegister
}
