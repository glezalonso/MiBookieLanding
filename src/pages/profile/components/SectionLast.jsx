import React from 'react'
import { useGetPicksClosed } from '../../../features/matches.features'
import Loading from '../../../ui/Loading'
import { toast } from 'react-hot-toast'
import CardPick from './CardPick'
import { Alert } from 'react-bootstrap'
import SectionRating from './SectionRating'
import formatedDate from '../../../utils/formatedDate'

const SectionLast = ({ id }) => {
    const date = formatedDate().slice(0, 7)

    const {
        data: matchesClosed,
        isError,
        isLoading,
    } = useGetPicksClosed(id, date)
    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los picks!')

    return (
        <>
            <section>
                <SectionRating match={matchesClosed} id={id} />
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
