import React from 'react'
import { Card } from 'react-bootstrap'
const CardSeason = ({ season }) => {
  return (
        <>
        <section>
        <Card>
            <Card.Body>
                <Card.Title>{season?.season}</Card.Title>
                <Card.Text>Description: {season?.description}</Card.Text>
                <Card.Text>Sport: {season?.sport?.sport}</Card.Text>
                <Card.Text>League: {season?.league?.league}</Card.Text>
                <Card.Text>Status: {season?.status ? <span className='text-success'>Current</span> : <span className='text-danger'>Closed</span>}</Card.Text>
            </Card.Body>
        </Card>
        </section>
        </>
  )
}
export default CardSeason
