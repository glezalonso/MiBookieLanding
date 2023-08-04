import React from 'react'
import { Card, Alert } from 'react-bootstrap'
import { useAuthStore } from '../../store/authorization'
import PersonalComments from './PersonalComments'
import PeopleComments from './PeopleComments'

const CardComments = ({ match }) => {
    const { id } = useAuthStore((state) => state.profile)

    return (
        <>
            <Card.Body
                style={{
                    maxHeight: '200px',
                    overflow: 'auto',
                }}
                className="bg-dark"
            >
                {match?.comments?.length > 0 ? (
                    match?.comments?.map((comment) =>
                        comment?.username?._id === id ? (
                            <PersonalComments
                                key={comment?._id}
                                match={match}
                                comment={comment}
                            />
                        ) : (
                            <PeopleComments
                                key={comment?._id}
                                comment={comment}
                            />
                        )
                    )
                ) : (
                    <Alert variant="warning mx-3 my-1 ">
                        No hay comentarios para mostrar!
                    </Alert>
                )}
            </Card.Body>
        </>
    )
}

export default CardComments
