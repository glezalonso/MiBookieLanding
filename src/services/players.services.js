import axios from '../libs/axios'

export const getPlayers = async () => {
  const { data } = await axios.get('/api/players')
  return data
}

export const getPlayer = async (id) => {
  const { data } = await axios.get(`/api/players/${id}`)
  return data
}
