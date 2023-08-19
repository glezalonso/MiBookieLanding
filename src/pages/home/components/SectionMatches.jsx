import React, { useState, useEffect } from 'react'
import { useGetMatchesToday } from '../../../features/matches.features'
import { Alert, Badge, TextInput } from 'flowbite-react'
import { toast } from 'react-hot-toast'
import CardMatch from '../../comuncomponents/CardMatch'
import Loading from '../../../ui/Loading'
import matchIcon from '../../../icons/match.svg'
import { useInView } from 'react-intersection-observer'

const SectionMatches = ({ date }) => {
    const { ref, inView } = useInView()
    const { data, isError, isLoading, hasNextPage, fetchNextPage } =
        useGetMatchesToday(date)

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage()
        }
    }, [inView])

    const matches =
        data?.pages?.reduce((prev, pages) => prev.concat(pages.data), []) ?? []

    const [filter, setFilter] = useState('')

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los partidos!')

    const matchFilter = matches?.filter((match) => {
        if (!filter) return match
        return match?.sport?.sport?.toLowerCase().includes(filter.toLowerCase())
    })

    return (
        <>
            <section className="min-h-fit">
                <div className="w-full flex justify-between items-center mt-6  ">
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
                        <TextInput
                            sizing={'md'}
                            className="text-base focus:text-base active:text-base "
                            name="sport"
                            placeholder="Deporte"
                            onChange={(e) => setFilter(e.target.value)}
                        />
                    </div>
                </div>
                {matchFilter?.length > 0 ? (
                    matchFilter?.map((match) => (
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
