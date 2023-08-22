import React from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

// Sections
import CardMatch from '../comuncomponents/CardMatch'
import SectionLineUps from './components/SectionLineUps'
import Loading from '../../ui/Loading'
import { useGetMatch } from '../../features/matches.features'

const Matches = () => {
    const { id } = useParams()
    const { data: match, isLoading, isError } = useGetMatch(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar el partido!')

    return (
        <>
            <main className="container mx-auto min-h-screen p-1 lg:w-3/5">
                <CardMatch match={match} />
                <SectionLineUps match={match} />
            </main>
        </>
    )
}

export default Matches
