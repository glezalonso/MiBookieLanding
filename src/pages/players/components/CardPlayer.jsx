import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardPlayer = ({ player }) => {
  return (
        <>
        <section>
        <Card>
            <Card.Header>
                <Card.Img src={player?.poster} alt={`image ${player?.fullName}`}/>
            <Card.Body>
                <Card.Title>{player?.fullName}</Card.Title>
                <Card.Text>Posición: {player?.position}</Card.Text>
                <Card.Text>Deporte: {player?.sport?.sport}</Card.Text>
                <Card.Text>Equipo: {player?.team ? <Link to={`../teams/${player?.sport?._id}`} className='btn btn-warning btn-sm p-1' >{player?.team?.name}</Link> : <span className='text-danger'>Sin asignar</span>}</Card.Text>
                </Card.Body>
            </Card.Header>
        </Card>
        </section>
        </>
  )
}
export default CardPlayer
