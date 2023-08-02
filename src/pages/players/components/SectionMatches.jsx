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

    MatchesByFilter.sort((a, b) => a.date - b.date)

    return (
        <>
            <section>
                <h5>{title}</h5>
                <div className="my-2 mx-auto p-1">
                    <FormControl
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
                            <tbody>
                                {MatchesByFilter?.map((match) => (
                                    <tr
                                        className="border-bottom"
                                        key={match?._id}
                                        onClick={() =>
                                            navigate(`../matches/${match?._id}`)
                                        }
                                    >
                                        <td>
                                            <div className="d-flex justify-content-center mt-1">
                                                {match?.date
                                                    .slice(5)
                                                    .split('T', 3)
                                                    .join(' ')}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-right my-1 gap-1">
                                                <div className="my-1">
                                                    <img
                                                        style={{
                                                            width: '20px',
                                                            height: '20px',
                                                        }}
                                                        src={
                                                            match?.local?.poster
                                                        }
                                                        alt={match?.local?.name}
                                                    />
                                                </div>
                                                <div className="mx-1">
                                                    <span>
                                                        {match?.local?.name}
                                                    </span>
                                                </div>
                                            </div>{' '}
                                            <div className="d-flex justify-content-right my-1 gap-1">
                                                <div className="my-1">
                                                    <img
                                                        style={{
                                                            width: '20px',
                                                            height: '20px',
                                                        }}
                                                        src={
                                                            match?.away?.poster
                                                        }
                                                        alt={match?.away?.name}
                                                    />
                                                </div>
                                                <div className="mx-1">
                                                    <span>
                                                        {match?.away?.name}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-center my-1 ">
                                                <div>
                                                    <strong>
                                                        {match?.score?.map(
                                                            (score) =>
                                                                score?.away
                                                        )}
                                                    </strong>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center my-1 ">
                                                <div>
                                                    <strong>
                                                        {match?.score?.map(
                                                            (score) =>
                                                                score?.local
                                                        )}
                                                    </strong>
                                                </div>
                                            </div>
                                        </td>
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
