import axios from '../libs/axios'

export const getSeasons = async () => {
  const { data } = await axios.get('/api/seasons')
  return data
}

export const getSeason = async (id) => {
  const { data } = await axios.get(`/api/seasons/${id}`)
  return data
}
