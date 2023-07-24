import React from 'react'
import { Card } from 'react-bootstrap'

const CardSport = ({ sport }) => {
    return (
        <>
            <section>
                <Card className="bg-dark my-2 text-light">
                    <Card.Title className="my-1">
                        <img
                            style={{ width: '30px', height: '30px' }}
                            src={sport?.poster}
                            alt={sport?.sport}
                        ></img>
                        <span className="mx-1">{sport?.sport}</span>
                    </Card.Title>
                </Card>
            </section>
        </>
    )
}

export default CardSport
