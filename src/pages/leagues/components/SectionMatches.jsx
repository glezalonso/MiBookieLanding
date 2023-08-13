import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Alert, Badge, TextInput } from 'flowbite-react'
import Loading from '../../../ui/Loading'
import TableMatche from '../../comuncomponents/TableMatch'

const SectionMatches = ({ league, query, title }) => {
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
                <div className="flex mt-3 mx-2 ">
                    <h5 className="mt-1">{title} partidos</h5>
                    <Badge
                        size={'sm'}
                        className="mx-2 mb-2 bg-zinc-900 text-gray-200"
                    >
                        {matches?.length}
                    </Badge>
                </div>

                <div className="my-2 mx-auto p-1">
                    <TextInput
                        name="team"
                        placeholder="Equipos..."
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
