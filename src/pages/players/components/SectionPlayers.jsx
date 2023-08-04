import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Alert, FormControl, Table } from 'react-bootstrap'
import { useGetPlayers } from '../../../features/players.features'

import Loading from '../../../ui/Loading'

const SectionPlayers = () => {
    const [filter, setFilter] = useState('')
    const { data: players, isLoading, isError } = useGetPlayers()
    const navigate = useNavigate()

    if (isLoading) return <Loading />
    if (isError) return toast.error('Failed to load players!')

    const filterPlayers = players?.filter((player) => {
        if (!filter) return player
        return (
            player?.fullName?.toLowerCase().includes(filter.toLowerCase()) ||
            player?.sport?.sport
                ?.toLowerCase()
                .includes(filter.toLowerCase()) ||
            player?.team?.name?.toLowerCase().includes(filter.toLowerCase())
        )
    })

    return (
        <>
            <section>
                <h5>Todos los jugadores</h5>

                <div className="m-2 p-2">
                    <FormControl
                        name="player"
                        placeholder="Nombre, deporte, equipo..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                {filterPlayers.length > 0 ? (
                    <div
                        className="table-responsive rounded "
                        style={{ maxHeight: '500px', overflow: 'auto' }}
                    >
                        <Table
                            responsive
                            variant="dark table-sm table-borderless"
                            style={{ fontSize: '14px' }}
                            hover
                        >
                            <thead className="border-bottom">
                                <tr>
                                    <th>Nombre</th>
                                    <th>Posición</th>
                                    <th>Deporte</th>
                                    <th>Equipo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterPlayers?.map((player) => (
                                    <tr
                                        key={player?._id}
                                        onClick={(e) =>
                                            navigate(
                                                `../players/${player?._id}`
                                            )
                                        }
                                    >
                                        <td>{player?.fullName}</td>
                                        <td>{player?.position}</td>
                                        <td>{player?.sport?.sport}</td>
                                        <td>
                                            {player?.team ? (
                                                player?.team?.name
                                            ) : (
                                                <span className="text-danger">
                                                    Sin asignar
                                                </span>
                                            )}
                                        </td>
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

export default SectionPlayers
