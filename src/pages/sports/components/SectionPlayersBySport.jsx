import React, { useState } from 'react'
import { useGetPlayerBySport } from '../../../features/players.features'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-hot-toast'
import { Table, FormControl, Alert } from 'react-bootstrap'

const SectionPlayerBySport = ({ sport }) => {
    const [filter, setFilter] = useState('')
    const { data: players, isError } = useGetPlayerBySport(sport?._id)
    const navigate = useNavigate()

    if (isError) return toast.error('Failed to load players')

    const playersByFilter = players?.filter((player) => {
        if (!filter) return player
        return player?.fullName?.toLowerCase().includes(filter.toLowerCase())
    })

    return (
        <>
            <section>
                <h5>Jugadores de {sport?.sport}</h5>
                <div className="my-2 mx-auto p-1">
                    <FormControl
                        style={{ fontSize: '14px' }}
                        name="filter"
                        placeholder="Nombre del jugador..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                {playersByFilter?.length > 0 ? (
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
                                    <th>Nombre</th>
                                    <th>Posición</th>
                                </tr>
                            </thead>
                            <tbody>
                                {playersByFilter.map((player) => (
                                    <tr
                                        key={player?._id}
                                        onClick={() =>
                                            navigate(
                                                `../players/${player?._id}`
                                            )
                                        }
                                    >
                                        <td>{player?.fullName}</td>
                                        <td>{player?.position}</td>
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
export default SectionPlayerBySport
