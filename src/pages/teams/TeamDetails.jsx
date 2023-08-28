import React, { useState } from 'react'
import { Button } from 'flowbite-react'
import { toast } from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import { useGetTeam } from '../../features/teams.features'
import { sport } from '../../const/sportconst'
import CardTeam from './components/CardTeam'
import SectionStandings from './components/SectionStandings'
import SectionMatches from './components/SectionMatches'
import SectionRoster from './components/SectionRoster'
import Loading from '../../ui/Loading'
import next from '../../icons/next.svg'
import back from '../../icons/back.svg'
import trophy from '../../icons/trophy.svg'
import strategy from '../../icons/strategy.svg'

const TeamDetails = () => {
    const { id } = useParams()
    const [status, setStatus] = useState(true)
    const [key, setKey] = useState('proximos')
    const { data: team, isLoading, isError } = useGetTeam(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los equipos!')

    return (
        <>
            <main className="container mx-auto min-h-screen p-1 lg:w-3/5">
                <div className="mx-auto lg:w-3/4">
                    <CardTeam team={team} setKey={setKey} />

                    <div
                        className="flex gap-1 mt-1 justify-center mx-auto "
                        role="group"
                    >
                        <Button
                            size="sm"
                            pill
                            color="gray"
                            className="p-0 text-gray-600"
                            onClick={() => {
                                setStatus(true)
                                setKey('proximos')
                            }}
                        >
                            <img
                                src={next}
                                alt="next"
                                className="h-4 w-4 mr-0.5 mt-0.5"
                            />
                            Próximos
                        </Button>
                        {team?.sport?._id !== sport.ID_SOCCER &&
                            team?.sport?._id !== sport.ID_TENNIS ? (
                            <Button
                                size="sm"
                                pill
                                color="gray"
                                className="p-0 text-gray-600"
                                onClick={() => setKey('posiciones')}
                            >
                                <img
                                    src={trophy}
                                    alt="trophy"
                                    className="h-4 w-4 mr-0.5 mt-0.5"
                                />
                                Calificación
                            </Button>
                        ) : null}

                        {team?.sport?._id !== sport.ID_TENNIS ? (
                            <Button
                                size="sm"
                                pill
                                color="gray"
                                className="p-0 text-gray-600"
                                onClick={() => setKey('plantilla')}
                            >
                                <img
                                    src={strategy}
                                    alt="strategy"
                                    className="h-4 w-4 mr-0.5 mt-0.5"
                                />
                                Plantilla
                            </Button>
                        ) : null}
                        <Button
                            size="sm"
                            pill
                            color="gray"
                            className="p-0 text-gray-600"
                            onClick={() => {
                                setStatus(false)
                                setKey('pasados')
                            }}
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
                        {key === 'posiciones' ? (
                            <SectionStandings team={team} />
                        ) : null}
                        {key === 'plantilla' ? (
                            <SectionRoster team={team} />
                        ) : null}
                        {key === 'proximos' ? (
                            <SectionMatches
                                team={team}
                                status={status}
                                title={'Próximos Partidos'}
                            />
                        ) : null}
                        {key === 'pasados' ? (
                            <SectionMatches
                                team={team}
                                status={status}
                                title={'Últimos Partidos'}
                            />
                        ) : null}
                    </section>
                </div>
            </main>
        </>
    )
}
export default TeamDetails
