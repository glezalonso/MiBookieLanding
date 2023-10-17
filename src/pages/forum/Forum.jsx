import React from 'react'
import chat from '../../icons/chat.svg'
import ForumForm from './components/ForumForm'
import ForumMessage from './components/ForumMessage'
import { useGetMessages } from '../../features/forum.features'

import Loading from '../../ui/Loading'
import toast from 'react-hot-toast'

const Forum = () => {
    const { data: message, isLoading, isError } = useGetMessages()

    if (isLoading) return <Loading />
    if (isError)
        return toast.error('Ha ocurrido un error al cargar los mensajes')

    return (
        <main className="container mx-auto min-h-screen p-1 lg:w-4/6">
            <div className="max-w-full mx-auto bg-white my-1 p-5 rounded-lg lg:w-3/4 shadow-xl">
                <h1 className="flex gap-1  items-center text-gray-950 font-bold  font-sans text-lg">
                    <img src={chat} alt="foro" className="h-5 w-5" /> Foro
                </h1>
                <ForumForm />
                <ForumMessage message={message} />
            </div>
        </main>
    )
}

export default Forum
