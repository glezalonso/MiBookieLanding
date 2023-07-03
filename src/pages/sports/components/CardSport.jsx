import React from 'react'
import { Card } from 'react-bootstrap'

const CardSport = ({ sport }) => {
  return (
        <>
        <Card>
          <Card.Header>
            <Card.Img src={sport?.poster} alt={`image ${sport.sport}`} />
          <Card.Title>{sport?.sport}</Card.Title>
          <Card.Subtitle>Description: {sport?.description}</Card.Subtitle>
          </Card.Header>
        </Card>
        </>
  )
}

export default CardSport
