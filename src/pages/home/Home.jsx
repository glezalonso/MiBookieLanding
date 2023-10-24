import React, { useState } from 'react'
import { useAuthStore } from '../../store/authorization'
import ButtonPill from '../comuncomponents/ButtonPill'
import formatedDate from '../../utils/formatedDate'
import tomorrowDate from '../../utils/tomorrowDate'
import yesterdayDate from '../../utils/yesterdayDate'
import SectionMatches from './components/SectionMatches'
import SectionLeagues from './components/SectionLeagues'
import SectionTop from './components/SectionTop'
import calendar from '../../icons/calendar.svg'
import medal from '../../icons/medal.svg'
import chat from '../../icons/chat.svg'
import SectionFollows from './components/SectionFollows'
import Forum from '../forum/Forum'

const Home = () => {
    const { isLogged } = useAuthStore((state) => state)

    const [key, setKey] = useState('foro')
    const [show, setShow] = useState(false)

    const date = formatedDate()
    const dateTomorrow = tomorrowDate()
    const dateYestadary = yesterdayDate()

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <>
            <main className="container mx-auto min-h-screen p-1 xl:w-4/5">
                <div className="sm:grid sm:grid-cols-4 sm:gap-5">
                    <div className="sm:col-span-3 sm:ml-1  ">
                        {/* Section menu tap */}
                        <div
                            className="flex gap-0.5 justify-center my-3 mx-auto sm:gap-2 "
                            role="group"
                        >
                            <ButtonPill
                                active={key === 'foro'}
                                img={chat}
                                onClick={() => setKey('foro')}
                            >
                                Foro
                            </ButtonPill>
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
                                        img={medal}
                                        onClick={() => handleShow()}
                                    >
                                        Top
                                    </ButtonPill>
                                </>
                            ) : null}
                        </div>
                        {/* Section tab */}
                        <section>
                            {key === 'foro' ? <Forum /> : null}
                            {key === 'hoy' ? (
                                <SectionMatches date={date} key={key} />
                            ) : null}
                            {key === 'mañana' ? (
                                <SectionMatches date={dateTomorrow} key={key} />
                            ) : null}
                            {key === 'ayer' ? (
                                <SectionMatches
                                    date={dateYestadary}
                                    key={key}
                                />
                            ) : null}
                        </section>
                    </div>
                    <div className="hidden sm:block sm:space-y-3 sm:col-span-1 sm:mt-2 sm:mx-2">
                        <SectionLeagues />
                        {isLogged ? <SectionFollows /> : null}
                    </div>
                </div>
                {isLogged ? (
                    <SectionTop show={show} handleClose={handleClose} />
                ) : null}
            </main>
        </>
    )
}

export default Home
