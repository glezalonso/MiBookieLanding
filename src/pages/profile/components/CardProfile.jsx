import React, { useState } from 'react'
import { Button } from 'flowbite-react'
import { useAddFollow } from '../../../features/users.features'
import { useAuthStore } from '../../../store/authorization'
import avatar from '../../../assets/user.png'
import { GearFill } from 'react-bootstrap-icons'
import ChangePicture from './ChangePicture'

const CardProfile = ({ id, user }) => {
    const [show, setShow] = useState(false)
    const userId = useAuthStore((state) => state.profile.id)
    const addFollow = useAddFollow()

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const handleFollow = (follow, follower) => {
        addFollow.mutate({ id: follow, body: { follower } })
    }

    const exist = user?.followers?.filter(
        (follower) => follower?._id === userId
    )

    return (
        <>
            <div className="  max-w-full bg-white  border-gray-200 my-1 p-2 rounded-lg hover:shadow-lg">
                <div className="flex justify-between">
                    <div className="flex justify-center">
                        <img
                            src={user?.avatar || avatar}
                            className="h-14 w-14"
                        />
                        <h4 className="mx-1 my-3">{user?.username}</h4>
                    </div>
                    <div className="flex justify-end">
                        {id !== userId && exist?.length === 0 ? (
                            <h5>
                                <Button
                                    size="xs"
                                    color="warning"
                                    className="my-1"
                                    onClick={() =>
                                        handleFollow(user?._id, userId)
                                    }
                                >
                                    Seguir
                                </Button>
                            </h5>
                        ) : null}
                        {user?._id === userId ? (
                            <GearFill
                                color="grey"
                                className="mx-1"
                                onClick={handleShow}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
            <ChangePicture user={user} show={show} handleClose={handleClose} />
        </>
    )
}

export default CardProfile
