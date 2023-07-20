import React from 'react'
import { Table, Alert, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SectionLineUps = ({ match }) => {
    const navigate = useNavigate()
    let i = 1
    let j = 1
    const ID_TENNIS = '648f71eea4ba8860dfe38314'
    const ID_BASEBALL = '648f7211a4ba8860dfe38319'
    if (match?.sport?._id === ID_TENNIS) return null

    return (
        <>
            <Col md={5} className="mx-auto my-1">
                <section>
                    <h5>Alineación visitante</h5>
                    {match?.lineup?.length > 0 ? (
                        <div className="bg-dark rounded section-tables">
                            <Table
                                responsive
                                borderless
                                hover
                                size="sm"
                                variant="dark"
                            >
                                <thead className="border-bottom">
                                    <tr>
                                        {match?.sport?._id === ID_BASEBALL ? (
                                            <th>Orden al bat</th>
                                        ) : null}
                                        <th>Jugador</th>
                                        {match?.sport?._id !== ID_BASEBALL ? (
                                            <th>Posición</th>
                                        ) : null}
                                    </tr>
                                </thead>
                                <tbody>
                                    {match?.lineup?.map((away) =>
                                        away?.away?.map((player) => (
                                            <tr
                                                key={player?.playerId?._id}
                                                onClick={() =>
                                                    navigate(
                                                        `../players/${player?.playerId?._id}`
                                                    )
                                                }
                                            >
                                                {' '}
                                                {match?.sport?._id ===
                                                ID_BASEBALL ? (
                                                    <td>{i++}</td>
                                                ) : null}
                                                <td>
                                                    {player?.playerId?.fullName}
                                                </td>
                                                {match?.sport?._id !==
                                                ID_BASEBALL ? (
                                                    <td>
                                                        {
                                                            player?.playerId
                                                                ?.position
                                                        }
                                                    </td>
                                                ) : null}
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </Table>
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
                            <Table
                                responsive
                                borderless
                                hover
                                size="sm"
                                variant="dark"
                            >
                                <thead className="border-bottom">
                                    <tr>
                                        {match?.sport?._id === ID_BASEBALL ? (
                                            <th>Orden al Bat</th>
                                        ) : null}
                                        <th>Jugador</th>
                                        {match?.sport?._id !== ID_BASEBALL ? (
                                            <th>Posición</th>
                                        ) : null}
                                    </tr>
                                </thead>
                                <tbody>
                                    {match?.lineup?.map((local) =>
                                        local?.local?.map((player) => (
                                            <tr
                                                key={player?.playerId?._id}
                                                onClick={() =>
                                                    navigate(
                                                        `../players/${player?.playerId?._id}`
                                                    )
                                                }
                                            >
                                                {match?.sport?._id ===
                                                ID_BASEBALL ? (
                                                    <td>{j++}</td>
                                                ) : null}
                                                <td>
                                                    {player?.playerId?.fullName}
                                                </td>
                                                {match?.sport?._id !==
                                                ID_BASEBALL ? (
                                                    <td>
                                                        {
                                                            player?.playerId
                                                                ?.position
                                                        }
                                                    </td>
                                                ) : null}
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </Table>
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
