import React from 'react'
import { Card } from 'react-bootstrap'

const CardRound = ({ round }) => {
  return (
        <>
        <Card className='bg-dark text-light'>
            <Card.Body>
                <Card.Title>{round?.round}</Card.Title>
                <Card.Text>Temporada: {round?.season?.season}</Card.Text>
                <Card.Text>Liga: {round?.league?.league}</Card.Text>
                <Card.Text>Deporte: {round?.sport?.sport}</Card.Text>
            </Card.Body>
        </Card>
        </>
  )
}

export default CardRound
