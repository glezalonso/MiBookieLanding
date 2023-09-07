import axios from '../libs/axios'

export const loginBookie = async (body) => {
    const { data } = await axios.post('/api/loginBookie', body)
    return data
}

export const registerBookie = async (body) => {
    const { data } = await axios.post('/api/registerBookie', body)
    return data
}

export const generateOTP = (values) => axios.post('/api/generateotp', values)

export const verifyOTP = (values) => axios.post('/api/verifyOTP', values)

export const resetPassword = (values) => axios.put('/api/resetPassword', values)

export const getPicks = async (username) => {
    const { data } = await axios.get(`/api/bookies/picks/${username}`)
    return data
}

export const sendMessage = (values) => axios.post('/api/contact', values)

export const getBookie = async (id) => {
    const { data } = await axios.get(`/api/bookies/${id}`)
    return data
}

export const addFollow = ({ id, body }) =>
    axios.post(`/api/bookies/follow/${id}`, body)

export const removeFollow = ({ id, body }) =>
    axios.put(`/api/bookies/follow/${id}`, body)

export const addAvatar = ({ id, body }) =>
    axios.put(`/api/bookies/avatar/${id}`, body)

export const getTopBookies = async () => {
    const { data } = await axios.put('/api/bookies/top/')
    return data
}

export const getTopMonth = async (date) => {
    const { data } = await axios.get(`/api/bookies/topmonth/${date}`)
    return data
}

export const getTopMonthSport = async (date,sport) => {
    const { data } = await axios.get(`/api/bookies/topmonthsport/${date}/${sport}`)
    return data
}
