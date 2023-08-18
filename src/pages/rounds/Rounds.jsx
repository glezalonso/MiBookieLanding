import React from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import NavBar from '../../ui/Navbar'
import { useGetRound } from '../../features/rounds.features'
import CardRound from './components/CardRound'
import SectionMatches from './components/SectionMatches'

const Rounds = () => {
    const { id } = useParams()
    const { data: round, isError } = useGetRound(id)

    if (isError) return toast.error('Hubo un error al cargar las rondas')

    return (
        <>
            <NavBar />
            <main className="container mx-auto p-1 lg:w-8/12">
                <CardRound round={round} />
                <SectionMatches round={round} />
            </main>
        </>
    )
}
export default Rounds
