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
                        name="team"
                        placeholder="Equipos..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>

                {matchesByFilter?.length > 0 ? (
                    <div className="bg-light rounded section-tables  vh-50">
                        <Table
                            responsive
                            borderless
                            hover
                            size="sm"
                            variant="light"
                        >
                            <tbody>
                                {matchesByFilter?.map((match) => (
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
                                                <div>
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
                                            </div>
                                            <div className="d-flex justify-content-right my-1 gap-1">
                                                <div>
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
