import axios from '../libs/axios'

export const loginBookie = async (body) => {
    const { data } = await axios.post('/api/loginBookie', body)
    return data
}

export const registerBookie = async (body) => {
    const { data } = await axios.post('/api/registerBookie', body)
    return data
}

export const generateOTP = (values) => axios.post('/api/generateOTP', values)

export const verifyOTP = (values) => axios.post('/api/verifyOTP', values)

export const resetPassword = (values) => axios.put('/api/resetPassword', values)
