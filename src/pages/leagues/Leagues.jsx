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
import next from '../../icons/next.svg'
import back from '../../icons/back.svg'
import leagues from '../../icons/leagues.svg'

const Leagues = () => {
    const { id } = useParams()
    const [key, setKey] = useState('proximos')

    const { data: league, isLoading, isError } = useGetLeague(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar la liga!')
    return (
        <>
            <main className="container mx-auto min-h-screen p-1 lg:w-3/5">
                <SectionLeague league={league} />
                <div
                    className="flex gap-0.5 justify-center  my-2.5  mx-auto sm:gap-2 "
                    role="group"
                >
                    <Button
                        size="sm"
                        pill
                        color="gray"
                        className="p-0 sm:px-4 "
                        onClick={() => setKey('proximos')}
                    >
                        <img
                            src={next}
                            alt="next"
                            className="h-4 w-4 mr-0.5 mt-0.5"
                        />
                        Próximos
                    </Button>

                    <Button
                        size="sm"
                        pill
                        color="gray"
                        className="p-0 sm:px-4 "
                        onClick={() => setKey('temporadas')}
                    >
                        <img
                            src={leagues}
                            alt="leagues"
                            className="h-4 w-4 mr-0.5 mt-0.5"
                        />
                        Temporadas
                    </Button>

                    <Button
                        size="sm"
                        pill
                        color="gray"
                        className="p-0 sm:px-4 "
                        onClick={() => setKey('ultimos')}
                    >
                        <img
                            src={back}
                            alt="back"
                            className="h-4 w-4 mr-0.5 mt-0.5"
                        />
                        Últimos
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
