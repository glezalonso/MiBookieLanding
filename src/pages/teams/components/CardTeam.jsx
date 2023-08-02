import React from 'react'
import { Card } from 'react-bootstrap'

const CardTeam = ({ team, setKey }) => {
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
                    </Card.Header>
                </Card>
            </section>
        </>
    )
}

export default CardTeam
