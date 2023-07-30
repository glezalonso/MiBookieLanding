import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useAddFollow } from '../../../features/users.features'
import { useAuthStore } from '../../../store/authorization'

const CardProfile = ({ id, user }) => {
    const userId = useAuthStore((state) => state.profile.id)
    const addFollow = useAddFollow()

    const handleFollow = (follow, follower) => {
        addFollow.mutate({ id: follow, body: { follower } })
    }
    const exist = user?.followers?.filter(
        (follower) => follower.username._id === userId
    )

    return (
        <>
            <Card className="shadow-md">
                <Card.Header>
                    <div className="d-flex justify-content-between">
                        <div>
                            <Card.Title className="my-1">
                                {user?.username}
                            </Card.Title>
                        </div>
                        <div className=" d-flex justify-content-end">
                            {id !== userId && exist?.length < 1 ? (
                                <>
                                    <Button
                                        size="sm"
                                        variant="warning p-1 rounded"
                                        onClick={() =>
                                            handleFollow(user?._id, userId)
                                        }
                                    >
                                        Seguir
                                    </Button>
                                </>
                            ) : null}
                        </div>
                    </div>
                </Card.Header>
            </Card>
        </>
    )
}

export default CardProfile
