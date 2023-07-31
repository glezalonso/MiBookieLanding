import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useAddFollow } from '../../../features/users.features'
import { useAuthStore } from '../../../store/authorization'
import avatar from '../../../assets/avatar.png'

const CardProfile = ({ id, user }) => {
    const userId = useAuthStore((state) => state.profile.id)
    const addFollow = useAddFollow()

    const handleFollow = (follow, follower) => {
        addFollow.mutate({ id: follow, body: { follower } })
    }

    const exist = user?.followers?.filter(
        (follower) => follower?._id === userId
    )

    return (
        <>
            <Card className="shadow-md">
                <Card.Header>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-center">
                            <Card.Img
                                src={avatar}
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
                        </div>
                    </div>
                </Card.Header>
            </Card>
        </>
    )
}

export default CardProfile
