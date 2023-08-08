import React from 'react'
import { useGetPicksOpen } from '../../../features/matches.features'
import Loading from '../../../ui/Loading'
import { toast } from 'react-hot-toast'
import CardPick from './CardPick'
import { Alert } from 'flowbite-react'

const SectionNext = ({ id, limit }) => {
    const {
        data: matchesOpen,
        isLoading,
        isError,
        isFetching,
    } = useGetPicksOpen(id, limit)

    if (isLoading || isFetching) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar! los picks')
    return (
        <>
            {matchesOpen?.length > 0 ? (
                matchesOpen?.map((match) => (
                    <CardPick match={match} key={match?._id} id={id} />
                ))
            ) : (
                <Alert color="warning" className="my-2">
                    No tienes predicciones aún
                </Alert>
            )}
        </>
    )
}

export default SectionNext
