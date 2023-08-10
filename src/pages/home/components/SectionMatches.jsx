import React, { useState } from 'react'
import { Select, Alert, Badge, TextInput } from 'flowbite-react'
import { useGetSports } from '../../../features/sports.features'
import CardMatch from '../../comuncomponents/CardMatch'

const SectionMatches = ({ matches }) => {
    const { data: sports } = useGetSports()
    const [filter, setFilter] = useState('')

    matches?.sort((a, b) => b.status - a.status)

    const matchFilter = matches?.filter((match) => {
        if (!filter) return match
        return (
            match?.local?.name?.toLowerCase().includes(filter.toLowerCase()) ||
            match?.away?.name?.toLowerCase().includes(filter.toLowerCase()) ||
            match?.sport?._id?.includes(filter.toLowerCase())
        )
    })

    return (
        <>
            <section>
                <div className="flex my-1 justify-between ">
                    <div className="flex mt-1 mx-2 ">
                        <h5 className="mt-1">Partidos</h5>
                        <Badge
                            size={'sm'}
                            className="mx-2 mb-1 bg-zinc-900 text-gray-200"
                        >
                            {matches?.length}
                        </Badge>
                    </div>
                    <Select
                        className="rounded mr-1"
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="6">Todos</option>

                        {sports?.map((sport) => (
                            <option key={sport?._id} value={sport?._id}>
                                {sport?.sport}
                            </option>
                        ))}
                    </Select>
                </div>
                <div className="my-1 mx-auto p-1">
                    <TextInput
                        name="team"
                        placeholder="Equipo..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                {matchFilter?.length > 0 ? (
                    matchFilter?.map((match) => (
                        <CardMatch key={match?._id} match={match} />
                    ))
                ) : (
                    <Alert color={'warning'}>
                        No hay partidos para mostrar!
                    </Alert>
                )}
            </section>
        </>
    )
}
export default SectionMatches
