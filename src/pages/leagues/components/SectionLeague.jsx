import React from 'react'
import { Card, ButtonGroup, Button } from 'react-bootstrap'

const SectionLeague = ({ league, setKey }) => {
    return (
        <>
            <section>
                <Card>
                    <Card.Header>
                        <div className="d-flex justify-content-start">
                            <div>
                                <Card.Img
                                    style={{ width: '50px', height: '50px' }}
                                    src={league?.poster}
                                />
                            </div>
                            <div className="mt-3 mx-1">
                                <Card.Title>{league?.league}</Card.Title>
                            </div>
                        </div>

                        <ButtonGroup className="d-flex mx-auto mt-3 ">
                            <Button
                                size="sm"
                                className=" btn-light rounded "
                                onClick={() => setKey('temporadas')}
                            >
                                Temporadas
                            </Button>
                            <Button
                                size="sm"
                                className="btn-light rounded "
                                onClick={() => setKey('proximos')}
                            >
                                Próximos partidos
                            </Button>
                            <Button
                                size="sm"
                                className="  btn-light rounded "
                                onClick={() => setKey('ultimos')}
                            >
                                Últimos partidos
                            </Button>
                        </ButtonGroup>
                    </Card.Header>
                </Card>
            </section>
        </>
    )
}

export default SectionLeague
