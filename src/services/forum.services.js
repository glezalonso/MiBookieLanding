import axios from '../libs/axios'

export const getMessages = async () => {
   const {data} = await axios.get('/api/forums')
    return data
}

export const getMessage = async (id) => {
   const {data} = await axios.get(`/api/forums/${id}`)
    return data
}

export const createMessage = (body) => {
    const form = new FormData()

    for (const key in body) {
        form.append(key, body[key])
    }
    axios.post('/api/forums', form, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}


export const updateMessage = ({id, body}) =>{
     const form = new FormData()

    for (const key in body) {
        form.append(key, body[key])
    }
    axios.put(`/api/forums/${id}`, form, {
      headers: {
            'Content-Type': 'multipart/form-data',
        },})}

export const deleteMessage = (id) => axios.delete(`/api/forums/${id}`)

export const addComment = ({ id, body }) =>
    axios.put(`/api/forums/addcomment/${id}`, body)

export const removeComment = ({ id, body }) =>
    axios.put(`/api/forums/removecomment/${id}`, body)


