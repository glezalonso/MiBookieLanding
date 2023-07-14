import React from 'react'
import { Card } from 'react-bootstrap'
const CardSeason = ({ season }) => {
    return (
        <>
            <section>
                <Card className="bg-dark text-light">
                    <Card.Body>
                        <Card.Title>{season?.season}</Card.Title>
                        <Card.Text className="my-1">
                            Descripción: {season?.description}
                        </Card.Text>
                        <Card.Text className="my-1">
                            Deporte: {season?.sport?.sport}
                        </Card.Text>
                        <Card.Text className="my-1">
                            Liga: {season?.league?.league}
                        </Card.Text>
                        <Card.Text className="my-1">
                            Estatus:{' '}
                            {season?.status ? (
                                <span className="text-success">Abierta</span>
                            ) : (
                                <span className="text-danger">Cerrada</span>
                            )}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>
        </>
    )
}
export default CardSeason
