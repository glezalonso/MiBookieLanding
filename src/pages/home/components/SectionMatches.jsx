import React, { useState } from 'react'
import { Select, Alert, Badge, TextInput } from 'flowbite-react'
import { useGetSports } from '../../../features/sports.features'
import CardMatch from '../../comuncomponents/CardMatch'
import filters from '../../../icons/filter.svg'
import matchIcon from '../../../icons/match.svg'

const SectionMatches = ({ matches }) => {
    const { data: sports } = useGetSports()
    const [search, setSearch] = useState(false)
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
                <div className="flex justify-between  mx-2 ">
                    <h5 className=" flex mt-3">
                        <div className="flex mt-1 mb-2">
                            <img
                                src={matchIcon}
                                alt="partidos"
                                className="w-7 h-7 mb- ml-1"
                            />
                            <span className="block mx-1 mt-1 ">Partidos</span>
                        </div>
                        <Badge
                            size={'sm'}
                            className=" mt-1.5 bg-zinc-900 text-gray-200 p-1"
                        >
                            {matches?.length}
                        </Badge>
                    </h5>
                    <div
                        onClick={() => setSearch(!search)}
                        className="flex  mt-6  mr-2 gap-1 hover:cursor-pointer"
                    >
                        Filtro{' '}
                        <img src={filters} alt="Filtro" className="h-5 w-5" />
                    </div>
                </div>
                {search ? (
                    <div className="w-full flex justify-between gap-2 my-1 mx-auto p-1 ">
                        <TextInput
                            sizing={'md'}
                            className="w-3/5 text-base focus:text-base active:text-base "
                            name="team"
                            placeholder="Equipo..."
                            onChange={(e) => setFilter(e.target.value)}
                        />

                        <Select
                            className="rounded text-base w-2/5 mx-auto "
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
                ) : null}

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
