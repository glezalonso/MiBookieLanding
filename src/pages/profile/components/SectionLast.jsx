import React, { useState } from 'react'
import { useGetPicksClosed } from '../../../features/matches.features'
import { toast } from 'react-hot-toast'
import { Alert, Button } from 'flowbite-react'
import Loading from '../../../ui/Loading'
import CardPick from './CardPick'
import SectionStadistics from './SectionStadistics'
import { BarChartFill } from 'react-bootstrap-icons'

const SectionLast = ({ id, limit }) => {
    const [stats, setStats] = useState(false)

    const {
        data: matchesClosed,
        isError,
        isLoading,
        isFetching,
    } = useGetPicksClosed(id, limit)
    if (isLoading || isFetching) return <Loading />

    if (isError) return toast.error('Hubo un error al cargar los picks!')

    return (
        <>
            <section>
                <Button
                    size="xs"
                    pill
                    color="dark"
                    onClick={() => setStats(!stats)}
                    className="p-0 mr-auto "
                >
                    <BarChartFill color="white" className="mt-0.5 mr-0.5" />
                    Estadísticas
                </Button>
                {stats ? (
                    <SectionStadistics match={matchesClosed} id={id} />
                ) : null}
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
