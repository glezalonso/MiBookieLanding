import React, { useState } from 'react'
import { Alert, TextInput } from 'flowbite-react'

import { toast } from 'react-hot-toast'
import { useGetMatchesByTeam } from '../../../features/matches.features'

// Ui sections
import Loading from '../../../ui/Loading'

import TableMatche from '../../comuncomponents/TableMatch'

const SectionMatches = ({ player, open, title }) => {
    const [filter, setFilter] = useState('')
    const {
        data: matches,
        isLoading,
        isError,
    } = useGetMatchesByTeam(player?.team?._id)

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
                    <TextInput
                        name="team"
                        placeholder="Equipos..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>

                {MatchesByFilter?.length > 0 ? (
                    <TableMatche match={MatchesByFilter} />
                ) : (
                    <Alert color="warning">No hay partidos para mostrar!</Alert>
                )}
            </section>
        </>
    )
}
export default SectionMatches
