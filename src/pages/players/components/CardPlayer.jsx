import React from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardPlayer = ({ player, setKey }) => {
    const ID_FUTBOL = '648f71dea4ba8860dfe3830f'
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
                                    className="btn btn-warning btn-sm"
                                >
                                    {player?.team?.name}
                                </Link>
                            ) : (
                                <span className="text-danger">Sin asignar</span>
                            )}
                        </Card.Text>
                        <ButtonGroup className="d-flex mx-auto mt-3 ">
                            {player?.sport?._id === ID_FUTBOL ? null : (
                                <Button
                                    size="sm"
                                    className=" mx-auto  btn-light rounded "
                                    onClick={() => setKey('posiciones')}
                                >
                                    Posiciones
                                </Button>
                            )}
                            <Button
                                size="sm"
                                className=" mx-auto  btn-light rounded "
                                onClick={() => setKey('proximos')}
                            >
                                Póximos Partidos
                            </Button>

                            <Button
                                size="sm"
                                className=" mx-auto  btn-light rounded "
                                onClick={() => setKey('pasados')}
                            >
                                Úlimos Partidos
                            </Button>
                        </ButtonGroup>
                    </Card.Header>
                </Card>
            </section>
        </>
    )
}
export default CardPlayer
