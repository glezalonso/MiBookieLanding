import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Alert, Badge, TextInput } from 'flowbite-react'
import { useGetMatchesByLeague } from '../../../features/matches.features'
import Loading from '../../../ui/Loading'
import SelectFilter from '../../comuncomponents/SelectFilter'
import CardMatch from '../../comuncomponents/CardMatch'

const SectionMatches = ({ league, status, title }) => {
    const [filter, setFilter] = useState('')
    const [limit, setLimit] = useState(15)
    const {
        data: matches,
        isLoading,
        isError,
    } = useGetMatchesByLeague(league?._id, limit, status)

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
                <div className="flex  mx-2 ">
                    <h5 className="mt-1">{title} partidos</h5>
                    <Badge
                        size={'sm'}
                        className="mx-2 mb-2 bg-zinc-900 text-gray-200"
                    >
                        {matches?.length}
                    </Badge>
                </div>

                <div className="w-full flex justify-between gap-2 my-1 mx-auto p-1 ">
                    <TextInput
                        name="team"
                        className="w-3/5 text-base focus:text-base active:text-base "
                        placeholder="Equipos..."
                        onChange={(e) => setFilter(e.target.value)}
                    />

                    <SelectFilter title={title} setLimit={setLimit} />
                </div>

                {matchesByFilter?.length > 0 ? (
                    matchesByFilter.map((match) => (
                        <CardMatch key={match?._id} match={match} />
                    ))
                ) : (
                    <Alert color="warning">No hay partidos para mostrar!</Alert>
                )}
            </section>
        </>
    )
}
export default SectionMatches
