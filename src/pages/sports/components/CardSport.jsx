import React from 'react'
import { Card } from 'react-bootstrap'

const CardSport = ({ sport }) => {
    return (
        <>
            <section>
                <Card className="bg-dark text-light">
                    <Card.Header>
                        <Card.Title>{sport?.sport}</Card.Title>
                        <Card.Subtitle>
                            Descripción: {sport?.description}
                        </Card.Subtitle>
                    </Card.Header>
                </Card>
            </section>
        </>
    )
}

export default CardSport
