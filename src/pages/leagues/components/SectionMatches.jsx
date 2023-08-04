import React, { useState } from 'react'

import { toast } from 'react-hot-toast'
import { Alert, FormControl, Badge } from 'react-bootstrap'

// Section ui
import Loading from '../../../ui/Loading'

import TableMatche from '../../comuncomponents/TableMatch'

const SectionMatches = ({ league, query }) => {
    const [filter, setFilter] = useState('')
    const { data: matches, isLoading, isError } = query(league?._id)

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
                    <TableMatche match={matchesByFilter} />
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
