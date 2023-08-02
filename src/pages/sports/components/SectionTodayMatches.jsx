import React, { useState } from 'react'
import { useGetMatchesToday } from '../../../features/matches.features'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Alert, Table, FormControl, Badge } from 'react-bootstrap'
import Loading from '../../../ui/Loading'
import formatedDate from '../../../utils/formatedDate'

const SectionTodayMatches = ({ sport }) => {
    const [filter, setFilter] = useState('')
    const date = formatedDate()
    const { data, isLoading, isError } = useGetMatchesToday(date)
    const navigate = useNavigate()

    if (isLoading) return <Loading />

    if (isError) return toast.error('Hubo un error al cargar los partidos!')

    const matches = data?.filter((match) => match?.sport?._id === sport?._id)

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
                <span className="mx-2 fs-5">
                    Partidos de hoy
                    <Badge bg="dark" className="mx-2">
                        {filterMatch?.length}
                    </Badge>
                </span>
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
                            <tbody>
                                {filterMatch?.map((match) => (
                                    <tr
                                        className="border-bottom "
                                        key={match?._id}
                                        onClick={() =>
                                            navigate(`../matches/${match?._id}`)
                                        }
                                    >
                                        <td className="text-center">
                                            <div className="my-3">
                                                <span>
                                                    {match?.date
                                                        .split('T')
                                                        .splice(1)
                                                        .reverse()
                                                        .join(' ')}
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-start my-1 gap-1">
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
                                                <div>
                                                    <span className="mx-1">
                                                        {match?.local?.name}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start my-1 gap-1">
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
                                                <div>
                                                    <span className="mx-1">
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

export default SectionTodayMatches
