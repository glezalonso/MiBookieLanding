import React, { useState } from 'react'
import { Button } from 'flowbite-react'
import { toast } from 'react-hot-toast'
import NavBar from '../../ui/Navbar'
import CardPlayer from './components/CardPlayer'
import { useGetPlayer } from '../../features/players.features'
import { useParams } from 'react-router-dom'
import Loading from '../../ui/Loading'
import SectionMatches from './components/SectionMatches'
import SectionStandings from './components/SectionStandings'

const PlayerDetails = () => {
    const { id } = useParams()
    const ID_FUTBOL = '648f71dea4ba8860dfe3830f'

    const [key, setKey] = useState('proximos')
    const { data: player, isLoading, isError } = useGetPlayer(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los jugadores!')
    return (
        <>
            <NavBar />

            <div className="container px-0 mx-auto ">
                <div className="mx-auto lg:w-3/4">
                    <CardPlayer player={player} setKey={setKey} />

                    <div
                        className="flex gap-1 mt-1 justify-center mx-auto "
                        role="group"
                    >
                        {player?.sport?._id !== ID_FUTBOL ? (
                            <Button
                                pill
                                size="xs"
                                color="gray"
                                className=" text-gray-600"
                                onClick={() => setKey('posiciones')}
                            >
                                Posiciones
                            </Button>
                        ) : null}

                        <Button
                            pill
                            size="xs"
                            color="gray"
                            className=" text-gray-600"
                            onClick={() => setKey('proximos')}
                        >
                            Póximos
                        </Button>
                        <Button
                            pill
                            size="xs"
                            color="gray"
                            className=" text-gray-600"
                            onClick={() => setKey('pasados')}
                        >
                            Úlimos Partidos
                        </Button>
                    </div>
                    {key === 'posiciones' ? (
                        <SectionStandings player={player} />
                    ) : null}
                    {key === 'proximos' ? (
                        <SectionMatches
                            player={player}
                            open={true}
                            title={'Próximos Partidos'}
                        />
                    ) : null}
                    {key === 'pasados' ? (
                        <SectionMatches
                            player={player}
                            open={false}
                            title={'Últimos Partidos'}
                        />
                    ) : null}
                </div>
            </div>
        </>
    )
}

export default PlayerDetails
