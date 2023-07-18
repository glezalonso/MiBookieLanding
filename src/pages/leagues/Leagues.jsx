import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetLeague } from '../../features/leagues.features'
import { toast } from 'react-hot-toast'
import Loading from '../../ui/Loading'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import SectionLeague from './components/SectionLeague'
import SectionSeasons from './components/SectionSeasons'
import SectionMatches from './components/SectionMatches'

const Leagues = () => {
    const { id } = useParams()
    const [key, setKey] = useState('temporadas')
    const { data: league, isLoading, isError } = useGetLeague(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar la liga!')
    return (
        <>
            <Container fluid>
                <Row className="my-2 mx-auto ">
                    <Col md={10} className="mx-auto my-1">
                        <SectionLeague league={league} />
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
                                        <Nav.Link eventKey="temporadas">
                                            Temporadas disponibles
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="proximos">
                                            Próximos partidos
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col md={10} className="rounded my-1 mx-auto">
                                <Tab.Content>
                                    <Tab.Pane eventKey={'temporadas'}>
                                        {key === 'temporadas' ? (
                                            <SectionSeasons league={league} />
                                        ) : null}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={'proximos'}>
                                        {key === 'proximos' ? (
                                            <SectionMatches league={league} />
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

export default Leagues
