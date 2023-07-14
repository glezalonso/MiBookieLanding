import React from 'react'
import { Card } from 'react-bootstrap'

const CardRound = ({ round }) => {
    return (
        <>
            <section>
                <Card className="bg-dark text-light">
                    <Card.Body>
                        <Card.Title>{round?.round}</Card.Title>
                        <Card.Text className="my-1">
                            Temporada: {round?.season?.season}
                        </Card.Text>
                        <Card.Text className="my-1">
                            Liga: {round?.league?.league}
                        </Card.Text>
                        <Card.Text className="my-1">
                            Deporte: {round?.sport?.sport}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>
        </>
    )
}

export default CardRound
