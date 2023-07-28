import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Alert, Table, FormControl, Badge } from 'react-bootstrap'
import Loading from '../../../ui/Loading'

const SectionMatches = ({ league, query }) => {
    const [filter, setFilter] = useState('')
    const { data: matches, isLoading, isError } = query(league?._id)
    const navigate = useNavigate()

    if (isLoading) return <Loading />

    if (isError) return toast.error('Hubo un error al cargar los partidos')

    const matchesByFilter = matches?.filter((matches) => {
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
                    Próximos partidos <Badge bg="dark">{matches?.length}</Badge>
                </h5>

                <div className="my-2 mx-auto p-1">
                    <FormControl
                        style={{ fontSize: '14px' }}
                        name="team"
                        placeholder="Equipos..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>

                {matchesByFilter?.length > 0 ? (
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
                                    <th>Ronda</th>
                                    <th>Fecha</th>
                                    <th>Local</th>
                                    <th>Visita</th>
                                    <th>Marcador</th>
                                </tr>
                            </thead>
                            <tbody>
                                {matchesByFilter?.map((match) => (
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
                                                .reverse()
                                                .join(' ')}
                                        </td>
                                        <td>{match?.local?.name}</td>
                                        <td>{match?.away?.name}</td>
                                        <td>
                                            <strong>
                                                {match?.score?.map(
                                                    (score) => score?.local
                                                )}
                                            </strong>
                                            -
                                            <strong>
                                                {match?.score?.map(
                                                    (score) => score?.away
                                                )}
                                            </strong>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <caption className="text-light">
                                Total de partidos: {matchesByFilter?.length}
                            </caption>
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
export default SectionMatches
