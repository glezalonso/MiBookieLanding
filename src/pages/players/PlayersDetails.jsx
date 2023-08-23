import React, { useState } from 'react'
import { Button } from 'flowbite-react'
import { toast } from 'react-hot-toast'
import { useGetPlayer } from '../../features/players.features'
import { useParams } from 'react-router-dom'
import { sport } from '../../const/sportconst'
import CardPlayer from './components/CardPlayer'
import SectionMatches from './components/SectionMatches'
import SectionStandings from './components/SectionStandings'
import Loading from '../../ui/Loading'
import next from '../../icons/next.svg'
import back from '../../icons/back.svg'
import trophy from '../../icons/trophy.svg'

const PlayerDetails = () => {
    const { id } = useParams()
    const [status, setStatus] = useState(true)
    const [key, setKey] = useState('proximos')
    const { data: player, isLoading, isError } = useGetPlayer(id)
    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los jugadores!')
    return (
        <>
            <main className="container p-1  min-h-screen mx-auto lg:w-3/5 ">
                <div className="mx-auto lg:w-3/4">
                    <CardPlayer player={player} setKey={setKey} />

                    <div
                        className="flex gap-1 mt-1 justify-center mx-auto "
                        role="group"
                    >
                        {player?.sport?._id !== sport.ID_SOCCER ? (
                            <Button
                                size="sm"
                                pill
                                color="gray"
                                className="p-0 sm:px-4 "
                                onClick={() => setKey('posiciones')}
                            >
                                <img
                                    src={trophy}
                                    alt="trophy"
                                    className="h-4 w-4 mr-0.5 mt-0.5"
                                />
                                Posiciones
                            </Button>
                        ) : null}

                        <Button
                            size="sm"
                            pill
                            color="gray"
                            className="p-0 sm:px-4 "
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
                            Póximos
                        </Button>
                        <Button
                            size="sm"
                            pill
                            color="gray"
                            className="p-0 sm:px-4 "
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
                            Úlimos Partidos
                        </Button>
                    </div>
                    {key === 'posiciones' ? (
                        <SectionStandings player={player} />
                    ) : null}
                    {key === 'proximos' ? (
                        <SectionMatches
                            player={player}
                            status={status}
                            title={'Próximos Partidos'}
                        />
                    ) : null}
                    {key === 'pasados' ? (
                        <SectionMatches
                            player={player}
                            status={status}
                            title={'Últimos Partidos'}
                        />
                    ) : null}
                </div>
            </main>
        </>
    )
}

export default PlayerDetails
