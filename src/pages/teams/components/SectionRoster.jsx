import React, { useState } from 'react'
import { Table, FormControl, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SectionRoster = ({ team }) => {
    const [filter, setFilter] = useState('')
    const navigate = useNavigate()

    const playerFilter = team?.players?.filter((player) => {
        if (!filter) return player
        return player?.player?.toLowerCase().includes(filter.toLowerCase())
    })
    return (
        <>
            <section>
                <h5>Plantilla</h5>
                <div className="my-2 mx-auto p-1">
                    <FormControl
                        style={{ fontSize: '14px' }}
                        name="player"
                        placeholder="Nombre del jugador..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                {playerFilter?.length > 0 ? (
                    <div className="bg-light rounded section-tables">
                        <Table
                            responsive
                            borderless
                            hover
                            size="sm"
                            variant="light"
                        >
                            <thead className="border-bottom">
                                <tr>
                                    <th>Jugador</th>
                                    <th>Posición</th>
                                </tr>
                            </thead>
                            <tbody>
                                {playerFilter?.map((player) => (
                                    <tr
                                        key={player?.playerId?._id}
                                        onClick={() =>
                                            navigate(
                                                `../players/${player?.playerId?._id}`
                                            )
                                        }
                                    >
                                        <td>{player?.playerId?.fullName}</td>
                                        <td>{player?.playerId?.position}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                ) : (
                    <Alert variant="warning">
                        No hay jugadores para mostrar!
                    </Alert>
                )}
            </section>
        </>
    )
}

export default SectionRoster
