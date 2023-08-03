import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import Loading from '../../ui/Loading'
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import { useGetSport } from '../../features/sports.features'
import NavBar from '../../ui/Navbar'
import CardSport from './components/CardSport'
import SectionLeaguesBySport from './components/SectionLeaguesBySport'
import SectionTodayMatches from './components/SectionTodayMatches'
import SectionPlayersBySport from './components/SectionPlayersBySport'
import SectionSeasonsBySport from './components/SectionSeasonsBySport'
import SectionPlayersTennis from './components/SectionPlayersTennis'
import SectionTeams from './components/SectionTeams'
import SectionNewsBySport from './components/SectionNewsBySport'

const Sports = () => {
    const { id } = useParams()
    const [key, setKey] = useState('hoy')
    const { data: sport, isLoading, isError } = useGetSport(id)
    const ID_TENNIS = '648f71eea4ba8860dfe38314'

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los deportes!')

    return (
        <>
            <NavBar />
            <Container fluid>
                <Row className="my-1">
                    <Col xs={12} md={8} className="mx-auto">
                        <CardSport sport={sport} />
                    </Col>
                    <Col xs={12} md={8} className="p-1 mx-auto ">
                        <ButtonGroup className="d-flex mx-auto my-3 gap-1  ">
                            {key === 'hoy' ? (
                                <Button
                                    size="sm"
                                    className=" btn-warning  "
                                    onClick={() => setKey('hoy')}
                                >
                                    Hoy
                                </Button>
                            ) : (
                                <Button
                                    size="sm"
                                    className=" btn-light  "
                                    onClick={() => setKey('hoy')}
                                >
                                    Hoy
                                </Button>
                            )}
                            {key === 'ligas' ? (
                                <Button
                                    size="sm"
                                    className="  btn-warning  "
                                    onClick={() => setKey('ligas')}
                                >
                                    Ligas
                                </Button>
                            ) : (
                                <Button
                                    size="sm"
                                    className=" btn-light  "
                                    onClick={() => setKey('ligas')}
                                >
                                    Ligas
                                </Button>
                            )}
                            {key === 'temporadas' ? (
                                <Button
                                    size="sm"
                                    className="  btn-warning "
                                    onClick={() => setKey('temporadas')}
                                >
                                    Temporadas
                                </Button>
                            ) : (
                                <Button
                                    size="sm"
                                    className="  btn-light  "
                                    onClick={() => setKey('temporadas')}
                                >
                                    Temporadas
                                </Button>
                            )}
                            {key === 'noticias' ? (
                                <Button
                                    size="sm"
                                    className=" btn-warning  "
                                    onClick={() => setKey('noticias')}
                                >
                                    Noticias
                                </Button>
                            ) : (
                                <Button
                                    size="sm"
                                    className=" btn-light  "
                                    onClick={() => setKey('noticias')}
                                >
                                    Noticias
                                </Button>
                            )}
                            {key === 'mas' ? (
                                <Button
                                    size="sm"
                                    className=" btn-warning "
                                    onClick={() => setKey('mas')}
                                >
                                    Más
                                </Button>
                            ) : (
                                <Button
                                    size="sm"
                                    className=" btn-light "
                                    onClick={() => setKey('mas')}
                                >
                                    Más
                                </Button>
                            )}
                        </ButtonGroup>

                        <section>
                            {key === 'ligas' ? (
                                <SectionLeaguesBySport sport={sport} />
                            ) : null}

                            {key === 'temporadas' ? (
                                <SectionSeasonsBySport sport={sport} />
                            ) : null}

                            {key === 'noticias' ? (
                                <SectionNewsBySport sport={sport} />
                            ) : null}

                            {key === 'hoy' ? (
                                <SectionTodayMatches sport={sport} />
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
                                            <SectionPlayersTennis
                                                sport={sport}
                                            />
                                        ) : (
                                            <SectionPlayersBySport
                                                sport={sport}
                                            />
                                        )}
                                    </Col>
                                </Row>
                            ) : null}
                        </section>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Sports
