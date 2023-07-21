import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Table } from 'react-bootstrap'

const TableLocal = ({ match }) => {
    const navigate = useNavigate()
    let j = 1
    const position = 'Lanzador'
    const ID_BASEBALL = '648f7211a4ba8860dfe38319'
    return (
        <>
            <Table responsive borderless hover size="sm" variant="dark">
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
                                {match?.sport?._id === ID_BASEBALL ? (
                                    <td>
                                        {player?.playerId?.position ===
                                        position ? (
                                            <span>Lanzador</span>
                                        ) : (
                                            j++
                                        )}
                                    </td>
                                ) : null}
                                <td>{player?.playerId?.fullName}</td>
                                {match?.sport?._id !== ID_BASEBALL ? (
                                    <td>{player?.playerId?.position}</td>
                                ) : null}
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        </>
    )
}

export default TableLocal
