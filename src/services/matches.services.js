import axios from '../libs/axios'

export const getMatches = async () => {
  const { data } = await axios.get('/api/matches')
  return data
}
export const getMatchesToday = async () => {
  const { data } = await axios.get('/api/matches/matchestoday')
  return data
}

export const getMatch = async (id) => {
  const { data } = await axios.get(`/api/matches/${id}`)
  return data
}

export const addComment = ({ id, body }) => axios.put(`/api/matches/addComment/${id}`, body)

export const removeComment = ({ id, body }) => axios.put(`/api/matches/removeComment/${id}`, body)
