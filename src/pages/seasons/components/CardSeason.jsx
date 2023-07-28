import React from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap'
const CardSeason = ({ season, setKey }) => {
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
                                <Card.Title>{season?.season}</Card.Title>
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
                        <ButtonGroup className="d-flex mx-auto mt-3 ">
                            <Button
                                size="sm"
                                className=" mx-auto  btn-light rounded "
                                onClick={() => setKey('posiciones')}
                            >
                                Posiciones
                            </Button>
                            <Button
                                size="sm"
                                className=" mx-auto  btn-light rounded "
                                onClick={() => setKey('rondas')}
                            >
                                Rondas
                            </Button>
                        </ButtonGroup>
                    </Card.Header>
                </Card>
            </section>
        </>
    )
}
export default CardSeason
