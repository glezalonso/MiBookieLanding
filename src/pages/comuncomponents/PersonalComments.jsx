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
            <div className="flex  p-1 justify-end   mb-1 overflow-auto ">
                <div className="p-1 ml-2 bg-white text-xs  rounded text-end">
                    <div className="flex ">
                        <strong className="text-dark mr-0.5 text-xs">
                            <span
                                className="text-dark profile"
                                onClick={() =>
                                    handleNavigate(comment?.username?._id)
                                }
                            >
                                {comment?.username?.username}
                            </span>
                        </strong>
                    </div>
                    <div className=" flex justify-end">
                        <div>{comment?.comment}</div>

                        <XCircleFill
                            color="red"
                            className="mt-0.5 mx-0.5"
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
            </div>
        </>
    )
}

export default PersonalComments
