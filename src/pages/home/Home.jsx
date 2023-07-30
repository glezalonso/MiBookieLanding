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

const Home = () => {
    const [key, setKey] = useState('hoy')
    const date = formatedDate()
    const dateTomorrow = tomorrowDate()

    const { data: matchesToday, isLoading, isError } = useGetMatchesToday(date)
    const { data: matchesTomorrow } = useGetMatchesToday(dateTomorrow)
    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los partidos!')

    return (
        <>
            <NavBar />
            <Container>
                <Row className="my-2">
                    <Col xs={12} md={8} xl={7}>
                        <ButtonGroup className="d-flex mx-auto my-3  gap-2 p-1">
                            <Button
                                size="sm"
                                className="btn-light rounded  "
                                onClick={() => setKey('hoy')}
                            >
                                <span
                                    style={
                                        key === 'hoy'
                                            ? { fontWeight: 'bold' }
                                            : null
                                    }
                                >
                                    Partidos hoy
                                </span>
                            </Button>
                            <Button
                                size="sm"
                                className=" btn-light rounded  "
                                onClick={() => setKey('mañana')}
                            >
                                <span
                                    style={
                                        key === 'mañana'
                                            ? { fontWeight: 'bold' }
                                            : null
                                    }
                                >
                                    Partidos mañana
                                </span>
                            </Button>
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
            </Container>
        </>
    )
}

export default Home
