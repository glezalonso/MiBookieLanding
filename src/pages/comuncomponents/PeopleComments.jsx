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
                className="flex  p-1 justify-start mt-1 overflow-auto"
                key={comment?._id}
            >
                <div className="p-1  text-xs bg-gray-800 w-2/4 rounded-md  text-end">
                    <div className="flex justify-between gap-1 text-white font-bold text-xs">
                        <div
                            onClick={() =>
                                handleNavigate(comment?.username?._id)
                            }
                            className="ml-1 hover:cursor-pointer hover:scale-x-110"
                        >
                            <span>{comment?.username?.username}</span>
                        </div>
                        <div className="flex ml-1 text-xs text-gray-500">
                            {comment?.hour}
                        </div>
                    </div>

                    <div className="p-1 text-start  ">
                        <p
                            className={`max-w-sm ${comment?.comment?.includes(' ')
                                    ? 'break-words'
                                    : 'break-all'
                                } text-gray-200`}
                        >
                            {comment?.comment}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PeopleComments
