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

    const handleRemove = (comment, hour, commentId, matchId) => {
        const sure = confirm('Quieres borrar el comentario?')
        if (sure)
            return removeComment.mutate({
                id: matchId,
                body: { comment, hour, commentId, userId: id },
            })
    }
    const handleNavigate = (id) => {
        if (!username)
            return toast.error('Debes iniciar sesión para ir al perfil')
        navigate(`../profile/${id}`)
    }
    return (
        <>
            <div className="flex p-1 justify-end  mb-1 overflow-auto ">
                <div className="p-1  text-xs  bg-gray-900  rounded-md  text-end">
                    <div className="flex justify-between gap-2 text-white font-bold text-xs">
                        <div
                            onClick={() =>
                                handleNavigate(comment?.username?._id)
                            }
                            className="ml-1 hover:cursor-pointer  "
                        >
                            {comment?.username?.username}
                        </div>
                        <div className="flex gap-1 text-xs text-gray-500">
                            {comment?.hour}
                            <XCircleFill
                                color="red"
                                onClick={() =>
                                    handleRemove(
                                        comment?.comment,
                                        comment?.hour,
                                        comment?._id,
                                        match?._id
                                    )
                                }
                                className="hover:cursor-pointer"
                            />
                        </div>
                    </div>
                    <div className="p-1 text-end">
                        <p className=" text-gray-200">{comment?.comment}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonalComments
