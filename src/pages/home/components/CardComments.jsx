import React from 'react'
import { Card, Alert } from 'react-bootstrap'
import { XCircleFill } from 'react-bootstrap-icons'
import { useAuthStore } from '../../../store/authorization'
import { useRemoveComment } from '../../../features/matches.features'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const CardComments = ({ match }) => {
    const { username, id } = useAuthStore((state) => state.profile)
    const navigate = useNavigate()

    const removeComment = useRemoveComment()

    const handleRemove = (comment, commentId, matchId) => {
        const sure = confirm('Quieres borrar el comentario?')
        if (sure)
            return removeComment.mutate({
                id: matchId,
                body: { comment, commentId, userId: id },
            })
    }

    const handleNavigate = (id) => {
        if (!username)
            return toast.error('Debes iniciar sesión para ir al perfil')
        navigate(`../profile/${id}`)
    }

    return (
        <>
            <Card.Body
                style={{
                    maxHeight: '200px',
                    overflow: 'auto',
                }}
                className="bg-dark"
            >
                {match?.comments?.length > 0 ? (
                    match?.comments?.map((comment) =>
                        comment?.username?._id === id ? (
                            <div
                                className="d-flex flex-row justify-content-end my-1 overflow-auto "
                                key={comment?._id}
                            >
                                <div
                                    className="p-1 ms-5 bg-light  rounded text-end"
                                    style={{
                                        fontSize: '13px',
                                    }}
                                >
                                    <strong
                                        className="text-dark"
                                        style={{
                                            marginRight: '2px',
                                            fontSize: '13px',
                                        }}
                                    >
                                        <span
                                            className="text-dark profile"
                                            onClick={() =>
                                                handleNavigate(
                                                    comment?.username?._id
                                                )
                                            }
                                        >
                                            {comment?.username?.username} :
                                        </span>
                                    </strong>
                                    {comment?.comment}{' '}
                                    <XCircleFill
                                        color="red"
                                        onClick={() =>
                                            handleRemove(
                                                comment?.comment,
                                                comment?._id,
                                                match?._id
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        ) : (
                            <div
                                className="d-flex flex-row justify-content-start my-1 overflow-auto"
                                key={comment?._id}
                            >
                                <div
                                    className="p-1 rounded bg-secondary  text-light "
                                    style={{
                                        margin: '1px',
                                        fontSize: '13px',
                                    }}
                                >
                                    <strong
                                        style={{
                                            marginRight: '2px',
                                            fontSize: '13px',
                                        }}
                                    >
                                        <span
                                            className="text-light profile"
                                            onClick={() =>
                                                handleNavigate(
                                                    comment?.username?._id
                                                )
                                            }
                                        >
                                            {comment?.username?.username} :
                                        </span>
                                    </strong>
                                    {comment?.comment}
                                </div>
                            </div>
                        )
                    )
                ) : (
                    <Alert variant="warning mx-3 my-1 ">
                        No hay comentarios para mostrar!
                    </Alert>
                )}
            </Card.Body>
        </>
    )
}

export default CardComments
