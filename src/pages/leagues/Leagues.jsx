import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetLeague } from '../../features/leagues.features'
import { toast } from 'react-hot-toast'
import NavBar from '../../ui/Navbar'
import Loading from '../../ui/Loading'
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap'
import SectionLeague from './components/SectionLeague'
import SectionSeasons from './components/SectionSeasons'
import SectionMatches from './components/SectionMatches'
import {
    useGetMatchesOpenByLeague,
    useGetMatchesClosedByLeague,
} from '../../features/matches.features'

const Leagues = () => {
    const { id } = useParams()
    const [key, setKey] = useState('temporadas')
    const { data: league, isLoading, isError } = useGetLeague(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar la liga!')
    return (
        <>
            <NavBar />
            <Container fluid>
                <Row className="my-2 mx-auto ">
                    <Col
                        xs={12}
                        md={10}
                        className=" bg-dark mx-auto rounded-top"
                    >
                        <SectionLeague league={league} />
                    </Col>

                    <Col
                        xs={12}
                        md={10}
                        className="bg-dark rounded-bottom mx-auto justify-content-center "
                    >
                        <ButtonGroup className="d-flex mx-auto my-2">
                            <Button
                                size="sm"
                                className=" mx-auto  btn-dark rounded "
                                onClick={() => setKey('temporadas')}
                            >
                                Temporadas
                            </Button>
                            <Button
                                size="sm"
                                className=" mx-auto  btn-dark rounded "
                                onClick={() => setKey('proximos')}
                            >
                                Próximos partidos
                            </Button>
                            <Button
                                size="sm"
                                className=" mx-auto  btn-dark rounded "
                                onClick={() => setKey('ultimos')}
                            >
                                Últimos partidos
                            </Button>
                        </ButtonGroup>
                    </Col>
                    <Col
                        xs={12}
                        md={10}
                        className=" bg-light text-dark my-3 rounded  mx-auto"
                    >
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
