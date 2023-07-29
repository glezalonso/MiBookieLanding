import React, { useState } from 'react'
import { useGetNextMatchesBySport } from '../../../features/matches.features'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Alert, Table, FormControl, Badge } from 'react-bootstrap'
import Loading from '../../../ui/Loading'

const SectionNextMatches = ({ sport }) => {
    const [filter, setFilter] = useState('')
    const {
        data: matches,
        isLoading,
        isError,
    } = useGetNextMatchesBySport(sport?._id)
    const navigate = useNavigate()

    if (isLoading) return <Loading />

    if (isError) return toast.error('Hubo un error al cargar los partidos!')

    const filterMatch = matches?.filter((matches) => {
        if (!filter) return matches
        return (
            matches?.away?.name?.toLowerCase().includes(filter.toLowerCase()) ||
            matches?.local?.name?.toLowerCase().includes(filter.toLowerCase())
        )
    })

    return (
        <>
            <section>
                <h5>
                    Próximos partidos
                    <Badge bg="dark" className="mx-2">
                        {filterMatch?.length}
                    </Badge>
                </h5>
                <div className="my-2 mx-auto p-1">
                    <FormControl
                        name="team"
                        placeholder="Equipos..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>

                {filterMatch?.length > 0 ? (
                    <div className="bg-light rounded section-tables  vh-50">
                        <Table
                            responsive
                            borderless
                            hover
                            size="sm"
                            variant="light"
                        >
                            <thead className="border-bottom border-secondary">
                                <tr>
                                    <th>Ronda</th>
                                    <th>Fecha</th>
                                    <th>Local</th>
                                    <th>Visita</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterMatch?.map((match) => (
                                    <tr
                                        key={match?._id}
                                        onClick={() =>
                                            navigate(`../matches/${match?._id}`)
                                        }
                                    >
                                        <td>{match?.round?.round}</td>
                                        <td>
                                            {match?.date
                                                .split('T', 3)
                                                .join(' ')}
                                        </td>
                                        <td>{match?.local?.name}</td>
                                        <td>{match?.away?.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                ) : (
                    <Alert variant="warning">
                        No hay partidos para mostrar!
                    </Alert>
                )}
            </section>
        </>
    )
}

export default SectionNextMatches
