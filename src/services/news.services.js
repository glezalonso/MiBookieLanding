import axios from '../libs/axios'

export const getNews = async () => {
    const { data } = await axios.get('/api/news/')
    return data
}

export const GetNew = async (id) => {
    const { data } = await axios.get(`/api/news/${id}`)
    return data
}
