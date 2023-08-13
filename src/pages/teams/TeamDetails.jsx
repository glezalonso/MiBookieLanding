import React, { useState } from 'react'
import { Button } from 'flowbite-react'
import { toast } from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import { useGetTeam } from '../../features/teams.features'
import Loading from '../../ui/Loading'
import NavBar from '../../ui/Navbar'
import CardTeam from './components/CardTeam'
import SectionStandings from './components/SectionStandings'
import SectionMatches from './components/SectionMatches'
import SectionRoster from './components/SectionRoster'

const TeamDetails = () => {
    const { id } = useParams()

    const ID_FUTBOL = '648f71dea4ba8860dfe3830f'

    const [key, setKey] = useState('proximos')
    const { data: team, isLoading, isError } = useGetTeam(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los equipos!')
    return (
        <>
            <NavBar />
            <div className="container px-0 mx-auto ">
                <div className="mx-auto lg:w-3/4">
                    <CardTeam team={team} setKey={setKey} />

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
                            Próximos
                        </Button>
                        {team?.sport?._id !== ID_FUTBOL ? (
                            <Button
                                size="sm"
                                color="gray"
                                className=" text-gray-600"
                                onClick={() => setKey('posiciones')}
                            >
                                Calificación
                            </Button>
                        ) : null}

                        <Button
                            size="sm"
                            color="gray"
                            className=" text-gray-600"
                            onClick={() => setKey('plantilla')}
                        >
                            Plantilla
                        </Button>

                        <Button
                            size="sm"
                            color="gray"
                            className=" text-gray-600"
                            onClick={() => setKey('pasados')}
                        >
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
                                open={true}
                                title={'Próximos Partidos'}
                            />
                        ) : null}
                        {key === 'pasados' ? (
                            <SectionMatches
                                team={team}
                                open={false}
                                title={'Últimos Partidos'}
                            />
                        ) : null}
                    </section>
                </div>
            </div>
        </>
    )
}
export default TeamDetails
