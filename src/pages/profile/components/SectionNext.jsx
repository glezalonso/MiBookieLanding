import React from 'react'
import { useGetPicksOpen } from '../../../features/matches.features'
import Loading from '../../../ui/Loading'
import { toast } from 'react-hot-toast'
import CardPick from './CardPick'
import { Alert } from 'react-bootstrap'

const SectionNext = ({ username }) => {
    const { data: matchesOpen, isLoading, isError } = useGetPicksOpen(username)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar! los picks')
    return (
        <>
            {matchesOpen?.length > 0 ? (
                matchesOpen?.map((match) => (
                    <CardPick
                        match={match}
                        key={match?._id}
                        username={username}
                    />
                ))
            ) : (
                <Alert variant="warning">No tienes predicciones aún</Alert>
            )}
        </>
    )
}

export default SectionNext
