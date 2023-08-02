import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardPlayer = ({ player }) => {
    return (
        <>
            <section>
                <Card>
                    <Card.Header>
                        <Card.Title>{player?.fullName}</Card.Title>
                        <Card.Text className="my-1">
                            Posición: {player?.position}
                        </Card.Text>
                        <Card.Text className="my-1">
                            Deporte: {player?.sport?.sport}
                        </Card.Text>
                        <Card.Text className="my-1">
                            Equipo:{' '}
                            {player?.team ? (
                                <Link
                                    to={`../teams/${player?.team?._id}`}
                                    className="btn btn-sm btn-outline-dark"
                                >
                                    <img
                                        style={{
                                            width: '15px',
                                            height: '15px',
                                        }}
                                        src={player?.team?.poster}
                                        alt={player?.team?.name}
                                    />
                                    <span className="mx-1">
                                        {player?.team?.name}
                                    </span>
                                </Link>
                            ) : (
                                <span className="text-danger">Sin asignar</span>
                            )}
                        </Card.Text>
                    </Card.Header>
                </Card>
            </section>
        </>
    )
}
export default CardPlayer
