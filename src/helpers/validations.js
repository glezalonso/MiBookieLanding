import { toast } from 'react-hot-toast'

export const validateRegister = (values) => {
    if (!values.fullName) return toast.error('El nombre es requerido')
    if (values.fullName.length < 8)
        return toast.error('El nombre debe tener al menos 9 caractéres')
    if (!values.email) return toast.error('El email es equerido')
    if (!values.username) return toast.error('El usuario es requerido')
    if (values.username.length < 5)
        return toast.error('El usuario debe tener al menos 5 caractéres')
    if (values.username.includes(' '))
        return toast.error('El usuario no debe contener espacios')
    if (!values.password) return toast.error('La contraseña es requerida')
    if (values.password.length < 8)
        return toast.error('La contraseña debe tener al menos 8 caractéres')
    if (values.password.includes(' '))
        return toast.error(' La contraseña no debe contener espacios')
}

export const validateLogin = (values) => {
    if (!values.username) return toast.error('El usuario es requerido')
    if (values.username.length < 5)
        return toast.error('El usuario debe tener al menos 5 caractéres')
    if (values.username.includes(' '))
        return toast.error('El usuario no debe contener espacios ')
    if (!values.password) return toast.error('La contraseña es requerida')
    if (values.password.length < 8)
        return toast.error('La contraseña debe tener al menos 8 caractéres')
    if (values.password.includes(' '))
        return toast.error('  La contraseña no debe contener espacios')
}
export const validateEmail = (values) => {
    if (!values.email) return toast.error('El email es requerido')
}

export const validateOTP = (values) => {
    if (!values.OTP) return toast.error('EL codigo es requerido')
    if (values.OTP.length < 5)
        return toast.error('El codigo debe tener al menos 5 caractéres')
}

export const validateResetPassword = (values) => {
    if (!values.password) return toast.error('La contraseña es requerida')
    if (values.password.length < 8)
        return toast.error('La contraseña debe tener al menos 8 caractéres')
    if (values.password.includes(' '))
        return toast.error('La contraseña no debe contener espacios')
    if (values.password !== values.confirmPassword)
        toast.error('Las contraseñas deben de ser iguales')
}
