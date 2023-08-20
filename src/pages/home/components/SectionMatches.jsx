import React, { useEffect } from 'react'
import { useGetMatchesToday } from '../../../features/matches.features'
import { Alert, Badge } from 'flowbite-react'
import { toast } from 'react-hot-toast'
import CardMatch from '../../comuncomponents/CardMatch'
import Loading from '../../../ui/Loading'
import matchIcon from '../../../icons/match.svg'
import { useInView } from 'react-intersection-observer'

const SectionMatches = ({ date }) => {
    const sports = 'all'
    const { ref, inView } = useInView()

    const {
        data,
        isError,
        isLoading,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    } = useGetMatchesToday(date, sports)

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
                <div className="w-full flex  items-center my-4  ">
                    <div className=" mx-2 flex gap-1">
                        <img
                            src={matchIcon}
                            alt="partidos"
                            className=" block w-7 h-7 mb- ml-1"
                        />
                        <span className="block mx-1 mt-1 ">
                            Todos los partidos
                        </span>
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
export default SectionMatches
