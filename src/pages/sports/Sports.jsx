import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import Loading from '../../ui/Loading'
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import { useGetSport } from '../../features/sports.features'
import NavBar from '../../ui/Navbar'
import CardSport from './components/CardSport'
import SectionLeaguesBySport from './components/SectionLeaguesBySport'
import SectionNextMatches from './components/SectionNextMatches'
import SectionPlayersBySport from './components/SectionPlayersBySport'
import SectionSeasonsBySport from './components/SectionSeasonsBySport'
import SectionPlayersTennis from './components/SectionPlayersTennis'
import SectionTeams from './components/SectionTeams'
import SectionNewsBySport from './components/SectionNewsBySport'

const Sports = () => {
    const { id } = useParams()
    const [key, setKey] = useState('ligas')
    const { data: sport, isLoading, isError } = useGetSport(id)
    const ID_TENNIS = '648f71eea4ba8860dfe38314'

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los deportes!')

    return (
        <>
            <NavBar />
            <Container fluid>
                <Row className="my-2 mx-auto">
                    <Col
                        xs={12}
                        md={10}
                        className=" bg-dark rounded-top  mx-auto"
                    >
                        <CardSport sport={sport} />
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
                                onClick={() => setKey('ligas')}
                            >
                                Ligas
                            </Button>
                            <Button
                                size="sm"
                                className=" mx-auto  btn-dark rounded "
                                onClick={() => setKey('temporadas')}
                            >
                                Temporadas abiertas
                            </Button>
                            <Button
                                size="sm"
                                className=" mx-auto  btn-dark rounded "
                                onClick={() => setKey('proximos')}
                            >
                                Póximos Partidos
                            </Button>
                            <Button
                                size="sm"
                                className=" mx-auto  btn-dark rounded "
                                onClick={() => setKey('noticias')}
                            >
                                Noticias
                            </Button>

                            <Button
                                size="sm"
                                className=" mx-auto btn-dark rounded"
                                onClick={() => setKey('mas')}
                            >
                                Más
                            </Button>
                        </ButtonGroup>
                    </Col>
                    <Col
                        xs={12}
                        md={10}
                        className=" bg-light text-dark my-3 rounded  mx-auto"
                    >
                        {key === 'ligas' ? (
                            <SectionLeaguesBySport sport={sport} />
                        ) : null}

                        {key === 'temporadas' ? (
                            <SectionSeasonsBySport sport={sport} />
                        ) : null}

                        {key === 'noticias' ? (
                            <SectionNewsBySport sport={sport} />
                        ) : null}

                        {key === 'proximos' ? (
                            <SectionNextMatches sport={sport} />
                        ) : null}

                        {key === 'mas' ? (
                            <Row>
                                <Col
                                    style={
                                        sport?._id === ID_TENNIS
                                            ? {
                                                  display: 'none',
                                              }
                                            : null
                                    }
                                    md={5}
                                    className="mx-auto my-1 min-vh-75 m-vh-100"
                                >
                                    <SectionTeams
                                        style={
                                            sport?._id === ID_TENNIS
                                                ? {
                                                      display: 'none',
                                                  }
                                                : null
                                        }
                                        sport={sport}
                                    />
                                </Col>
                                <Col
                                    md={5}
                                    className="mx-auto my-1 min-vh-75 m-vh-100"
                                >
                                    {sport?._id === ID_TENNIS ? (
                                        <SectionPlayersTennis sport={sport} />
                                    ) : (
                                        <SectionPlayersBySport sport={sport} />
                                    )}
                                </Col>
                            </Row>
                        ) : null}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Sports
