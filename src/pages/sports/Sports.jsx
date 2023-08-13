import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Button } from 'flowbite-react'
import { useGetSport } from '../../features/sports.features'
import { sport as ids } from '../../const/sportconst'

//  UI sections
import Loading from '../../ui/Loading'
import NavBar from '../../ui/Navbar'

// Section
import CardSport from './components/CardSport'
import SectionLeaguesBySport from './components/SectionLeaguesBySport'
import SectionTodayMatches from './components/SectionTodayMatches'
import SectionPlayersBySport from './components/SectionPlayersBySport'
import SectionSeasonsBySport from './components/SectionSeasonsBySport'
import SectionPlayersTennis from './components/SectionPlayersTennis'
import SectionTeams from './components/SectionTeams'

const Sports = () => {
    const { id } = useParams()
    const [key, setKey] = useState('hoy')
    const { data: sport, isLoading, isError } = useGetSport(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los deportes!')

    return (
        <>
            <NavBar />
            <div className="container px-0 mx:auto ">
                <div className="mx-auto lg:w-3/4">
                    <CardSport sport={sport} />

                    <div
                        className="flex gap-1 mt-4 justify-center mx-auto "
                        role="group"
                    >
                        <Button
                            size="sm"
                            color="gray"
                            className=" text-gray-600"
                            onClick={() => setKey('hoy')}
                        >
                            Hoy
                        </Button>
                        <Button
                            size="sm"
                            color="gray"
                            className=" text-gray-600"
                            onClick={() => setKey('ligas')}
                        >
                            Ligas
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
                            onClick={() => setKey('mas')}
                        >
                            Equipos y jugadores
                        </Button>
                    </div>

                    <section>
                        {key === 'ligas' ? (
                            <SectionLeaguesBySport sport={sport} />
                        ) : null}

                        {key === 'temporadas' ? (
                            <SectionSeasonsBySport sport={sport} />
                        ) : null}

                        {key === 'hoy' ? (
                            <SectionTodayMatches sport={sport} />
                        ) : null}

                        {key === 'mas' ? (
                            <div className="grid sm:grid-cols-2 sm:gap-4 sm:mx-auto  ">
                                {sport?._id !== ids.ID_TENNIS ? (
                                    <div>
                                        <SectionTeams sport={sport} />
                                    </div>
                                ) : null}

                                <div>
                                    {sport?._id === ids.ID_TENNIS ? (
                                        <SectionPlayersTennis sport={sport} />
                                    ) : (
                                        <SectionPlayersBySport sport={sport} />
                                    )}
                                </div>
                            </div>
                        ) : null}
                    </section>
                </div>
            </div>
        </>
    )
}

export default Sports
