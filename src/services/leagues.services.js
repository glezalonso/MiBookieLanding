import axios from '../libs/axios'

export const getLeagues = async () => {
  const { data } = await axios.get('/api/leagues')
  return data
}

export const getLeague = async (id) => {
  const { data } = await axios.get(`/api/leagues/${id}`)
  return data
}
