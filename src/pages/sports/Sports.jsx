import React from 'react'
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
                </Row>
                <Tab.Container
                    defaultActiveKey="Ligas"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                >
                    <Row>
                        <Col md={10} className="rounded my-1 mx-auto">
                            <Nav variant="pills nav-fill">
                                <Nav.Item>
                                    <Nav.Link eventKey="Ligas">Ligas</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Temporada">
                                        Temporadas
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        variant="Warning"
                                        eventKey="Proximos"
                                    >
                                        Próximos partidos
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Mas">Más</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={10} className="rounded my-1 mx-auto">
                            <Tab.Content>
                                <Tab.Pane eventKey={'Ligas'}>
                                    <SectionLeaguesBySport sport={sport} />
                                </Tab.Pane>
                                <Tab.Pane eventKey={'Temporada'}>
                                    <SectionSeasonsBySport sport={sport} />
                                </Tab.Pane>
                                <Tab.Pane eventKey={'Proximos'}>
                                    <SectionNextMatches sport={sport} />
                                </Tab.Pane>
                                <Tab.Pane eventKey={'Mas'}>
                                    <Row>
                                        <Col
                                            style={
                                                sport?._id === ID_TENNIS
                                                    ? { display: 'none' }
                                                    : null
                                            }
                                            md={4}
                                            className="mx-auto my-1 h-75"
                                        >
                                            <SectionTeams
                                                style={
                                                    sport?._id === ID_TENNIS
                                                        ? { display: 'none' }
                                                        : null
                                                }
                                                sport={sport}
                                            />
                                        </Col>
                                        <Col
                                            md={6}
                                            className="mx-auto my-1 mh-75"
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
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </>
    )
}

export default Sports
