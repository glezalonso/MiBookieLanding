import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardPlayer = ({ player }) => {
  return (
        <>
        <Card>
            <Card.Header>
                <Card.Img src={player?.poster} alt={`image ${player?.fullName}`}/>
            <Card.Body>
                <Card.Title>{player?.fullName}</Card.Title>
                <Card.Text>Position: {player?.position}</Card.Text>
                <Card.Text>Sport: {player?.sport?.sport}</Card.Text>
                <Card.Text>Team: {player?.team ? <Link to={`../teams/${player?.sport?._id}`} className='btn btn-warning btn-sm p-1' >{player?.team?.name}</Link> : <span className='text-danger'>Unasigned</span>}</Card.Text>
                </Card.Body>
            </Card.Header>
        </Card>
        </>
  )
}
export default CardPlayer
