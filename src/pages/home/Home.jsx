import React, { useState } from 'react'
import { useGetMatchesToday } from '../../features/matches.features'
import { useAuthStore } from '../../store/authorization'
import { toast } from 'react-hot-toast'
import { IoMdCalendar, IoMdMedal, IoMdPeople } from 'react-icons/io'
import { Button } from 'flowbite-react'
import formatedDate from '../../utils/formatedDate'
import tomorrowDate from '../../utils/tomorrowDate'
import yesterdayDate from '../../utils/yesterdayDate'
import Loading from '../../ui/Loading'
import NavBar from '../../ui/Navbar'
import BookiesFirends from './components/BookiesFriends'
import SectionMatches from './components/SectionMatches'
import SectionLeagues from './components/SectionLeagues'
import SectionTop from './components/SectionTop'

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

    const { data: matchesToday, isLoading, isError } = useGetMatchesToday(date)
    const { data: matchesTomorrow } = useGetMatchesToday(dateTomorrow)
    const { data: matchesYesterday } = useGetMatchesToday(dateYestadary)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los partidos!')

    return (
        <>
            <NavBar />
            <div className="container mx-auto">
                <div className="sm:grid sm:grid-cols-4 sm:gap-2 ">
                    <div className="sm:col-span-3 sm:ml-1">
                        <div
                            className="flex gap-.5 mt-4 justify-center mx-auto sm:gap-2 "
                            role="group"
                        >
                            <Button
                                size="sm"
                                color="gray"
                                className=" text-gray-600 py-0 px-0  sm:px-4 "
                                onClick={() => setKey('hoy')}
                            >
                                <div className="flex">
                                    <div>
                                        <IoMdCalendar className="h-5 w-5" />
                                    </div>
                                    <div className="my-0.5">
                                        <span className="ml-.5">Hoy</span>
                                    </div>
                                </div>
                            </Button>

                            <Button
                                size="sm"
                                color="gray"
                                className=" text-gray-600 py-0 px-0  sm:px-4 "
                                onClick={() => setKey('mañana')}
                            >
                                <div className="flex">
                                    <div>
                                        <IoMdCalendar className="h-5 w-5" />
                                    </div>
                                    <div className="my-0.5">
                                        <span className="ml-.5">Mañana</span>
                                    </div>
                                </div>
                            </Button>
                            <Button
                                size="sm"
                                color="gray"
                                className=" text-gray-600 py-0 px-0  sm:px-4 "
                                onClick={() => setKey('ayer')}
                            >
                                <div className="flex">
                                    <div>
                                        <IoMdCalendar className="h-5 w-5" />
                                    </div>
                                    <div className="my-0.5">
                                        <span className="ml-.5">Ayer</span>
                                    </div>
                                </div>
                            </Button>

                            {isLogged ? (
                                <>
                                    <Button
                                        size="sm"
                                        color="gray"
                                        className=" text-gray-600 py-0 px-0  sm:px-4 "
                                        onClick={() => handleShowTop()}
                                    >
                                        <div className="flex">
                                            <div>
                                                <IoMdMedal className="h-5 w-5" />
                                            </div>
                                            <div className="my-0.5">
                                                <span className="ml-.5">
                                                    Top
                                                </span>
                                            </div>
                                        </div>
                                    </Button>

                                    <Button
                                        size="sm"
                                        color="gray"
                                        className=" text-gray-600 py-0 px-0  sm:px-4 "
                                        onClick={() => handleShow()}
                                    >
                                        <div className="flex">
                                            <div>
                                                <IoMdPeople className="h-5 w-5" />
                                            </div>
                                            <div className="my-0.5">
                                                <span className="ml-.5">
                                                    Bookies
                                                </span>
                                            </div>
                                        </div>
                                    </Button>
                                </>
                            ) : null}
                        </div>
                        <section>
                            {key === 'hoy' ? (
                                <SectionMatches
                                    matches={matchesToday}
                                    key={key}
                                />
                            ) : null}
                            {key === 'mañana' ? (
                                <SectionMatches
                                    matches={matchesTomorrow}
                                    key={key}
                                />
                            ) : null}
                            {key === 'ayer' ? (
                                <SectionMatches
                                    matches={matchesYesterday}
                                    key={key}
                                />
                            ) : null}
                        </section>
                    </div>
                    <div className="hidden sm:block sm:col-span-1 sm:mt-5 sm:mx-2">
                        <SectionLeagues />
                    </div>
                </div>
                {isLogged ? (
                    <BookiesFirends show={show} handleClose={handleClose} />
                ) : null}
                {isLogged ? (
                    <SectionTop show={showTop} handleClose={handleCloseTop} />
                ) : null}
            </div>
        </>
    )
}

export default Home
