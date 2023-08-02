import React from 'react'
import { Card } from 'react-bootstrap'
const CardSeason = ({ season }) => {
    return (
        <>
            <section>
                <Card className="">
                    <Card.Header>
                        <div className="d-flex justify-content-start">
                            <div>
                                <Card.Img
                                    style={{ width: '50px', height: '50px' }}
                                    src={season.league?.poster}
                                />
                            </div>
                            <div className=" mx-1">
                                <Card.Title className="my-1">
                                    {season?.season}
                                </Card.Title>
                                <Card.Text className="mt-1">
                                    Estatus:{' '}
                                    {season?.status ? (
                                        <span className="text-success">
                                            Abierta
                                        </span>
                                    ) : (
                                        <span className="text-danger">
                                            Cerrada
                                        </span>
                                    )}
                                </Card.Text>
                            </div>
                        </div>
                    </Card.Header>
                </Card>
            </section>
        </>
    )
}
export default CardSeason
