import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetLeague } from '../../features/leagues.features'
import { toast } from 'react-hot-toast'
import NavBar from '../../ui/Navbar'
import Loading from '../../ui/Loading'
import { Button } from 'flowbite-react'
import SectionLeague from './components/SectionLeague'
import SectionSeasons from './components/SectionSeasons'
import SectionMatches from './components/SectionMatches'
import {
    useGetMatchesOpenByLeague,
    useGetMatchesClosedByLeague,
} from '../../features/matches.features'

const Leagues = () => {
    const { id } = useParams()
    const [key, setKey] = useState('proximos')
    const { data: league, isLoading, isError } = useGetLeague(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar la liga!')
    return (
        <>
            <NavBar />
            <div className="container px-0 mx-auto">
                <div className="mx-auto">
                    <div className="mx-auto lg:w-3/4">
                        <SectionLeague league={league} />

                        <div
                            className="flex gap-1 mt-1 justify-center mx-auto "
                            role="group"
                        >
                            <Button
                                size="sm"
                                color="gray"
                                className=" text-gray-600"
                                onClick={() => setKey('proximos')}
                            >
                                Próximos partidos
                            </Button>

                            <Button
                                size="sm"
                                color="gray"
                                className=" text-gray-600"
                                onClick={() => setKey('temporadas')}
                            >
                                Temporadas
                            </Button>

                            <Button
                                size="sm"
                                color="gray"
                                className=" text-gray-600"
                                onClick={() => setKey('ultimos')}
                            >
                                Últimos partidos
                            </Button>
                        </div>
                        <section>
                            {key === 'temporadas' ? (
                                <SectionSeasons league={league} />
                            ) : null}
                            {key === 'proximos' ? (
                                <SectionMatches
                                    league={league}
                                    query={useGetMatchesOpenByLeague}
                                />
                            ) : null}
                            {key === 'ultimos' ? (
                                <SectionMatches
                                    league={league}
                                    query={useGetMatchesClosedByLeague}
                                />
                            ) : null}
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Leagues
