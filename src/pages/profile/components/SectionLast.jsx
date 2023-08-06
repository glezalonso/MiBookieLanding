import React from 'react'
import { useGetPicksClosed } from '../../../features/matches.features'
import Loading from '../../../ui/Loading'
import { toast } from 'react-hot-toast'
import CardPick from './CardPick'
import { Alert } from 'react-bootstrap'

import formatedDate from '../../../utils/formatedDate'

const SectionLast = ({ id, limit }) => {
    const date = formatedDate().slice(0, 7)

    const {
        data: matchesClosed,
        isError,
        isLoading,
        isFetching,
    } = useGetPicksClosed(id, date, limit)
    if (isLoading || isFetching) return <Loading />

    if (isError) return toast.error('Hubo un error al cargar los picks!')

    return (
        <>
            <section>
                {matchesClosed?.length > 0 ? (
                    matchesClosed?.map((match) => (
                        <CardPick match={match} key={match?._id} id={id} />
                    ))
                ) : (
                    <Alert variant="warning my-2">
                        No tienes predicciones aún
                    </Alert>
                )}
            </section>
        </>
    )
}

export default SectionLast
