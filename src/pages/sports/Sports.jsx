import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useGetSport } from '../../features/sports.features'
import { useAuthStore } from '../../store/authorization'

//  UI sections
import ButtonPill from '../comuncomponents/ButtonPill'
import Loading from '../../ui/Loading'
import calendar from '../../icons/calendar.svg'
import trophytour from '../../icons/trophytour.svg'
import medal from '../../icons/medal.svg'

// Section
import SectionLeaguesBySport from './components/SectionLeaguesBySport'
import SectionTodayMatches from './components/SectionTodayMatches'
import SectionTopSport from './components/SectionTop'

// Utils
import formatedDate from '../../utils/formatedDate'
import tomorrowDate from '../../utils/tomorrowDate'
import yesterdayDate from '../../utils/yesterdayDate'

const Sports = () => {
    const date = formatedDate()
    const dateTomorrow = tomorrowDate()
    const dateYestadary = yesterdayDate()
    const { isLogged } = useAuthStore((state) => state)

    const { id } = useParams()
    const { data: sport, isLoading, isError } = useGetSport(id)

    const [show, setShow] = useState(false)
    const [key, setKey] = useState('hoy')

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los deportes!')

    return (
        <>
            <main className="container mx-auto min-h-screen p-1 lg:w-3/5">
                <div
                    className="flex gap-1 mt-2.5 justify-center mx-auto "
                    role="group"
                >
                    <ButtonPill
                        active={key === 'ayer'}
                        img={calendar}
                        onClick={() => setKey('ayer')}
                    >
                        Ayer
                    </ButtonPill>
                    <ButtonPill
                        active={key === 'hoy'}
                        img={calendar}
                        onClick={() => setKey('hoy')}
                    >
                        Hoy
                    </ButtonPill>
                    <ButtonPill
                        active={key === 'mañana'}
                        img={calendar}
                        onClick={() => setKey('mañana')}
                    >
                        Mañana
                    </ButtonPill>
                    {isLogged ? (
                        <>
                            <ButtonPill
                                active={false}
                                img={medal}
                                onClick={() => handleShow()}
                            >
                                Top
                            </ButtonPill>
                        </>
                    ) : null}
                    <ButtonPill
                        active={false}
                        img={trophytour}
                        onClick={() => setKey('ligas')}
                    >
                        Ligas
                    </ButtonPill>
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
                    {isLogged ? (
                        <SectionTopSport
                            sport={sport}
                            show={show}
                            handleClose={handleClose}
                        />
                    ) : null}
                </section>
            </main>
        </>
    )
}

export default Sports
