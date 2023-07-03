import axios from '../libs/axios'

export const getTeams = async () => {
  const { data } = await axios.get('/api/teams')
  return data
}

export const getTeam = async (id) => {
  const { data } = await axios.get(`/api/teams/${id}`)
  return data
}
