import React, { useState } from 'react'
import { useAuthStore } from '../../store/authorization'
import { Button } from 'flowbite-react'
import formatedDate from '../../utils/formatedDate'
import tomorrowDate from '../../utils/tomorrowDate'
import yesterdayDate from '../../utils/yesterdayDate'
import SectionMatches from './components/SectionMatches'
import SectionLeagues from './components/SectionLeagues'
import SectionTop from './components/SectionTop'
import calendar from '../../icons/calendar.svg'
import medalwhite from '../../icons/medalwhite.svg'

const Home = () => {
    const { isLogged } = useAuthStore((state) => state)

    const [key, setKey] = useState('hoy')
    const [show, setShow] = useState(false)

    const date = formatedDate()
    const dateTomorrow = tomorrowDate()
    const dateYestadary = yesterdayDate()

    const handleShow = () => setShow(true)

    const handleClose = () => setShow(false)

    return (
        <>
            <main className="container mx-auto min-h-screen p-1 lg:w-4/6">
                <div className="sm:grid sm:grid-cols-4 sm:gap-5">
                    <div className="sm:col-span-3 sm:ml-1  ">
                        <div
                            className="flex gap-0.5 justify-center  mt-2.5  mx-auto sm:gap-2 "
                            role="group"
                        >
                            <Button
                                size="sm"
                                pill
                                color="light"
                                className={`${
                                    key === 'ayer'
                                        ? 'bg-gray-800 text-gray-400'
                                        : 'bg-white'
                                } p-0 sm:px-4 `}
                                onClick={() => setKey('ayer')}
                            >
                                <img
                                    src={calendar}
                                    alt="yesterday"
                                    className="h-4 w-4 mr-0.5 mt-0.5"
                                />
                                Ayer
                            </Button>
                            <Button
                                size="sm"
                                pill
                                color="light"
                                className={`${
                                    key === 'hoy'
                                        ? 'bg-gray-800 text-gray-400'
                                        : 'bg-white'
                                } p-0 sm:px-4 `}
                                onClick={() => setKey('hoy')}
                            >
                                <img
                                    src={calendar}
                                    alt="today"
                                    className="h-4 w-4 mr-0.5 mt-0.5"
                                />
                                Hoy
                            </Button>
                            <Button
                                size="sm"
                                pill
                                color="light"
                                className={`${
                                    key === 'mañana'
                                        ? 'bg-gray-800 text-gray-400'
                                        : 'bg-white'
                                } p-0 sm:px-4 `}
                                onClick={() => setKey('mañana')}
                            >
                                <img
                                    src={calendar}
                                    alt="Mañana"
                                    className="h-4 w-4 mr-0.5 mt-0.5"
                                />
                                Mañana
                            </Button>
                            {isLogged ? (
                                <>
                                    <Button
                                        size="sm"
                                        pill
                                        color="light"
                                        className="p-0 sm:px-4 bg-white "
                                        onClick={() => handleShow()}
                                    >
                                        <img
                                            src={medalwhite}
                                            alt="Top"
                                            className="h-4 w-4 mr-0.5 mt-0.5"
                                        />
                                        Top
                                    </Button>
                                </>
                            ) : null}
                        </div>
                        <section>
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
                    <div className="hidden sm:block sm:col-span-1 sm:mt-2 sm:mx-2">
                        <SectionLeagues />
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
