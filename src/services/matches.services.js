import axios from '../libs/axios'

export const getMatches = async () => {
  const { data } = await axios.get('/api/matches')
  return data
}

export const getMatch = async (id) => {
  const { data } = await axios.get(`/api/matches/${id}`)
  return data
}

export const addComment = ({ id, body }) => axios.put(`/api/matches/addComment/${id}`, body)

export const removeComment = ({ id, body }) => axios.put(`/api/matches/removeComment/${id}`, body)

export const getMatchesToday = async (date) => {
  const { data } = await axios.post('/api/matches/matchestoday', { date })
  return data
}
export const getMatchesByTeam = async (team) => {
  const { data } = await axios.post('/api/matches/matchesteams', { team })
  return data
}

export const getMatchesByLeague = async (league) => {
  const { data } = await axios.post('/api/matches/matchesbyleague', { league })
  return data
}

export const getMatchesByRound = async (round) => {
  const { data } = await axios.post('/api/matches/matchesbyround', { round })
  return data
}

export const getMatchesBySeason = async (season) => {
  const { data } = await axios.post('/api/matches/matchesbyseason', { season })
  return data
}
export const getMatchesOpen = async () => {
  const { data } = await axios.post('/api/matches/matchesopen')
  return data
}
export const getMatchesClosed = async () => {
  const { data } = await axios.post('/api/matches/matchesclosed')
  return data
}
