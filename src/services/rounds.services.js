import axios from '../libs/axios'

export const getRounds = async () => {
    const { data } = await axios.get('/api/rounds')
    return data
}

export const getRound = async (id) => {
    const { data } = await axios.get(`/api/rounds/${id}`)
    return data
}

export const getRoundsBySeason = async (season) => {
    const { data } = await axios.post('/api/rounds/roundsbyseason', { season })
    return data
}
