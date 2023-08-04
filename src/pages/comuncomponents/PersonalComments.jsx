import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { XCircleFill } from 'react-bootstrap-icons'
import { useRemoveComment } from '../../features/matches.features'
import { useAuthStore } from '../../store/authorization'

const PersonalComments = ({ match, comment }) => {
    const navigate = useNavigate()
    const { username, id } = useAuthStore((state) => state.profile)
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
            <div className="d-flex flex-row justify-content-end my-1 overflow-auto ">
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
                                handleNavigate(comment?.username?._id)
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
        </>
    )
}

export default PersonalComments
