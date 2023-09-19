import axios from '../libs/axios'

export const getTournaments = async (status) => {
    const { data } = await axios.get(`/api/tournaments/tournamentsstatus/${status}`)
    return data
}

export const getTournament = async (id) => {
    const { data } = await axios.get(`/api/tournaments/${id}`)
    return data
}