import React from 'react'
import { Card } from 'react-bootstrap'
import { Clock } from 'react-bootstrap-icons'

const CardNew = ({ content }) => {
  return (
        <>
        <section>
        <Card>
            <Card.Header className='bg-dark text-light'>
                <Card.Title>{content?.title}</Card.Title>
                 <Card.Subtitle>Deporte: {content?.sport?.sport}</Card.Subtitle>
            </Card.Header>
            <Card.Body>
                <Card.Text>{content?.content}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Card.Text>Escrito por: <strong>{content?.author} </strong><Clock /> {content?.date?.split('T', 3).reverse().join(' ')}</Card.Text>
            </Card.Footer>
        </Card>
        </section>
        </>
  )
}

export default CardNew
