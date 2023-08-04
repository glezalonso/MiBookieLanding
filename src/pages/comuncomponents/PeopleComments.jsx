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
                                handleNavigate(comment?.username?._id)
                            }
                        >
                            {comment?.username?.username} :
                        </span>
                    </strong>
                    {comment?.comment}
                </div>
            </div>
        </>
    )
}

export default PeopleComments
