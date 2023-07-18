import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import Loading from '../../ui/Loading'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { useGetSport } from '../../features/sports.features'
import CardSport from './components/CardSport'
import SectionLeaguesBySport from './components/SectionLeaguesBySport'
import SectionNextMatches from './components/SectionNextMatches'
import SectionPlayersBySport from './components/SectionPlayersBySport'
import SectionSeasonsBySport from './components/SectionSeasonsBySport'
import SectionPlayersTennis from './components/SectionPlayersTennis'
import SectionTeams from './components/SectionTeams'

const Sports = () => {
    const { id } = useParams()
    const [key, setKey] = useState('ligas')
    const { data: sport, isLoading, isError } = useGetSport(id)
    const ID_TENNIS = '648f71eea4ba8860dfe38314'

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los deportes!')

    return (
        <>
            <Container fluid>
                <Row className="my-2 mx-auto">
                    <Col md={10} className="rounded my-1 mx-auto">
                        <CardSport sport={sport} />
                    </Col>

                    <Tab.Container
                        defaultActiveKey={key}
                        activeKey={key}
                        className="my-3 mx-auto"
                        justify
                        onSelect={(key) => setKey(key)}
                    >
                        <Row>
                            <Col md={8} className=" my-1 mx-auto">
                                <Nav variant="pills nav-fill">
                                    <Nav.Item>
                                        <Nav.Link eventKey="ligas">
                                            ligas
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="temporada">
                                            Temporadas
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="proximos">
                                            Próximos partidos
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="mas">
                                            Jugadores y equipos
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col md={10} className="rounded my-1 mx-auto">
                                <Tab.Content>
                                    <Tab.Pane eventKey={'ligas'}>
                                        {key === 'ligas' ? (
                                            <SectionLeaguesBySport
                                                sport={sport}
                                            />
                                        ) : null}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={'temporada'}>
                                        {key === 'temporada' ? (
                                            <SectionSeasonsBySport
                                                sport={sport}
                                            />
                                        ) : null}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={'proximos'}>
                                        {key === 'proximos' ? (
                                            <SectionNextMatches sport={sport} />
                                        ) : null}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={'mas'}>
                                        {key === 'mas' ? (
                                            <Row>
                                                <Col
                                                    style={
                                                        sport?._id === ID_TENNIS
                                                            ? {
                                                                  display:
                                                                      'none',
                                                              }
                                                            : null
                                                    }
                                                    md={6}
                                                    className="mx-auto my-1 h-50"
                                                >
                                                    <SectionTeams
                                                        style={
                                                            sport?._id ===
                                                            ID_TENNIS
                                                                ? {
                                                                      display:
                                                                          'none',
                                                                  }
                                                                : null
                                                        }
                                                        sport={sport}
                                                    />
                                                </Col>
                                                <Col
                                                    md={6}
                                                    className="mx-auto my-1 mh-50"
                                                >
                                                    {sport?._id ===
                                                    ID_TENNIS ? (
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
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Row>
            </Container>
        </>
    )
}

export default Sports
