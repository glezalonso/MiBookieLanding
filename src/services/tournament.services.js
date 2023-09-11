import axios from '../libs/axios'

export const getTournaments = async () => {
    const { data } = await axios.get('/api/tournaments')
    return data
}
