import React from 'react'
import { Card } from 'react-bootstrap'

const CardSport = ({ sport }) => {
    return (
        <>
            <section>
                <div className=" my-2 text-dark">
                    <Card.Title className="d-flex mx-1">
                        <div className="my-1">
                            <img
                                style={{ width: '30px', height: '30px' }}
                                src={sport?.poster}
                                alt={sport?.sport}
                            />
                        </div>
                        <div className="mx-1 my-2">
                            <span className=" mx-1">{sport?.sport}</span>
                        </div>
                    </Card.Title>
                </div>
            </section>
        </>
    )
}

export default CardSport
