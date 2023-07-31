import React, { useState } from 'react'
import { Card, FormControl, Form, Button } from 'react-bootstrap'
import { useAuthStore } from '../../../store/authorization'
import { useAddComment } from '../../../features/matches.features'
import { toast } from 'react-hot-toast'

const CardFooter = ({ match }) => {
    const id = useAuthStore((state) => state.profile.id)
    const [comment, setComment] = useState('')
    const addComment = useAddComment()

    const handleSubmit = (e, match) => {
        e.preventDefault()
        if (!id) return toast.error('Debes iniciar sesión para comentar')
        if (comment.length < 1) toast.error('El mensaje debe tener contenido')
        addComment.mutate({ id: match, body: { comment, userId: id } })
        setComment('')
    }

    const isDisable = useAuthStore((state) => state.isDisable)
    return (
        <>
            <Card.Footer className="bg-light shadow-lg rounded border-secondary  border-top">
                <Form onSubmit={(e) => handleSubmit(e, match?._id)}>
                    <FormControl
                        className="my-1"
                        as="textarea"
                        rows={2}
                        name="comment"
                        placeholder="Ingresa tu comentario"
                        disabled={isDisable}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <div className="d-flex justify-content-end">
                        <Button
                            type="submit"
                            className=" btn btn-warning btn-sm mt-2 "
                        >
                            Comentar
                        </Button>
                    </div>
                </Form>
            </Card.Footer>
        </>
    )
}

export default CardFooter
