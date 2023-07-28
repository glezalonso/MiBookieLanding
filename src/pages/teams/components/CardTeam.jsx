import React from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap'

const CardTeam = ({ team, setKey }) => {
    const ID_FUTBOL = '648f71dea4ba8860dfe3830f'
    return (
        <>
            <section>
                <Card>
                    <Card.Header>
                        <div className="d-flex justify-content-start">
                            <div>
                                <Card.Img
                                    style={{
                                        height: '100px',
                                        width: '100px',
                                    }}
                                    src={team?.poster}
                                    alt={`image ${team?.name}`}
                                />
                            </div>

                            <div className="mt-1 mx-1">
                                <Card.Title>{team?.name}</Card.Title>
                                <Card.Text className="my-1">
                                    Estadio: {team?.stadium}
                                </Card.Text>
                                <Card.Text className="my-1">
                                    Deporte: {team?.sport?.sport}
                                </Card.Text>
                            </div>
                        </div>
                        <ButtonGroup className="d-flex  mx-auto mt-2">
                            {team?.sport?._id === ID_FUTBOL ? null : (
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
                                onClick={() => setKey('plantilla')}
                            >
                                Plantilla
                            </Button>
                            <Button
                                size="sm"
                                className=" mx-auto  btn-light rounded "
                                onClick={() => setKey('proximos')}
                            >
                                Próximos partidos
                            </Button>

                            <Button
                                size="sm"
                                className=" mx-auto  btn-light rounded "
                                onClick={() => setKey('pasados')}
                            >
                                Últimos partidos
                            </Button>
                        </ButtonGroup>
                    </Card.Header>
                </Card>
            </section>
        </>
    )
}

export default CardTeam
