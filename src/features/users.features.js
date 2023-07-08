import { useMutation } from '@tanstack/react-query'
import { loginBookie, registerBookie, generateOTP, verifyOTP, resetPassword } from '../services/users.services'
import toast from 'react-hot-toast'
import { useAuthStore } from '../store/authorization'
import { useRecovery } from '../store/recovery'
import { useNavigate } from 'react-router-dom'

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

export const useGenerateCode = () => {
  const setEmail = useRecovery(state => state.setEmail)
  const navigate = useNavigate()

  const mutationGenerateOTP = useMutation({
    mutationFn: generateOTP,
    onSuccess: data => {
      setEmail(data.data)
      toast.success('Email sended!')
      setTimeout(() => {
        navigate('../verify')
      }, 3000)
    },
    onError: () => toast.error('Email not valid!')
  })
  return mutationGenerateOTP
}

export const useVerifyCode = () => {
  const setOTP = useRecovery(state => state.setOTP)
  const navigate = useNavigate()

  const mutationVerifyOTP = useMutation({
    mutationFn: verifyOTP,
    onSuccess: (data) => {
      toast.success('Code Correct!!')
      setOTP(data.data)
      setTimeout(() => {
        navigate('../reset')
      }, 3000)
    },
    onError: () => toast.error('Incorrect code!')
  })
  return mutationVerifyOTP
}

export const useResetPassword = () => {
  const empty = useRecovery(state => state.setEmpty)
  const navigate = useNavigate()

  const resetPass = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      toast.success('Reseted successfully')
      empty()
      setTimeout(() => {
        navigate('../')
      }, 3000)
    },
    onError: () => toast.error('Failed to reset password!')
  })
  return resetPass
}
