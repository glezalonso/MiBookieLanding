import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Alert, FormControl, Badge } from 'react-bootstrap'
import { useGetMatchesToday } from '../../../features/matches.features'
import formatedDate from '../../../utils/formatedDate'
import Loading from '../../../ui/Loading'
import CardMatch from './CardMatch'

const SectionMatches = () => {
    const [filter, setFilter] = useState('')
    const date = formatedDate()

    const { data: matches, isLoading, isError } = useGetMatchesToday(date)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los partidos!')

    matches?.sort((a, b) => b.status - a.status)

    const matchFilter = matches?.filter((match) => {
        if (!filter) return match
        return (
            match?.local?.name?.toLowerCase().includes(filter.toLowerCase()) ||
            match?.away?.name?.toLowerCase().includes(filter.toLowerCase())
        )
    })

    return (
        <>
            <section>
                <h5>
                    Partidos de hoy
                    <Badge bg="dark" className="mx-1">
                        {matches?.length}
                    </Badge>
                </h5>
                <div className="my-2 mx-auto p-1">
                    <FormControl
                        name="team"
                        style={{ fontSize: '14px' }}
                        placeholder="Equipo..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                {matchFilter?.length > 0 ? (
                    matchFilter?.map((match) => (
                        <CardMatch key={match?._id} match={match} />
                    ))
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
