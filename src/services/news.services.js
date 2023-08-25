import axios from '../libs/axios'

export const getNews = async (page) => {
    const { data } = await axios.get(`/api/news/page/${page}`)
    return data
}

export const GetNew = async (id) => {
    const { data } = await axios.get(`/api/news/${id}`)
    return data
}
