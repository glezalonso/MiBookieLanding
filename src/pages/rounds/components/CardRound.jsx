import React from 'react'
import { Card } from 'react-bootstrap'

const CardRound = ({ round }) => {
    return (
        <>
            <section>
                <Card>
                    <Card.Header>
                        <div className="d-flex justify-content-start my-1">
                            <div>
                                <Card.Img
                                    width={50}
                                    height={50}
                                    src={round?.league?.poster}
                                />
                            </div>
                            <div className="mx-2">
                                <Card.Title>{round?.round}</Card.Title>
                                <Card.Text className="">
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
