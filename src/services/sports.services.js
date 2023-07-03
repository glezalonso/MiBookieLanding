import axios from '../libs/axios'

export const getSports = async () => {
  const { data } = await axios.get('/api/sports')
  return data
}

export const getSport = async (id) => {
  const { data } = await axios.get(`/api/sports/${id}`)
  return data
}
