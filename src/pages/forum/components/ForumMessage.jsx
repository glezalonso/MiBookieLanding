import React, { useState } from 'react'
import SectionMessage from './SectionMessage'
import { XCircleFill } from 'react-bootstrap-icons'
import { toast } from 'react-hot-toast'
import { Textarea, Button, Alert } from 'flowbite-react'
import {
    useAddcomment,
    useDeleteMessage,
} from '../../../features/forum.features'
import getHour from '../../../utils/getHour'
import { useAuthStore } from '../../../store/authorization'

const ForumMessage = ({ message }) => {
    const [comment, setComment] = useState('')
    const remove = useDeleteMessage()
    const addComment = useAddcomment()
    const hour = getHour()
    const userId = useAuthStore((state) => state.profile.id)

    const handleDelete = (id) => {
        const ok = confirm('Esta seguro que desa borrar')
        if (ok) remove.mutate(id)
    }

    const handleSubmit = (e, id) => {
        e.preventDefault()
        if (!userId) return toast.error('Debes iniciar sesión para comentar')
        if (comment.length < 1)
            return toast.error('El mensaje debe tener contenido')
        addComment.mutate({
            id,
            body: { comment, hour, username: userId },
        })
        setComment('')
    }

    return (
        <>
            <section className="max-w-full mx-auto bg-white my-1 p-5 rounded-lg lg:w-3/4 shadow-xl">
                {message?.length > 0 ? (
                    message?.map((message) => (
                        <div
                            className="w-full bg-white border border-gray-200 rounded-lg p-2 mb-2"
                            key={message?._id}
                        >
                            <div className="text-gray-600 flex justify-between font-bold my-2">
                                <span className="ml-2 text-base font-bold text-gray-700">
                                    {message?.user?.username}
                                </span>
                                <span className="flex gap-1 items-center text-sm text-gray-400">
                                    {message.date
                                        ?.split('T', 2)
                                        .join(' ')
                                        .slice(0, 16)}
                                    {message?.user?._id === userId && (
                                        <XCircleFill
                                            color="red"
                                            onClick={() =>
                                                handleDelete(message?._id)
                                            }
                                        />
                                    )}
                                </span>
                            </div>
                            <p className="break-words border-b-2 p-2 text-sm my-3">
                                {message.message}
                            </p>
                            {message?.images?.secure_url?.length > 0 && (
                                <div className="flex items-center justify-center p-3">
                                    <img
                                        src={message?.images?.secure_url}
                                        alt="images"
                                        className="rounded-t-lg w-auto "
                                    />
                                </div>
                            )}
                            <section>
                                <div className="rounded  border-gray-500 border-t-1 ">
                                    <form
                                        onSubmit={(e) =>
                                            handleSubmit(e, message?._id)
                                        }
                                    >
                                        <Textarea
                                            className="mt-2 text-base placeholder:text-sm"
                                            rows={1}
                                            name="comment"
                                            value={comment}
                                            placeholder="Ingresa tu comentario"
                                            disabled={!userId && false}
                                            onChange={(e) =>
                                                setComment(e.target.value)
                                            }
                                        />
                                        <div className="flex justify-end">
                                            <Button
                                                type="submit"
                                                size="xs"
                                                color="warning"
                                                className="mt-1 "
                                            >
                                                Comentar
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </section>
                            <SectionMessage message={message} />
                        </div>
                    ))
                ) : (
                    <Alert color={'warning'}>
                        No hay mensajes para mostrar
                    </Alert>
                )}
            </section>
        </>
    )
}

export default ForumMessage
