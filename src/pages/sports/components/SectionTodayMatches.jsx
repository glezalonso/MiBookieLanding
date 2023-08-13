import React, { useState } from 'react'
import { Alert, TextInput, Badge } from 'flowbite-react'
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
                <div className="flex mt-3 mx-2 ">
                    <h5 className="mt-1">Partidos de hoy</h5>
                    <Badge
                        size={'sm'}
                        className="mx-2  mb-2 bg-zinc-900 text-gray-200"
                    >
                        {filterMatch?.length}
                    </Badge>
                </div>

                <div className="my-1 mx-auto p-1">
                    <TextInput
                        name="team"
                        placeholder="Equipos..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>

                {filterMatch?.length > 0 ? (
                    <TableMatch match={filterMatch} />
                ) : (
                    <Alert color="warning">No hay partidos para mostrar!</Alert>
                )}
            </section>
        </>
    )
}

export default SectionTodayMatches
