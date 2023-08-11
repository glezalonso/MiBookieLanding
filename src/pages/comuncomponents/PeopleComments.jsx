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
                className="flex p-1 justify-start mt-1 w-2/4 overflow-auto"
                key={comment?._id}
            >
                <div className="p-1  text-xs  bg-gray-900  rounded-md  text-end">
                    <div
                        onClick={() => handleNavigate(comment?.username?._id)}
                        className="mr-1 hover:cursor-pointer"
                    >
                        <span className="flex justify-between gap-1  text-white font-bold text-xs">
                            <div className="ml-1">
                                {comment?.username?.username}
                            </div>
                            <div className="flex ml-1 text-xs text-gray-500">
                                {comment?.hour}
                            </div>
                        </span>
                    </div>
                    <div className="p-1 text-start ">
                        <p className=" text-gray-200">{comment?.comment}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PeopleComments
