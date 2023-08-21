import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Button } from 'flowbite-react'
import { useGetSport } from '../../features/sports.features'

//  UI sections
import Loading from '../../ui/Loading'
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
            <main className="w-full container mx-auto p-1 lg:w-3/5 ">
                <div
                    className="flex gap-0.5 mt-2.5 justify-center mx-auto "
                    role="group"
                >
                    <Button
                        size="sm"
                        pill
                        color="gray"
                        className="p-0 px-0  sm:px-4 "
                        onClick={() => setKey('ayer')}
                    >
                        <img
                            src={calendarYesterday}
                            alt="Ayer"
                            className="h-4 w-4 mr-0.5 mt-0.5"
                        />
                        Ayer
                    </Button>
                    <Button
                        size="sm"
                        pill
                        color="gray"
                        className="p-0 px-0  sm:px-4 "
                        onClick={() => setKey('hoy')}
                    >
                        <img
                            src={calendarToday}
                            alt="Hoy"
                            className="h-4 w-4 mr-0.5 mt-0.5"
                        />
                        Hoy
                    </Button>
                    <Button
                        size="sm"
                        pill
                        color="gray"
                        className="p-0 px-0  sm:px-4 "
                        onClick={() => setKey('mañana')}
                    >
                        <img
                            src={calendarTomorrow}
                            alt="Mañana"
                            className="h-4 w-4 mr-0.5 mt-0.5"
                        />
                        Mañana
                    </Button>
                    <Button
                        size="sm"
                        pill
                        color="gray"
                        className="p-0 px-0  sm:px-4 "
                        onClick={() => setKey('ligas')}
                    >
                        <img
                            src={leagues}
                            alt="leagues"
                            className="h-4 w-4 mr-0.5 mt-0.5"
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
