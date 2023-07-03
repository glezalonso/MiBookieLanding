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
