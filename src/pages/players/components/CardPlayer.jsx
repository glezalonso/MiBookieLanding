import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardPlayer = ({ player }) => {
    return (
        <>
            <section>
                <Card className="bg-dark text-light">
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
                                    to={`../teams/${player?.sport?._id}`}
                                    className="btn btn-warning btn-sm"
                                >
                                    {player?.team?.name}
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
