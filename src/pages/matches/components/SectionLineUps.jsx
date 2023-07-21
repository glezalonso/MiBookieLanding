import React from 'react'
import { Alert, Col } from 'react-bootstrap'
import TableAway from './TableAway'
import TableLocal from './TableLocal'

const SectionLineUps = ({ match }) => {
    const ID_TENNIS = '648f71eea4ba8860dfe38314'

    if (match?.sport?._id === ID_TENNIS) return null

    return (
        <>
            <Col md={5} className="mx-auto my-1">
                <section>
                    <h5>Alineación visitante</h5>
                    {match?.lineup?.length > 0 ? (
                        <div className="bg-dark rounded section-tables">
                            <TableAway match={match} />
                        </div>
                    ) : (
                        <Alert variant="warning">
                            No hay alineación para mostrar!
                        </Alert>
                    )}
                </section>
            </Col>
            <Col md={5} className="mx-auto my-1">
                <section>
                    <h5>Alineación local</h5>
                    {match?.lineup?.length > 0 ? (
                        <div className="bg-dark rounded section-tables">
                            <TableLocal match={match} />
                        </div>
                    ) : (
                        <Alert variant="warning">
                            No hay alineación para mostrar!
                        </Alert>
                    )}
                </section>
            </Col>
        </>
    )
}

export default SectionLineUps
