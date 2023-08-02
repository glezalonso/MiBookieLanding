import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetLeague } from '../../features/leagues.features'
import { toast } from 'react-hot-toast'
import NavBar from '../../ui/Navbar'
import Loading from '../../ui/Loading'
import { Container, Row, Col, Button } from 'react-bootstrap'
import SectionLeague from './components/SectionLeague'
import SectionSeasons from './components/SectionSeasons'
import SectionMatches from './components/SectionMatches'
import {
    useGetMatchesOpenByLeague,
    useGetMatchesClosedByLeague,
} from '../../features/matches.features'

const Leagues = () => {
    const { id } = useParams()
    const [key, setKey] = useState('proximos')
    const { data: league, isLoading, isError } = useGetLeague(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar la liga!')
    return (
        <>
            <NavBar />
            <Container fluid>
                <Row className="my-2">
                    <Col xs={12} md={10} className="mx-auto">
                        <SectionLeague league={league} />
                    </Col>
                    <Col
                        xs={12}
                        md={10}
                        className=" mx-auto justify-content-center "
                    >
                        <div className="d-flex mx-auto my-2 justify-content-center gap-2">
                            {key === 'proximos' ? (
                                <Button
                                    size="sm"
                                    className="btn-warning "
                                    onClick={() => setKey('proximos')}
                                >
                                    Próximos partidos
                                </Button>
                            ) : (
                                <Button
                                    size="sm"
                                    className="btn-light"
                                    onClick={() => setKey('proximos')}
                                >
                                    Próximos partidos
                                </Button>
                            )}
                            {key === 'temporadas' ? (
                                <Button
                                    size="sm"
                                    className="btn-warning"
                                    onClick={() => setKey('temporadas')}
                                >
                                    Temporadas
                                </Button>
                            ) : (
                                <Button
                                    size="sm"
                                    className="btn-light"
                                    onClick={() => setKey('temporadas')}
                                >
                                    Temporadas
                                </Button>
                            )}
                            {key === 'ultimos' ? (
                                <Button
                                    size="sm"
                                    className="btn-warning "
                                    onClick={() => setKey('ultimos')}
                                >
                                    Últimos partidos
                                </Button>
                            ) : (
                                <Button
                                    size="sm"
                                    className="btn-light"
                                    onClick={() => setKey('ultimos')}
                                >
                                    Últimos partidos
                                </Button>
                            )}
                        </div>
                    </Col>
                    <Col xs={12} md={10} className="mx-auto p-1 text-dark my-3">
                        {key === 'temporadas' ? (
                            <SectionSeasons league={league} />
                        ) : null}
                        {key === 'proximos' ? (
                            <SectionMatches
                                league={league}
                                query={useGetMatchesOpenByLeague}
                            />
                        ) : null}
                        {key === 'ultimos' ? (
                            <SectionMatches
                                league={league}
                                query={useGetMatchesClosedByLeague}
                            />
                        ) : null}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Leagues
