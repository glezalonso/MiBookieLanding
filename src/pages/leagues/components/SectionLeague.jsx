import React from 'react'
import { Card } from 'react-bootstrap'

const SectionLeague = ({ league }) => {
    return (
        <>
            <section>
                <Card className="bg-dark text-light">
                    <Card.Header>
                        <Card.Title>{league?.league}</Card.Title>
                        <Card.Text>
                            Descripción: {league?.description}
                        </Card.Text>
                        <Card.Text>Deporte: {league?.sport?.sport}</Card.Text>
                    </Card.Header>
                </Card>
            </section>
        </>
    )
}

export default SectionLeague
