import axios from '../libs/axios'

export const loginBookie = async (body) => {
  const { data } = await axios.post('/api/loginBookie', body)
  return data
}

export const registerBookie = async (body) => {
  const { data } = await axios.post('/api/registerBookie', body)
  return data
}
