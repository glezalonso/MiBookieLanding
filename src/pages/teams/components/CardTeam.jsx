import React from 'react'
import { Card } from 'react-bootstrap'

const CardTeam = ({ team }) => {
  return (
        <>
        <section >
        <Card>
            <Card.Header>
                <Card.Img src={team?.poster} alt={`image ${team?.name}`}/>
            </Card.Header>
            <Card.Body>
                <Card.Title>{team?.name}</Card.Title>
                <Card.Text>Estadio: {team?.stadium}</Card.Text>
                <Card.Text>Deporte: {team?.sport?.sport}</Card.Text>
            </Card.Body>
        </Card>
        </section>
        </>
  )
}

export default CardTeam
