import React from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

// UI section

import NavBar from '../../ui/Navbar'

// Sections
import CardMatch from '../comuncomponents/CardMatch'
import SectionLineUps from './components/SectionLineUps'
import Loading from '../../ui/Loading'
import { useGetMatch } from '../../features/matches.features'

const Matches = () => {
    const { id } = useParams()
    const { data: match, isLoading, isError } = useGetMatch(id)

    if (isError) return toast.error('Hubo un error al cargar el partido!')

    return (
        <>
            <NavBar />
            {isLoading ? (
                <Loading />
            ) : (
                <main className="container mx-auto lg:w-8/12 p-1">
                    isLoad <CardMatch match={match} />
                    <SectionLineUps match={match} />
                </main>
            )}
        </>
    )
}

export default Matches
