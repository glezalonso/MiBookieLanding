import React, { useState } from 'react'
import { Alert, FormControl, Badge } from 'react-bootstrap'
import { useGetNextMatchesBySport } from '../../../features/matches.features'

import { toast } from 'react-hot-toast'

import Loading from '../../../ui/Loading'
import TableMatche from '../../comuncomponents/TableMatch'

const SectionNextMatches = ({ sport }) => {
    const [filter, setFilter] = useState('')
    const {
        data: matches,
        isLoading,
        isError,
    } = useGetNextMatchesBySport(sport?._id)

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
                <h5 className="mx-2">
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
                    <TableMatche match={filterMatch} />
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
