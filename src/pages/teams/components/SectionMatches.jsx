import React, { useState } from 'react'
import { Alert, TextInput } from 'flowbite-react'
import { useGetMatchesByTeam } from '../../../features/matches.features'
import { toast } from 'react-hot-toast'
import Loading from '../../../ui/Loading'
import TableMatche from '../../comuncomponents/TableMatch'

const SectionMatches = ({ team, open, title }) => {
    const [filter, setFilter] = useState('')
    const { data: matches, isLoading, isError } = useGetMatchesByTeam(team?._id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los partidos')

    const matchesByPlayer = matches?.filter((match) => match?.status === open)

    const matchesByFilter = matchesByPlayer?.filter((matches) => {
        if (!filter) return matches
        return (
            matches?.away?.name?.toLowerCase().includes(filter.toLowerCase()) ||
            matches?.local?.name?.toLowerCase().includes(filter.toLowerCase())
        )
    })

    return (
        <>
            <section>
                <h5 className="mx-1">{title}</h5>
                <div className="my-1 mx-auto p-1">
                    <TextInput
                        name="team"
                        placeholder="Nombre del equipo..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>

                {matchesByFilter?.length > 0 ? (
                    <TableMatche match={matchesByFilter} />
                ) : (
                    <Alert color="warning">No hay partidos para mostrar!</Alert>
                )}
            </section>
        </>
    )
}
export default SectionMatches
