import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
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
            <Card>
                <Card.Header>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-center">
                            <Card.Img
                                src={user?.avatar || avatar}
                                style={{ width: '60px', height: '60px' }}
                            />
                            <Card.Title className="my-3">
                                {user?.username}
                            </Card.Title>
                        </div>
                        <div className=" d-flex justify-content-end">
                            {id !== userId && exist?.length === 0 ? (
                                <Card.Subtitle>
                                    <Button
                                        size="sm"
                                        variant="warning p-1 rounded my-1"
                                        onClick={() =>
                                            handleFollow(user?._id, userId)
                                        }
                                    >
                                        Seguir
                                    </Button>
                                </Card.Subtitle>
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
                </Card.Header>
            </Card>
            <ChangePicture user={user} show={show} handleClose={handleClose} />
        </>
    )
}

export default CardProfile
