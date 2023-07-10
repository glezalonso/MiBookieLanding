import React from 'react'
import { Card } from 'react-bootstrap'

const CardSport = ({ sport }) => {
  return (
        <>
        <section>
        <Card>
          <Card.Header>
            <Card.Img src={sport?.poster} alt={`image ${sport.sport}`} />
          <Card.Title>{sport?.sport}</Card.Title>
          <Card.Subtitle>Descripción: {sport?.description}</Card.Subtitle>
          </Card.Header>
        </Card>
        </section>
        </>
  )
}

export default CardSport
