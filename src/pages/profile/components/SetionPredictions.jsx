import React, { useEffect } from 'react'
import { useGetMatchesBookie } from '../../../features/matches.features'
import { useInView } from 'react-intersection-observer'
import { toast } from 'react-hot-toast'
import { Alert, Spinner } from 'flowbite-react'
import Loading from '../../../ui/Loading'
import CardPick from './CardPick'

const SectionPredictions = ({ user, status }) => {
    const { ref, inView } = useInView()

    const {
        data,
        isError,
        isLoading,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    } = useGetMatchesBookie(user?._id, status)

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage()
        }
    }, [inView])

    const matches = data?.pages?.flatMap((pages) => pages.data) ?? []

    if (isLoading) return <Loading />

    if (isError) return toast.error('Hubo un error al cargar los picks!')

    return (
        <>
            {matches?.length > 0 ? (
                matches?.map((match) => (
                    <CardPick match={match} key={match?._id} id={user?._id} />
                ))
            ) : (
                <Alert color="warning" className="my-2">
                    No tienes predicciones aún
                </Alert>
            )}
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

export default SectionPredictions
