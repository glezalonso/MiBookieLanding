import React from 'react'
import { Card, Alert } from 'react-bootstrap'
import { XCircleFill } from 'react-bootstrap-icons'
import { useAuthStore } from '../../../store/authorization'

const CardComments = ({ match, handleRemove }) => {
    const username = useAuthStore((state) => state.profile)
    return (
        <>
            <Card.Body style={{ background: 'rgb(58, 58, 58)' }}>
                {match?.comments?.length > 0 ? (
                    match?.comments?.map((comment) =>
                        comment?.username === username ? (
                            <div
                                className="d-flex flex-row justify-content-end my-2 overflow-auto "
                                key={comment?._id}
                            >
                                <div
                                    className="p-2 ms-5 bg-light  rounded text-end"
                                    style={{
                                        margin: '1px',
                                        fontSize: '12px',
                                    }}
                                >
                                    <strong
                                        className="text-dark"
                                        style={{
                                            marginRight: '2px',
                                            fontSize: '12px',
                                        }}
                                    >
                                        {comment?.username}:
                                    </strong>
                                    {comment?.comment}{' '}
                                    <XCircleFill
                                        color="red"
                                        onClick={() =>
                                            handleRemove(
                                                comment?.comment,
                                                comment?._id,
                                                match?._id
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        ) : (
                            <div
                                className="d-flex flex-row justify-content-start my-3 overflow-auto"
                                key={comment?._id}
                            >
                                <div
                                    className="p-2 rounded bg-dark text-light "
                                    style={{
                                        margin: '1px',
                                        fontSize: '12px',
                                    }}
                                >
                                    <strong
                                        style={{
                                            marginRight: '2px',
                                            fontSize: '12px',
                                        }}
                                    >
                                        {comment?.username}:{' '}
                                    </strong>
                                    {comment?.comment}
                                </div>
                            </div>
                        )
                    )
                ) : (
                    <Alert variant="warning mx-3 ">
                        No hay comentarios para mostrar!
                    </Alert>
                )}
            </Card.Body>
        </>
    )
}

export default CardComments
