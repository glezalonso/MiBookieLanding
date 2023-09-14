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

export const getMatchesToday = async ({ pageParam = 1, date }) => {
    const { data } = await axios.get(`/api/matches/today/${pageParam}/${date}`)
    return data
}

export const getMatchesTodaySport = async (sport, date) => {
    const { data } = await axios.get(
        `/api/matches/todaybysport/${sport}/${date}`
    )
    return data
}
export const getMatchesByTeam = async (team, limit, status) => {
    const { data } = await axios.get(
        `/api/matches/team/${team}/${limit}/${status}`
    )
    return data
}

export const getMatchesByLeague = async (league, limit, status) => {
    const { data } = await axios.get(
        `/api/matches/league/${league}/${limit}/${status}`
    )
    return data
}



export const getMatchesByRound = async (round) => {
    const { data } = await axios.get(`/api/matches/round/${round}`)
    return data
}

export const getMatchesOpen = async () => {
    const { data } = await axios.get('/api/matches/open')
    return data
}
export const getMatchesClosed = async () => {
    const { data } = await axios.get('/api/matches/closed')
    return data
}

export const getNextMatchesBySport = async (sport) => {
    const { data } = await axios.get(`/nextmatches/sport/${sport}`)
    return data
}

export const pickEm = ({ body }) => axios.post(`/api/matches/pickem/`, body)


export const getHeadToHead = async (local, away) => {
    const { data } = await axios.get(`/api/matches/headtohead/${local}/${away}`)
    return data
}
