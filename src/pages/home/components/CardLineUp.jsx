import React from 'react'
import { Table } from 'react-bootstrap'

const CardLineUp = ({ match }) => {
    const postion = 'Lanzador'
    return (
        <>
            <div className="d-flex justify-content-center bg-light rounded-bottom">
                <div className="mx-auto">
                    <Table
                        style={{ fontSize: '12px' }}
                        responsive
                        borderless
                        hover
                        size="sm"
                        variant="light"
                    >
                        <thead className="border-bottom">
                            <tr>
                                <th>Jugador</th>
                            </tr>
                        </thead>
                        <tbody>
                            {match?.lineup?.map((away) =>
                                away?.away?.map((player) => (
                                    <tr key={player?.playerId?._id}>
                                        <td>
                                            {player?.playerId?.fullName}
                                            {player?.playerId?.position ===
                                            postion ? (
                                                <span className="mx-1 fw-bold">
                                                    (Lanzador)
                                                </span>
                                            ) : null}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </Table>
                </div>
                <div className="mx-auto">
                    <Table
                        style={{ fontSize: '12px' }}
                        responsive
                        borderless
                        hover
                        size="sm"
                        variant="light"
                    >
                        <thead className="border-bottom">
                            <tr>
                                <th>Jugador</th>
                            </tr>
                        </thead>
                        <tbody>
                            {match?.lineup?.map((local) =>
                                local?.local?.map((player) => (
                                    <tr key={player?.playerId?._id}>
                                        <td>
                                            {player?.playerId?.fullName}
                                            {player?.playerId?.position ===
                                            postion ? (
                                                <span className="mx-1 fw-bold">
                                                    (Lanzador)
                                                </span>
                                            ) : null}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default CardLineUp
