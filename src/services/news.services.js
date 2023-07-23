import axios from '../libs/axios'

export const getNewsBySport = async (sport) => {
    const { data } = await axios.post('/api/news/newsbysport', { sport })
    return data
}
