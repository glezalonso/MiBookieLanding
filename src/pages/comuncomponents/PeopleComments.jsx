import React from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authorization'

const PeopleComments = ({ comment }) => {
    const navigate = useNavigate()
    const { username } = useAuthStore((state) => state.profile)

    const handleNavigate = (id) => {
        if (!username)
            return toast.error('Debes iniciar sesión para ir al perfil')
        navigate(`../profile/${id}`)
    }
    return (
        <>
            <div
                className="flex flex-row p-1 justify-start mt-1 w-2/4  overflow-auto"
                key={comment?._id}
            >
                <div className="p-2 m-0.5 text-xs rounded bg-white   ">
                    <div className="flex ">
                        <strong className="mr-0.5 text-xs ">
                            <span
                                className="text-black hover:cursor-pointer"
                                onClick={() =>
                                    handleNavigate(comment?.username?._id)
                                }
                            >
                                {comment?.username?.username}
                            </span>
                        </strong>
                    </div>
                    <div>{comment?.comment}</div>
                </div>
            </div>
        </>
    )
}

export default PeopleComments
