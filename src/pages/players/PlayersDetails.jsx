import React, { useState } from 'react'
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap'
import { toast } from 'react-hot-toast'
import CardPlayer from './components/CardPlayer'
import { useGetPlayer } from '../../features/players.features'
import { useParams } from 'react-router-dom'
import Loading from '../../ui/Loading'
import SectionMatches from './components/SectionMatches'
import SectionStandings from './components/SectionStandings'

const PlayerDetails = () => {
    const { id } = useParams()
    const ID_FUTBOL = '648f71dea4ba8860dfe3830f'
    const [key, setKey] = useState('proximos')
    const { data: player, isLoading, isError } = useGetPlayer(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los jugadores!')
    return (
        <>
            <Container fluid>
                <Row className="my-2 mx-auto">
                    <Col xs={12} md={10} className=" rounded mx-auto my-1 fs-6">
                        <CardPlayer player={player} />
                    </Col>
                    <Row className="my-2 mx-auto">
                        <Col xs={12} md={10} className="rounded my-1 mx-auto">
                            <Tabs
                                defaultActiveKey={key}
                                activeKey={key}
                                className="mb-3"
                                justify
                                onSelect={(key) => setKey(key)}
                            >
                                {player?.sport?._id === ID_FUTBOL ? null : (
                                    <Tab
                                        eventKey={'posiciones'}
                                        title="Posiciones"
                                    >
                                        {key === 'posiciones' ? (
                                            <SectionStandings player={player} />
                                        ) : null}
                                    </Tab>
                                )}
                                <Tab
                                    eventKey={'proximos'}
                                    title="Próximos Partidos"
                                >
                                    {key === 'proximos' ? (
                                        <SectionMatches
                                            player={player}
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
                                            player={player}
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

export default PlayerDetails
