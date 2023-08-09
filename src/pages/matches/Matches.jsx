import React from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

// UI section
import Loading from '../../ui/Loading'
import NavBar from '../../ui/Navbar'

// Sections
import CardMatch from '../comuncomponents/CardMatch'
import SectionLineUps from './components/SectionLineUps'

import { useGetMatch } from '../../features/matches.features'

const Matches = () => {
    const { id } = useParams()
    const { data: match, isLoading, isError } = useGetMatch(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar el partido!')

    return (
        <>
            <NavBar />
            <div className="container px-0 mx:auto">
                <div className="mx-auto">
                    <div className="mx-auto mt-2 lg:w-3/4">
                        <CardMatch match={match} />
                        <SectionLineUps match={match} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Matches
