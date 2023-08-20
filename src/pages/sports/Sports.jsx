import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Button } from 'flowbite-react'
import { useGetSport } from '../../features/sports.features'

//  UI sections
import Loading from '../../ui/Loading'
import NavBar from '../../ui/Navbar'
import calendarToday from '../../icons/calendarToday.svg'
import calendarYesterday from '../../icons/calendarYesterday.svg'
import calendarTomorrow from '../../icons/calendarTomorrow.svg'
import leagues from '../../icons/leagues.svg'

// Section
import SectionLeaguesBySport from './components/SectionLeaguesBySport'
import SectionTodayMatches from './components/SectionTodayMatches'

// Utils
import formatedDate from '../../utils/formatedDate'
import tomorrowDate from '../../utils/tomorrowDate'
import yesterdayDate from '../../utils/yesterdayDate'

const Sports = () => {
    const { id } = useParams()
    const [key, setKey] = useState('hoy')
    const { data: sport, isLoading, isError } = useGetSport(id)
    const date = formatedDate()
    const dateTomorrow = tomorrowDate()
    const dateYestadary = yesterdayDate()

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los deportes!')

    return (
        <>
            <NavBar />
            <main className="w-full container mx-auto lg:w-3/4 p-1">
                <div
                    className="flex gap-0.5 mt-4 justify-center mx-auto "
                    role="group"
                >
                    <Button
                        size="sm"
                        pill
                        color="gray"
                        className=" text-gray-600 p-0 px-0  sm:px-4 "
                        onClick={() => setKey('ayer')}
                    >
                        <div className="flex">
                            <div>
                                <img
                                    src={calendarYesterday}
                                    alt="Ayer"
                                    className="h-5 w-5"
                                />
                            </div>
                            <div className="ml-1">
                                <span>Ayer</span>
                            </div>
                        </div>
                    </Button>

                    <Button
                        size="sm"
                        pill
                        color="gray"
                        className=" text-gray-600 p-0  sm:px-4 "
                        onClick={() => setKey('hoy')}
                    >
                        <div className="flex">
                            <div>
                                <img
                                    src={calendarToday}
                                    alt="Hoy"
                                    className="h-5 w-5"
                                />
                            </div>
                            <div className="ml-1">
                                <span>Hoy</span>
                            </div>
                        </div>
                    </Button>

                    <Button
                        size="sm"
                        pill
                        color="gray"
                        className=" text-gray-600 p-0  sm:px-4 "
                        onClick={() => setKey('mañana')}
                    >
                        <div className="flex">
                            <div>
                                <img
                                    src={calendarTomorrow}
                                    alt="Mañana"
                                    className="h-5 w-5"
                                />
                            </div>
                            <div className="ml-1">
                                <span>Mañana</span>
                            </div>
                        </div>
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
                </div>

                <section>
                    {key === 'ligas' ? (
                        <SectionLeaguesBySport sport={sport} />
                    ) : null}

                    {key === 'hoy' ? (
                        <SectionTodayMatches date={date} sport={sport} />
                    ) : null}
                    {key === 'mañana' ? (
                        <SectionTodayMatches
                            date={dateTomorrow}
                            sport={sport}
                        />
                    ) : null}
                    {key === 'ayer' ? (
                        <SectionTodayMatches
                            date={dateYestadary}
                            sport={sport}
                        />
                    ) : null}
                </section>
            </main>
        </>
    )
}

export default Sports
