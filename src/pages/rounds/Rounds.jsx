import React from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import Loading from '../../ui/Loading'
import NavBar from '../../ui/Navbar'
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
            <NavBar />
            <div className="container p-1 mx:auto">
                <div className="mx-auto">
                    <div className="mx-auto lg:w-3/4">
                        <CardRound round={round} />
                        <SectionMatches round={round} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Rounds
