import { toast } from 'react-hot-toast'

export const validateRegister = (values) => {
  if (!values.fullName) return toast.error('the fullname is required')
  if (values.fullName.length < 8) return toast.error('the fullname must have at least 8 characters')
  if (!values.email) return toast.error('the email is required')
  if (!values.username) return toast.error('the username is required')
  if (values.username.length < 5) return toast.error('the username must have at least 5 characters')
  if (values.username.includes(' ')) return toast.error('the username must not have includes spaces ')
  if (!values.password) return toast.error('the password is required')
  if (values.password.length < 8) return toast.error('the password mast hace at least 8 characters')
  if (values.password.includes(' ')) return toast.error(' the password must not have includes spaces')
}

export const validateLogin = (values) => {
  if (!values.username) return toast.error('the username is required')
  if (values.username.length < 5) return toast.error('the username must have at least 5 characters')
  if (values.username.includes(' ')) return toast.error('the username must not have includes spaces ')
  if (!values.password) return toast.error('the password is required')
  if (values.password.length < 8) return toast.error('the password mast hace at least 8 characters')
  if (values.password.includes(' ')) return toast.error(' the password must not have includes spaces')
}
export const validateEmail = (values) => {
  if (!values.email) return toast.error('Email is required')
}

export const validateOTP = (values) => {
  if (!values.OTP) return toast.error('OTP is required')
  if (values.OTP.length > 5) return toast.error('OTP must have at least 6 characters')
}

export const validateResetPassword = (values) => {
  if (!values.password) return toast.error('Password is required')
  if (!values.confirmPassword) return toast.error('Password is required')
  if (values.password.length < 8) return toast.error('Password must contain at least 8 characters')
  if (values.confirmPassword.length < 8) return toast.error('confirm password must contain at least 8 characters')
  if (values.password.includes(' ')) return toast.error('Password must not include spaces')
  if (values.confirmPassword.includes(' '))toast.error('Password must not include spaces')
  if (values.password !== values.confirmPassword) toast.error('Passwods must be equals')
}
