import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import Loading from '../../ui/Loading'

import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { useGetSeason } from '../../features/seasons.features'
import CardSeason from './components/CardSeason'
import SectionRounds from './components/SectionRounds'
import SectionStandings from './components/SectionStandings'

const Seasons = () => {
    const { id } = useParams()
    const { data: season, isLoading, isError } = useGetSeason(id)
    const [key, setKey] = useState('posiciones')

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar las temporadas')

    return (
        <>
            <Container fluid>
                <Row className="my-2  mx-auto">
                    <Col md={10} className="rounded my-1 mx-auto  ">
                        <CardSeason season={season} />
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
                                        <Nav.Link eventKey="posiciones">
                                            Posiciones
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="rondas">
                                            Rondas
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Tab.Content>
                                <Col md={10} className="mx-auto my-1">
                                    <Tab.Pane eventKey={'posiciones'}>
                                        {key === 'posiciones' ? (
                                            <SectionStandings season={season} />
                                        ) : null}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={'rondas'}>
                                        {key === 'rondas' ? (
                                            <SectionRounds season={season} />
                                        ) : null}
                                    </Tab.Pane>
                                </Col>
                            </Tab.Content>
                        </Row>
                    </Tab.Container>
                </Row>
            </Container>
        </>
    )
}
export default Seasons
