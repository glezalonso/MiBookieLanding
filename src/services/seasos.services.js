import axios from '../libs/axios'

export const getSeasons = async () => {
    const { data } = await axios.get('/api/seasons')
    return data
}

export const getSeason = async (id) => {
    const { data } = await axios.get(`/api/seasons/${id}`)
    return data
}

export const getSeasonsBySport = async (sport) => {
    const { data } = await axios.post('/api/seasons/seasonsbysport', { sport })
    return data
}

export const getSeasonsByLeague = async (league) => {
    const { data } = await axios.post('/api/seasons/seasonsbyleague', {
        league,
    })
    return data
}
