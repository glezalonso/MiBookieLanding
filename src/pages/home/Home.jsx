import React, { useState } from 'react'
import { useAuthStore } from '../../store/authorization'
import { Button } from 'flowbite-react'
import formatedDate from '../../utils/formatedDate'
import tomorrowDate from '../../utils/tomorrowDate'
import yesterdayDate from '../../utils/yesterdayDate'
import BookiesFirends from './components/BookiesFriends'
import SectionMatches from './components/SectionMatches'
import SectionLeagues from './components/SectionLeagues'
import SectionTop from './components/SectionTop'
import calendarToday from '../../icons/calendarToday.svg'
import calendarYesterday from '../../icons/calendarYesterday.svg'
import calendarTomorrow from '../../icons/calendarTomorrow.svg'
import medal from '../../icons/medal.svg'
import bookies from '../../icons/bookies.svg'

const Home = () => {
    const { isLogged } = useAuthStore((state) => state)
    const [key, setKey] = useState('hoy')
    const [show, setShow] = useState(false)
    const [showTop, setShowTop] = useState(false)

    const date = formatedDate()
    const dateTomorrow = tomorrowDate()
    const dateYestadary = yesterdayDate()

    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setKey('hoy')
        setShow(false)
    }
    const handleShowTop = () => {
        setShowTop(true)
        setShow(false)
    }
    const handleCloseTop = () => {
        setShowTop(false)
        setKey('hoy')
        setShow(false)
    }

    return (
        <>
            <main className="container mx-auto p-1 lg:w-3/4">
                <div className="sm:grid sm:grid-cols-4 sm:gap-5    ">
                    <div className="sm:col-span-3 sm:ml-1  ">
                        <div
                            className="flex gap-0.5 justify-center  mt-2.5  mx-auto sm:gap-2 "
                            role="group"
                        >
                            <Button
                                size="sm"
                                pill
                                color="gray"
                                className="p-0 sm:px-4 "
                                onClick={() => setKey('ayer')}
                            >
                                <img
                                    src={calendarYesterday}
                                    alt="yesterday"
                                    className="h-4 w-4 mr-0.5 mt-0.5"
                                />
                                Ayer
                            </Button>
                            <Button
                                size="sm"
                                pill
                                color="gray"
                                className="p-0 sm:px-4 "
                                onClick={() => setKey('hoy')}
                            >
                                <img
                                    src={calendarToday}
                                    alt="today"
                                    className="h-4 w-4 mr-0.5 mt-0.5"
                                />
                                Hoy
                            </Button>
                            <Button
                                size="sm"
                                pill
                                color="gray"
                                className="p-0 sm:px-4 "
                                onClick={() => setKey('mañana')}
                            >
                                <img
                                    src={calendarTomorrow}
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
                                        color="gray"
                                        className="p-0  sm:px-4 "
                                        onClick={() => handleShowTop()}
                                    >
                                        <img
                                            src={medal}
                                            alt="Top"
                                            className="h-4 w-4 mr-0.5 mt-0.5"
                                        />
                                        Top
                                    </Button>
                                    <Button
                                        size="sm"
                                        pill
                                        color="gray"
                                        className="p-0 sm:px-4 "
                                        onClick={() => handleShow()}
                                    >
                                        <img
                                            src={bookies}
                                            alt="Bookies"
                                            className="h-4 w-4 mr-0.5 mt-0.5"
                                        />
                                        Bookies
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
                    <div className="hidden sm:block sm:col-span-1 sm:mt-6 sm:mx-2">
                        <SectionLeagues />
                    </div>
                </div>
                {isLogged ? (
                    <BookiesFirends show={show} handleClose={handleClose} />
                ) : null}
                {isLogged ? (
                    <SectionTop show={showTop} handleClose={handleCloseTop} />
                ) : null}
            </main>
        </>
    )
}

export default Home
