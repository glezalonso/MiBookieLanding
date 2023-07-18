import React, { useState } from 'react'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { toast } from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import Loading from '../../ui/Loading'
import { useGetTeam } from '../../features/teams.features'
import CardTeam from './components/CardTeam'
import SectionStats from './components/SectionStats'
import SectionMatches from './components/SectionMatches'
import SectionRoster from './components/SectionRoster'

const TeamDetails = () => {
    const { id } = useParams()
    const [key, setKey] = useState('proximos')
    const { data: team, isLoading, isError } = useGetTeam(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los equipos!')
    return (
        <>
            <Container fluid>
                <Row className="my-2 mx-auto">
                    <Col md={11} className=" rounded mx-auto">
                        <CardTeam team={team} />
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
                                            Proximos patidos
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="plantilla">
                                            Plantilla
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="estadistica">
                                            Estadística
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col md={10} className="rounded my-1 mx-auto">
                                <Tab.Content>
                                    <Tab.Pane eventKey={'proximos'}>
                                        {key === 'proximos' ? (
                                            <SectionMatches team={team} />
                                        ) : null}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={'plantilla'}>
                                        {key === 'plantilla' ? (
                                            <SectionRoster team={team} />
                                        ) : null}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={'estadistica'}>
                                        {key === 'estadistica' ? (
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
export default TeamDetails
