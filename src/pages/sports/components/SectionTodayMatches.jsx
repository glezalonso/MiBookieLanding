import React, { useState } from 'react'
import { Alert, FormControl, Badge } from 'react-bootstrap'
import { useGetMatchesToday } from '../../../features/matches.features'
import { toast } from 'react-hot-toast'
import Loading from '../../../ui/Loading'
import formatedDate from '../../../utils/formatedDate'
import TableMatch from '../../comuncomponents/TableMatch'

const SectionTodayMatches = ({ sport }) => {
    const [filter, setFilter] = useState('')
    const date = formatedDate()
    const { data, isLoading, isError } = useGetMatchesToday(date)

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
                    <TableMatch match={filterMatch} />
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
