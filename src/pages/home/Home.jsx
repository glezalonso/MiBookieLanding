import React, { useState } from 'react'
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import NavBar from '../../ui/Navbar'
import SectionMatches from './components/SectionMatches'
import SectionLeagues from './components/SectionLeagues'
import { useGetMatchesToday } from '../../features/matches.features'
import formatedDate from '../../utils/formatedDate'
import tomorrowDate from '../../utils/tomorrowDate'
import Loading from '../../ui/Loading'
import { toast } from 'react-hot-toast'
import { Person } from 'react-bootstrap-icons'
import BookiesFirends from './components/BookiesFriends'
import { useAuthStore } from '../../store/authorization'

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
                        <ButtonGroup className="d-flex mx-auto mt-3 gap-1  ">
                            {key === 'hoy' ? (
                                <Button
                                    size="sm"
                                    className="btn-warning rounded  "
                                    onClick={() => setKey('hoy')}
                                >
                                    <span>Partidos hoy</span>
                                </Button>
                            ) : (
                                <Button
                                    size="sm"
                                    className="btn-light rounded  "
                                    onClick={() => setKey('hoy')}
                                >
                                    <span>Partidos hoy</span>
                                </Button>
                            )}
                            {key === 'mañana' ? (
                                <Button
                                    size="sm"
                                    className=" btn-warning rounded  "
                                    onClick={() => setKey('mañana')}
                                >
                                    <span>Partidos mañana</span>
                                </Button>
                            ) : (
                                <Button
                                    size="sm"
                                    className=" btn-light rounded  "
                                    onClick={() => setKey('mañana')}
                                >
                                    <span>Partidos mañana</span>
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
                        {key === 'hoy' ? (
                            <SectionMatches matches={matchesToday} key={key} />
                        ) : null}
                        {key === 'mañana' ? (
                            <SectionMatches
                                matches={matchesTomorrow}
                                key={key}
                            />
                        ) : null}
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
