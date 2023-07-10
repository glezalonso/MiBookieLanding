import React from 'react'
import { Card } from 'react-bootstrap'

const SectionLeague = ({ league }) => {
  return (
        <>
        <section>
        <Card >
            <Card.Header>
                <Card.Title>{league?.league}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>Descripción: {league?.description}</Card.Text>
                <Card.Text>Deporte: {league?.sport?.sport}</Card.Text>
            </Card.Body>
        </Card>
        </section>
        </>
  )
}

export default SectionLeague
