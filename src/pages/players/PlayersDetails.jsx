import React, { useState } from 'react'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { toast } from 'react-hot-toast'
import CardPlayer from './components/CardPlayer'
import { useGetPlayer } from '../../features/players.features'
import { useParams } from 'react-router-dom'
import Loading from '../../ui/Loading'
import SectionStats from './components/SectionStats'
import SectionMatches from './components/SectionMatches'
import SectionStandings from './components/SectionStandings'

const PlayerDetails = () => {
    const { id } = useParams()
    const [key, setKey] = useState('proximos')
    const { data: player, isLoading, isError } = useGetPlayer(id)
    console.log(player?.team?.name)
    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los jugadores!')
    return (
        <>
            <Container fluid>
                <Row className="my-2 mx-auto">
                    <Col md={10} className=" rounded mx-auto my-1 fs-6">
                        <CardPlayer player={player} />
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
                                        <Nav.Link eventKey="proximos">
                                            Próximos partidos
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="posiciones">
                                            Posiciones
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="estadisticas">
                                            Estadísticas
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col md={10} className="rounded my-1 mx-auto">
                                <Tab.Content>
                                    <Tab.Pane eventKey={'proximos'}>
                                        {key === 'proximos' ? (
                                            <SectionMatches player={player} />
                                        ) : null}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={'posiciones'}>
                                        {key === 'posiciones' ? (
                                            <SectionStandings player={player} />
                                        ) : null}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={'estadisticas'}>
                                        {key === 'estadisticas' ? (
                                            <SectionStats />
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

export default PlayerDetails
