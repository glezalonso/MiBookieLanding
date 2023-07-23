import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Table, FormControl, Alert } from 'react-bootstrap'
import { useGetTeamsBySport } from '../../../features/teams.features'
import Loading from '../../../ui/Loading'

const SectionTeams = ({ sport }) => {
    const [filter, setFilter] = useState('')
    const { data: teams, isLoading, isError } = useGetTeamsBySport(sport?._id)
    const navigate = useNavigate()

    if (isLoading) return <Loading />

    if (isError) return toast.error('Hubo un error al cargar los jugadores!')

    const playersByFilter = teams?.filter((teams) => {
        if (!filter) return teams
        return teams?.name?.toLowerCase().includes(filter.toLowerCase())
    })

    return (
        <>
            <section>
                <h5>Equipos</h5>
                <div className="my-2 mx-auto p-1">
                    <FormControl
                        style={{ fontSize: '14px' }}
                        name="team"
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
                        No hay equipos para mostrar!
                    </Alert>
                )}
            </section>
        </>
    )
}
export default SectionTeams
