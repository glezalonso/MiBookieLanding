import React from 'react'
import { Card } from 'react-bootstrap'

const CardTeam = ({ team }) => {
    return (
        <>
            <section>
                <Card className="bg-dark text-light">
                    <Card.Header>
                        <Card.Img
                            src={team?.poster}
                            alt={`image ${team?.name}`}
                        />
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>{team?.name}</Card.Title>
                        <Card.Text className="my-1">
                            Estadio: {team?.stadium}
                        </Card.Text>
                        <Card.Text className="my-1">
                            Deporte: {team?.sport?.sport}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>
        </>
    )
}

export default CardTeam
