import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Button } from 'flowbite-react'
import { useGetSport } from '../../features/sports.features'
import { sport as ids } from '../../const/sportconst'

//  UI sections
import Loading from '../../ui/Loading'
import NavBar from '../../ui/Navbar'
import caledarToday from '../../icons/calendarToday.svg'
import leagues from '../../icons/leagues.svg'
import teams from '../../icons/teams.svg'

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

    if (isError) return toast.error('Hubo un error al cargar los deportes!')

    return (
        <>
            <NavBar />
            {isLoading ? <Loading /> : null}
            <main className="container mx-auto lg:w-8/12 p-1">
                <CardSport sport={sport} />

                <div
                    className="flex gap-0.5 mt-4 justify-center mx-auto "
                    role="group"
                >
                    <Button
                        size="sm"
                        pill
                        color="gray"
                        className="p-0.5 text-gray-600"
                        onClick={() => setKey('hoy')}
                    >
                        <img
                            src={caledarToday}
                            alt="today"
                            className="w-5 h-5 mr-1"
                        />
                        Hoy
                    </Button>
                    <Button
                        size="sm"
                        pill
                        color="gray"
                        className="p-0.5 text-gray-600 "
                        onClick={() => setKey('ligas')}
                    >
                        <img
                            src={leagues}
                            alt="leagues"
                            className="w-5 h-5 mr-1 "
                        />
                        Ligas
                    </Button>
                    <Button
                        size="sm"
                        pill
                        color="gray"
                        className=" p-0.5 text-gray-600"
                        onClick={() => setKey('temporadas')}
                    >
                        <img
                            src={sport?.poster}
                            alt="seasons"
                            className="w-5 h-5 mr-1 "
                        />
                        Temporadas
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
                </section>
            </main>
        </>
    )
}

export default Sports
