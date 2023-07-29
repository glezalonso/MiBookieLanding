import React from 'react'
import { useGetPicks } from '../../../features/matches.features'
import Loading from '../../../ui/Loading'
import { toast } from 'react-hot-toast'
import { Alert, Badge } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CardPick from './CardPick'

const SectionPicks = () => {
    const { username } = useParams()

    const { data: matches, isLoading, isError } = useGetPicks(username)
    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar! los picks')

    return (
        <>
            <section>
                <h5>
                    Últimos Picks <Badge bg="dark">15</Badge>
                </h5>
                {matches?.length > 0 ? (
                    matches?.map((match) => (
                        <CardPick
                            match={match}
                            key={match?._id}
                            username={username}
                        />
                    ))
                ) : (
                    <Alert variant="warning">No tienes predicciones aún</Alert>
                )}
            </section>
        </>
    )
}

export default SectionPicks
