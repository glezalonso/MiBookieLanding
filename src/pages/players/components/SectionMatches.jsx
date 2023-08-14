import React, { useState } from 'react'
import { Alert, TextInput } from 'flowbite-react'
import { toast } from 'react-hot-toast'
import { useGetMatchesByTeam } from '../../../features/matches.features'
import SelectFilter from '../../comuncomponents/SelectFilter'
import Loading from '../../../ui/Loading'
import TableMatche from '../../comuncomponents/TableMatch'

const SectionMatches = ({ player, status, title }) => {
    const [filter, setFilter] = useState('')
    const [limit, setLimit] = useState(15)
    const {
        data: matches,
        isLoading,
        isError,
    } = useGetMatchesByTeam(player?.team?._id, limit, status)

    if (isLoading) return <Loading />

    if (isError) return toast.error('Hubo un error al cargar los partidos')

    const MatchesByFilter = matches?.filter((matches) => {
        if (!filter) return matches
        return (
            matches?.away?.name?.toLowerCase().includes(filter.toLowerCase()) ||
            matches?.local?.name?.toLowerCase().includes(filter.toLowerCase())
        )
    })

    return (
        <>
            <section>
                <h5>{title}</h5>
                <div className="w-full flex justify-between gap-2 my-1 mx-auto p-1 ">
                    <TextInput
                        className="w-3/5 text-base focus:text-base active:text-base "
                        name="team"
                        placeholder="Equipos..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                    <SelectFilter setLimit={setLimit} />
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
