import React, { useState } from 'react'
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import { useGetMatchesToday } from '../../features/matches.features'
import { useAuthStore } from '../../store/authorization'
import { toast } from 'react-hot-toast'
import { Person } from 'react-bootstrap-icons'
import formatedDate from '../../utils/formatedDate'
import tomorrowDate from '../../utils/tomorrowDate'
import Loading from '../../ui/Loading'
import NavBar from '../../ui/Navbar'
import BookiesFirends from './components/BookiesFriends'
import SectionMatches from './components/SectionMatches'
import SectionLeagues from './components/SectionLeagues'

const Home = () => {
    const { isLogged } = useAuthStore((state) => state)
    const [key, setKey] = useState('hoy')
    const [show, setShow] = useState(false)

    const date = formatedDate()
    const dateTomorrow = tomorrowDate()

    const handleShow = () => {
        setKey('bookies')
        setShow(true)
    }
    const handleClose = () => {
        setKey('hoy')
        setShow(false)
    }

    const { data: matchesToday, isLoading, isError } = useGetMatchesToday(date)
    const { data: matchesTomorrow } = useGetMatchesToday(dateTomorrow)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los partidos!')

    return (
        <>
            <NavBar />
            <Container fluid>
                <Row className="my-2">
                    <Col xs={12} md={8} className="p-1 mx-auto ">
                        <ButtonGroup className="d-flex mx-auto my-3 gap-1  ">
                            {key === 'hoy' ? (
                                <Button
                                    size="sm"
                                    className="btn-warning rounded  "
                                    onClick={() => setKey('hoy')}
                                >
                                    Partidos hoy
                                </Button>
                            ) : (
                                <Button
                                    size="sm"
                                    className="btn-light rounded  "
                                    onClick={() => setKey('hoy')}
                                >
                                    Partidos hoy
                                </Button>
                            )}
                            {key === 'mañana' ? (
                                <Button
                                    size="sm"
                                    className=" btn-warning rounded  "
                                    onClick={() => setKey('mañana')}
                                >
                                    Partidos mañana
                                </Button>
                            ) : (
                                <Button
                                    size="sm"
                                    className=" btn-light rounded  "
                                    onClick={() => setKey('mañana')}
                                >
                                    Partidos mañana
                                </Button>
                            )}

                            {isLogged ? (
                                <Button
                                    size="sm"
                                    className=" btn-light rounded "
                                    onClick={() => handleShow()}
                                >
                                    <Person
                                        size={'18px'}
                                        color="dark"
                                        className="mx-1"
                                    />
                                    <span className="my-1">Mis Bookies</span>
                                </Button>
                            ) : null}
                        </ButtonGroup>
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
                        </section>
                    </Col>
                    <Col md={3} className="mx-auto d-none d-md-block">
                        <SectionLeagues />
                    </Col>
                </Row>
                {isLogged ? (
                    <BookiesFirends show={show} handleClose={handleClose} />
                ) : null}
            </Container>
        </>
    )
}

export default Home
