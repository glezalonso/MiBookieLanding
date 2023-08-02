import React from 'react'
import { Card } from 'react-bootstrap'

const CardRound = ({ round }) => {
    return (
        <>
            <section>
                <Card>
                    <Card.Header>
                        <div className="d-flex justify-content-start my-1">
                            <div className="my-2">
                                <Card.Img
                                    style={{ width: '50px', height: '50px' }}
                                    src={round?.league?.poster}
                                />
                            </div>
                            <div className="mx-2">
                                <Card.Title className="my-1">
                                    {round?.round}
                                </Card.Title>
                                <Card.Text>
                                    Temporada: {round?.season?.season}
                                </Card.Text>
                            </div>
                        </div>
                    </Card.Header>
                </Card>
            </section>
        </>
    )
}

export default CardRound
