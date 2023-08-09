import React, { useState } from 'react'
import { Button, Textarea } from 'flowbite-react'
import { useAuthStore } from '../../store/authorization'
import { useAddComment } from '../../features/matches.features'
import { toast } from 'react-hot-toast'

const CardFooter = ({ match }) => {
    const id = useAuthStore((state) => state.profile.id)
    const [comment, setComment] = useState('')
    const addComment = useAddComment()

    const handleSubmit = (e, match) => {
        e.preventDefault()
        if (!id) return toast.error('Debes iniciar sesión para comentar')
        if (comment.length < 1)
            return toast.error('El mensaje debe tener contenido')
        addComment.mutate({ id: match, body: { comment, userId: id } })
        setComment('')
    }

    const isDisable = useAuthStore((state) => state.isDisable)
    return (
        <>
            <div className="rounded  border-gray-500 border-t-1 ">
                <form onSubmit={(e) => handleSubmit(e, match?._id)}>
                    <Textarea
                        className="mt-2 text-base placeholder:text-sm"
                        rows={1}
                        name="comment"
                        placeholder="Ingresa tu comentario"
                        disabled={isDisable}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
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
        </>
    )
}

export default CardFooter
