import React from 'react'
import { useGetPicksClosed } from '../../../features/matches.features'
import { toast } from 'react-hot-toast'
import { Alert } from 'flowbite-react'
import Loading from '../../../ui/Loading'
import CardPick from './CardPick'
import formatedDate from '../../../utils/formatedDate'
import SectionStadistics from './SectionStadistics'

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
                <SectionStadistics match={matchesClosed} id={id} />
                {matchesClosed?.length > 0 ? (
                    matchesClosed?.map((match) => (
                        <CardPick match={match} key={match?._id} id={id} />
                    ))
                ) : (
                    <Alert color="warning" className="my-2">
                        No tienes predicciones aún
                    </Alert>
                )}
            </section>
        </>
    )
}

export default SectionLast
