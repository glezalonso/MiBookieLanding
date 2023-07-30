import axios from '../libs/axios'

export const getMatches = async () => {
    const { data } = await axios.get('/api/matches')
    return data
}

export const getMatch = async (id) => {
    const { data } = await axios.get(`/api/matches/${id}`)
    return data
}

export const addComment = ({ id, body }) =>
    axios.put(`/api/matches/addComment/${id}`, body)

export const removeComment = ({ id, body }) =>
    axios.put(`/api/matches/removeComment/${id}`, body)

export const getMatchesToday = async (date) => {
    const { data } = await axios.post('/api/matches/matchestoday', { date })
    return data
}
export const getMatchesByTeam = async (team) => {
    const { data } = await axios.post('/api/matches/matchesteams', { team })
    return data
}

export const getMatchesOpenByLeague = async (league) => {
    const { data } = await axios.post('/api/matches/matchesopenbyleague', {
        league,
    })
    return data
}

export const getMatchesClosedByLeague = async (league) => {
    const { data } = await axios.post('/api/matches/matchesclosedbyleague', {
        league,
    })
    return data
}

export const getMatchesByRound = async (round) => {
    const { data } = await axios.post('/api/matches/matchesbyround', { round })
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

export const getNextMatchesBySport = async (sport) => {
    const { data } = await axios.post('api/matches/nextmatchesbysport', {
        sport,
    })
    return data
}

export const pickEm = ({ body }) => axios.post(`/api/matches/pickem/`, body)

export const getPicksClosed = async (id) => {
    const { data } = await axios.get(`/api/matches/matchbookieclosed/${id}`)
    return data
}

export const getPicksOpen = async (id) => {
    const { data } = await axios.put(`/api/matches/matchbookieopen/${id}`)
    return data
}
