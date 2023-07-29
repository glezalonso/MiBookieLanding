import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Table, FormControl, Alert } from 'react-bootstrap'
import { useGetTeamsBySport } from '../../../features/teams.features'
import Loading from '../../../ui/Loading'

const SectionPlayersTennis = ({ sport }) => {
    const [filter, setFilter] = useState('')
    const { data: players, isLoading, isError } = useGetTeamsBySport(sport?._id)
    const navigate = useNavigate()

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los jugadores!')

    const playersByFilter = players?.filter((player) => {
        if (!filter) return player
        return player?.name?.toLowerCase().includes(filter.toLowerCase())
    })

    return (
        <>
            <section>
                <h5>Jugadores de {sport?.sport}</h5>
                <div className="my-2 mx-auto p-1">
                    <FormControl
                        name="team"
                        placeholder="Nombre del jugador..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                {playersByFilter?.length > 0 ? (
                    <div className="bg-light rounded section-tables">
                        <Table
                            responsive
                            borderless
                            hover
                            size="sm"
                            variant="light"
                        >
                            <thead className="border-bottom border-secondary">
                                <tr>
                                    <th>Nombre</th>
                                </tr>
                            </thead>
                            <tbody>
                                {playersByFilter.map((player) => (
                                    <tr
                                        key={player?._id}
                                        onClick={() =>
                                            navigate(`../teams/${player?._id}`)
                                        }
                                    >
                                        <td>{player?.name}</td>
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
export default SectionPlayersTennis
