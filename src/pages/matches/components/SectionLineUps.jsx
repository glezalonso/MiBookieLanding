import React from 'react'
import { Alert, Col, Row } from 'react-bootstrap'
import TableAway from './TableAway'
import TableLocal from './TableLocal'

const SectionLineUps = ({ match }) => {
    const ID_TENNIS = '648f71eea4ba8860dfe38314'

    if (match?.sport?._id === ID_TENNIS) return null

    return (
        <>
            <Row className="my-2 mx-auto">
                <Col xs={12} md={7} className="mx-auto my-1 min-vh-50">
                    <section>
                        <h5>Alineación visitante</h5>
                        {match?.lineup?.length > 0 ? (
                            <div className="bg-light rounded section-tables">
                                <TableAway match={match} />
                            </div>
                        ) : (
                            <Alert variant="warning">
                                No hay alineación para mostrar!
                            </Alert>
                        )}
                    </section>
                </Col>
                <Col xs={12} md={7} className="mx-auto my-1 min-vh-50">
                    <section>
                        <h5>Alineación local</h5>
                        {match?.lineup?.length > 0 ? (
                            <div className="bg-light rounded section-tables">
                                <TableLocal match={match} />
                            </div>
                        ) : (
                            <Alert variant="warning">
                                No hay alineación para mostrar!
                            </Alert>
                        )}
                    </section>
                </Col>
            </Row>
        </>
    )
}

export default SectionLineUps
