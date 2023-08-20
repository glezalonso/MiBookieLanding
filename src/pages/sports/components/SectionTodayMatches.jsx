import React, { useEffect } from 'react'
import { Alert, Badge } from 'flowbite-react'
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
                <div className="w-full flex  items-center my-4  ">
                    <div className=" mx-2 flex gap-1">
                        <img
                            src={sport?.poster}
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
            <div ref={ref}>{isFetchingNextPage ? <Loading /> : null}</div>
        </>
    )
}

export default SectionTodayMatches
