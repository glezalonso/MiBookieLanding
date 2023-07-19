import React, { useState } from 'react'
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap'
import { toast } from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import Loading from '../../ui/Loading'
import { useGetTeam } from '../../features/teams.features'
import CardTeam from './components/CardTeam'
import SectionStandings from './components/SectionStandings'
import SectionMatches from './components/SectionMatches'
import SectionRoster from './components/SectionRoster'

const TeamDetails = () => {
    const { id } = useParams()
    const ID_FUTBOL = '648f71dea4ba8860dfe3830f'
    const [key, setKey] = useState('plantilla')
    const { data: team, isLoading, isError } = useGetTeam(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los equipos!')
    return (
        <>
            <Container fluid>
                <Row className="my-2 mx-auto">
                    <Col xs={6} className=" rounded mx-auto">
                        <CardTeam team={team} />
                    </Col>

                    <Row className="my-2 mx-auto">
                        <Col xs={12} className="rounded my-1 mx-auto">
                            <Tabs
                                defaultActiveKey={key}
                                activeKey={key}
                                className="mb-3"
                                justify
                                onSelect={(key) => setKey(key)}
                            >
                                {team?.sport?._id === ID_FUTBOL ? null : (
                                    <Tab
                                        eventKey={'posiciones'}
                                        title="Posiciones"
                                    >
                                        {key === 'posiciones' ? (
                                            <SectionStandings team={team} />
                                        ) : null}
                                    </Tab>
                                )}
                                <Tab eventKey={'plantilla'} title="Plantilla">
                                    {key === 'plantilla' ? (
                                        <SectionRoster team={team} />
                                    ) : null}
                                </Tab>
                                <Tab
                                    eventKey={'proximos'}
                                    title="Próximos Partidos"
                                >
                                    {key === 'proximos' ? (
                                        <SectionMatches
                                            team={team}
                                            open={true}
                                            title={'Próximos Partidos'}
                                        />
                                    ) : null}
                                </Tab>
                                <Tab
                                    eventKey={'pasados'}
                                    title="Últimos Partidos"
                                >
                                    {key === 'pasados' ? (
                                        <SectionMatches
                                            team={team}
                                            open={false}
                                            title={'Últimos Partidos'}
                                        />
                                    ) : null}
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </>
    )
}
export default TeamDetails
