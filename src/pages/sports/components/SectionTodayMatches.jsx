import React, { useEffect } from 'react'
import { Alert, Badge, Spinner } from 'flowbite-react'
import { useInView } from 'react-intersection-observer'
import { useGetMatchesToday } from '../../../features/matches.features'
import { toast } from 'react-hot-toast'
import Loading from '../../../ui/Loading'
import CardMatch from '../../comuncomponents/CardMatch'

const SectionTodayMatches = ({ sport, date }) => {
    const { ref, inView } = useInView()

    const {
        data,
        isError,
        isLoading,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    } = useGetMatchesToday(date, sport?._id)

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage()
        }
    }, [inView])

    const matches = data?.pages?.flatMap((pages) => pages.data) ?? []

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los partidos!')

    return (
        <>
            <section className="min-h-fit">
                <div className=" flex items-center  gap-1 my-4 mx-1 text-lg font-semibold text-gray-800">
                    <img
                        src={sport?.poster}
                        alt="partidos"
                        className="w-7 h-7 "
                    />
                    <span>Partidos</span>

                    <Badge
                        size={'xs'}
                        className="bg-zinc-900 text-gray-200 p-1"
                    >
                        {data?.pages[0]?.total}
                    </Badge>
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
            <div ref={ref}>
                {isFetchingNextPage ? (
                    <div className="flex justify-center items-center m-3">
                        <Spinner color="warning" />
                    </div>
                ) : null}
            </div>
        </>
    )
}

export default SectionTodayMatches
