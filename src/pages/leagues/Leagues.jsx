import React, { useState } from 'react'
import {
    useGetMatchesOpenByLeague,
    useGetMatchesClosedByLeague,
} from '../../features/matches.features'
import { useParams } from 'react-router-dom'
import { useGetLeague } from '../../features/leagues.features'
import { toast } from 'react-hot-toast'
import { Button } from 'flowbite-react'
import Loading from '../../ui/Loading'
import SectionLeague from './components/SectionLeague'
import SectionSeasons from './components/SectionSeasons'
import SectionMatches from './components/SectionMatches'

const Leagues = () => {
    const { id } = useParams()
    const [key, setKey] = useState('proximos')

    const { data: league, isLoading, isError } = useGetLeague(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar la liga!')
    return (
        <>
            <main className="container  mx-auto p-1  lg:w-8/12">
                <SectionLeague league={league} />
                <div
                    className="flex gap-1 mt-1 justify-center mx-auto "
                    role="group"
                >
                    <Button
                        size="sm"
                        pill
                        color="gray"
                        className="p-0 sm:px-4 "
                        onClick={() => setKey('proximos')}
                    >
                        Próximos partidos
                    </Button>

                    <Button
                        size="sm"
                        pill
                        color="gray"
                        className="p-0 sm:px-4 "
                        onClick={() => setKey('temporadas')}
                    >
                        Temporadas
                    </Button>

                    <Button
                        size="sm"
                        pill
                        color="gray"
                        className="p-0 sm:px-4 "
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
                            title={'Próximos'}
                            league={league}
                            query={useGetMatchesOpenByLeague}
                        />
                    ) : null}
                    {key === 'ultimos' ? (
                        <SectionMatches
                            title={'Últimos'}
                            league={league}
                            query={useGetMatchesClosedByLeague}
                        />
                    ) : null}
                </section>
            </main>
        </>
    )
}

export default Leagues
