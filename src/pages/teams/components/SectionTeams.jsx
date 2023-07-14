import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Alert, FormControl, Table } from 'react-bootstrap'
import Loading from '../../../ui/Loading'
import { useGetTeams } from '../../../features/teams.features'

const SectionTeams = () => {
    const [filter, setFilter] = useState('')
    const { data: teams, isLoading, isError } = useGetTeams()
    const navigate = useNavigate()

    if (isLoading) return <Loading />
    if (isError) return toast.error('Failed to load teams!')

    const filterTeams = teams?.filter((teams) => {
        if (!filter) return teams
        return (
            teams?.name?.toLowerCase().includes(filter.toLowerCase()) ||
            teams?.sport?.sport?.toLowerCase().includes(filter.toLowerCase())
        )
    })

    return (
        <>
            <section>
                <h5>Todos los equipos</h5>
                <div className="my-2 auto p-1">
                    <FormControl
                        style={{ fontSize: '13px' }}
                        name="filter"
                        placeholder="Nombre del equipo, deporte..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                {filterTeams?.length > 0 ? (
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
                                    <th>Equipo</th>
                                    <th>Estadio</th>
                                    <th>Deporte</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterTeams?.map((team) => (
                                    <tr
                                        key={team?._id}
                                        onClick={() =>
                                            navigate(`../teams/${team?._id}`)
                                        }
                                    >
                                        <td>{team?.name}</td>
                                        <td>{team?.stadium}</td>
                                        <td>{team?.sport?.sport}</td>
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
