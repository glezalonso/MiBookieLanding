import React from 'react'
import { Card } from 'react-bootstrap'

const CardTeam = ({ team }) => {
    return (
        <>
            <section>
                <Card>
                    <Card.Header className="d-flex justify-content-center align-items-center">
                        <div className="d-flex justify-content-start">
                            <Card.Img
                                style={{
                                    height: '100px',
                                    width: '100px',
                                }}
                                src={team?.poster}
                                alt={`image ${team?.name}`}
                            />
                        </div>
                        <div className="d-flex justify-content-end">
                            <Card.Body>
                                <Card.Title>{team?.name}</Card.Title>
                                <Card.Text className="my-1">
                                    Estadio: {team?.stadium}
                                </Card.Text>
                                <Card.Text className="my-1">
                                    Deporte: {team?.sport?.sport}
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card.Header>
                </Card>
            </section>
        </>
    )
}

export default CardTeam
