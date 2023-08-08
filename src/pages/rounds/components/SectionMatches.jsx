import React, { useState } from 'react'
import { Alert, TextInput } from 'flowbite-react'

import { toast } from 'react-hot-toast'
import Loading from '../../../ui/Loading'
import { useGetMatchesByRound } from '../../../features/matches.features'
import TableMatch from '../../comuncomponents/TableMatch'

const SectionMatches = ({ round }) => {
    const [filter, setFilter] = useState('')
    const {
        data: matches,
        isLoading,
        isError,
    } = useGetMatchesByRound(round?._id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los partidos!')

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
                <h5>Partidos</h5>

                <div className="my-2 mx-auto p-1">
                    <TextInput
                        name="team"
                        placeholder="Equipos..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>

                {matchesByFilter?.length > 0 ? (
                    <TableMatch match={matchesByFilter} />
                ) : (
                    <Alert color="warning">No hay partidos para mostrar!</Alert>
                )}
            </section>
        </>
    )
}
export default SectionMatches
