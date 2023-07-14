import React, { useState } from 'react'
import { useGetMatchesOpen } from '../../../features/matches.features'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Alert, Table, FormControl } from 'react-bootstrap'

const SectionNextMatches = ({ sport }) => {
    const [filter, setFilter] = useState('')
    const { data: matches, isError } = useGetMatchesOpen()
    const navigate = useNavigate()

    if (isError) return toast.error('Failed to load matches')

    const matchesBySport = matches?.filter(
        (match) => match?.sport?._id === sport?._id
    )

    const filterMatch = matchesBySport?.filter((matches) => {
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
                    Próximos partidos de {sport?.sport} ({filterMatch?.length})
                </h5>
                <div className="my-2 mx-auto p-1">
                    <FormControl
                        style={{ fontSize: '14px' }}
                        name="filter"
                        placeholder="Equipos..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>

                {filterMatch?.length > 0 ? (
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
