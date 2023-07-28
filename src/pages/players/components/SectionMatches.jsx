import React, { useState } from 'react'
import { Alert, Table, FormControl } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useGetMatchesByTeam } from '../../../features/matches.features'
import Loading from '../../../ui/Loading'

const SectionMatches = ({ player, open, title }) => {
    const [filter, setFilter] = useState('')
    const {
        data: matches,
        isLoading,
        isError,
    } = useGetMatchesByTeam(player?.team?._id)
    const navigate = useNavigate()

    if (isLoading) return <Loading />

    if (isError) return toast.error('Hubo un error al cargar los partidos')

    const nextMatches = matches?.filter((match) => match?.status === open)

    const MatchesByFilter = nextMatches?.filter((matches) => {
        if (!filter) return matches
        return (
            matches?.away?.name?.toLowerCase().includes(filter.toLowerCase()) ||
            matches?.local?.name?.toLowerCase().includes(filter.toLowerCase())
        )
    })

    return (
        <>
            <section>
                <h5>{title}</h5>
                <div className="my-2 mx-auto p-1">
                    <FormControl
                        style={{ fontSize: '14px' }}
                        name="team"
                        placeholder="Equipos..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>

                {MatchesByFilter?.length > 0 ? (
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
                                    {!open ? <th>Marcador</th> : null}
                                </tr>
                            </thead>
                            <tbody>
                                {MatchesByFilter?.map((match) => (
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
                                        {!open ? (
                                            <td>
                                                {match?.score?.map(
                                                    (away) => away?.away
                                                )}
                                                -
                                                {match?.score?.map(
                                                    (local) => local?.local
                                                )}
                                            </td>
                                        ) : null}
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
export default SectionMatches
