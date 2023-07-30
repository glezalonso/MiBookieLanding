import React from 'react'
import { useGetPicksClosed } from '../../../features/matches.features'
import Loading from '../../../ui/Loading'
import { toast } from 'react-hot-toast'
import CardPick from './CardPick'
import { Alert } from 'react-bootstrap'

const SectionLast = ({ id }) => {
    const { data: matchesClosed, isError, isLoading } = useGetPicksClosed(id)
    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar! los picks')
    return (
        <>
            {matchesClosed?.length > 0 ? (
                matchesClosed?.map((match) => (
                    <CardPick match={match} key={match?._id} id={id} />
                ))
            ) : (
                <Alert variant="warning">No tienes predicciones aún</Alert>
            )}
        </>
    )
}

export default SectionLast
