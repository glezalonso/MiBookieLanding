import React, { useState, useEffect } from 'react'
import { useGetMatchesToday } from '../../../features/matches.features'
import { Alert, Badge, Select } from 'flowbite-react'
import { toast } from 'react-hot-toast'
import CardMatch from '../../comuncomponents/CardMatch'
import Loading from '../../../ui/Loading'
import matchIcon from '../../../icons/match.svg'
import { useInView } from 'react-intersection-observer'
import { useGetSports } from '../../../features/sports.features'

const SectionMatches = ({ date }) => {
    const [sport, setSport] = useState('all')
    const { ref, inView } = useInView()
    const { data: sports } = useGetSports()
    const { data, isError, isLoading, hasNextPage, fetchNextPage } =
        useGetMatchesToday(date, sport)

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage()
        }
    }, [inView])

    const matches =
        data?.pages?.reduce((prev, pages) => prev.concat(pages.data), []) ?? []

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los partidos!')

    return (
        <>
            <section className="min-h-fit">
                <div className="w-full flex justify-between items-center my-4  ">
                    <div className="flex justify-between items-center">
                        <div className=" mx-2 flex gap-1">
                            <img
                                src={matchIcon}
                                alt="partidos"
                                className=" block w-7 h-7 mb- ml-1"
                            />
                            <span className="block mx-1 mt-1 ">Partidos</span>
                        </div>
                        <div>
                            <Badge
                                size={'sm'}
                                className=" mt-1.5 bg-zinc-900 text-gray-200 p-1"
                            >
                                {data?.pages[0]?.total}
                            </Badge>
                        </div>
                    </div>
                    <div className="self-end">
                        <Select
                            className="rounded w-50"
                            onChange={(e) => setSport(e.target.value)}
                        >
                            <option value={sport}>Deporte</option>
                            <option value="all">Todos</option>
                            {sports?.map((sport) => (
                                <option key={sport?._id} value={sport?._id}>
                                    {sport?.sport}
                                </option>
                            ))}
                        </Select>
                    </div>
                </div>
                {matches?.length > 0 ? (
                    matches?.map((match) => (
                        <CardMatch key={match?._id} match={match} />
                    ))
                ) : (
                    <Alert color={'warning'}>
                        No hay partidos disponibles!
                    </Alert>
                )}
            </section>
            <div ref={ref}></div>
        </>
    )
}
export default SectionMatches
