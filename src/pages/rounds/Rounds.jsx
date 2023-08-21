import React from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import Loading from '../../ui/Loading'
import { useGetRound } from '../../features/rounds.features'
import CardRound from './components/CardRound'
import SectionMatches from './components/SectionMatches'

const Rounds = () => {
    const { id } = useParams()
    const { data: round, isLoading, isError } = useGetRound(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar las rondas')

    return (
        <>
            <main className="container mx-auto p-1 lg:w-3/5">
                <CardRound round={round} />
                <SectionMatches round={round} />
            </main>
        </>
    )
}
export default Rounds
