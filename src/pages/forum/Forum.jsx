import React, { useState, useRef } from 'react'
import { Alert, Button, Textarea } from 'flowbite-react'
import { useFormik } from 'formik'
import { XCircleFill } from 'react-bootstrap-icons'
import chat from '../../icons/chat.svg'
import {
    useCreateMessage,
    useGetMessages,
    useDeleteMessage,
    useAddcomment,
    useRemovecomment,
} from '../../features/forum.features'
import { useAuthStore } from '../../store/authorization'
import getHour from '../../utils/getHour'
import People from './components/People'
import Personal from './components/Personal'
import { validatePost } from '../../helpers/validations'

const Forum = () => {
    const [file, setFile] = useState()
    const create = useCreateMessage()
    const remove = useDeleteMessage()
    const addComment = useAddcomment()
    const ref = useRef()
    const removeComment = useRemovecomment()
    const date = new Date().toISOString()
    const userId = useAuthStore((state) => state.profile.id)
    const [comment, setComment] = useState('')
    const hour = getHour()
    const { data: message, isLoading, isError } = useGetMessages()

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            message: '',
        },
        validate: validatePost,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: (values) => {
            values = Object.assign(values, {
                user: userId,
                image: file,
                date,
            })
            create.mutate(values)
            formik.resetForm()
            ref.current.reset()
        },
    })

    const onUpload = (event) => {
        setFile(event.target.files[0])
    }

    const handleDelete = (id) => {
        const ok = confirm('Esta seguro que desa borrar')
        if (ok) remove.mutate(id)
    }

    const handleSubmit = (e, id) => {
        e.preventDefault()
        if (!userId) return toast.error('Debes iniciar sesión para comentar')
        if (comment.length < 1)
            return toast.error('El mensaje debe tener contenido')
        addComment.mutate({ id, body: { comment, hour, username: userId } })
        setComment('')
    }
    console.log()
    return (
        <main className="container mx-auto min-h-screen p-1 lg:w-4/6">
            <div className="max-w-full mx-auto bg-white my-1 p-5 rounded-lg lg:w-3/4 shadow-xl">
                <h1 className="flex gap-1  items-center text-gray-950 font-bold  font-sans text-lg">
                    <img src={chat} alt="foro" className="h-5 w-5" /> Foro
                </h1>
                <section className=" flex justify-center items-center mb-1">
                    <form
                        ref={ref}
                        className="w-full  text-sm space-y-2"
                        onSubmit={formik.handleSubmit}
                    >
                        <label className="block my-1">Comparte tus picks</label>
                        <textarea
                            {...formik.getFieldProps('message')}
                            name="message"
                            id="message"
                            rows={3}
                            placeholder="Escribe tu mensaje"
                            className="w-full rounded-md text-gray-600 text-sm"
                        />

                        <input
                            className="rounded-md p-0 text-xs self-end"
                            type="file"
                            name="image"
                            id="image"
                            onChange={onUpload}
                        />

                        <div className="w-full flex justify-end">
                            <Button
                                size="xs"
                                className="mt-2"
                                color="warning"
                                type="submit"
                            >
                                Enviar post
                            </Button>
                        </div>
                    </form>
                </section>
            </div>
            <section>
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
                                    <XCircleFill
                                        color="red"
                                        onClick={() =>
                                            handleDelete(message?._id)
                                        }
                                    />{' '}
                                </span>
                            </div>
                            <p className="break-words border-b-2 p-2 text-sm my-3">
                                {message.message}
                            </p>
                            {message?.images?.length > 0 && (
                                <div className="flex items-center justify-center">
                                    <img
                                        src={message?.images}
                                        alt="images"
                                        className="rounded-t-lg  bg-black  sm:w-1/2 sm:h-1/3   "
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
                            <div className="bg-zinc-950 max-h-56 overflow-auto my-1 rounded border-t-2 p-1">
                                {message?.comments?.length > 0 ? (
                                    message?.comments?.map((comment) =>
                                        comment?.username?._id === userId ? (
                                            <Personal
                                                key={comment?._id}
                                                message={message}
                                                comment={comment}
                                            />
                                        ) : (
                                            <People
                                                key={comment?._id}
                                                comment={comment}
                                            />
                                        )
                                    )
                                ) : (
                                    <Alert
                                        color="warning"
                                        className="mx-3 p-2 my-2 "
                                    >
                                        No hay comentarios para mostrar!
                                    </Alert>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <Alert color={'warning'}>
                        No hay mensajes para mostrar
                    </Alert>
                )}
            </section>
        </main>
    )
}

export default Forum
