import React from 'react'
import { Card } from 'react-bootstrap'

const CardRound = ({ round }) => {
    return (
        <>
            <section>
                <div className=" my-2 text-dark">
                    <Card.Title className="d-flex mx-1">
                        <div className="my-1">
                            <img
                                style={{ width: '50px', height: '50px' }}
                                src={round?.league?.poster}
                            />
                        </div>
                        <div>
                            <div className="mx-1 mt-2">
                                <span className=" mx-1 fs-5">
                                    {round?.round}
                                </span>
                            </div>
                            <div className="mx-1 ">
                                <span className=" mx-1 fs-6">
                                    Temporada: {round?.season?.season}
                                </span>
                            </div>
                        </div>
                    </Card.Title>
                </div>
            </section>
        </>
    )
}

export default CardRound
