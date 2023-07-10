import React from 'react'
import { Card } from 'react-bootstrap'
const CardSeason = ({ season }) => {
  return (
        <>
        <section>
        <Card>
            <Card.Body>
                <Card.Title>{season?.season}</Card.Title>
                <Card.Text>Descripción: {season?.description}</Card.Text>
                <Card.Text>Deporte: {season?.sport?.sport}</Card.Text>
                <Card.Text>Liga: {season?.league?.league}</Card.Text>
                <Card.Text>Estatus: {season?.status ? <span className='text-success'>Abierta</span> : <span className='text-danger'>Cerrada</span>}</Card.Text>
            </Card.Body>
        </Card>
        </section>
        </>
  )
}
export default CardSeason
