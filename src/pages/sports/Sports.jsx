import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import Loading from '../../ui/Loading'
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap'
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
                    <Col xs={12} className="rounded my-1 mx-auto">
                        <CardSport sport={sport} />
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
                                <Tab eventKey={'ligas'} title="Ligas">
                                    {key === 'ligas' ? (
                                        <SectionLeaguesBySport sport={sport} />
                                    ) : null}
                                </Tab>
                                <Tab eventKey={'temporada'} title="Temporadas">
                                    {key === 'temporada' ? (
                                        <SectionSeasonsBySport sport={sport} />
                                    ) : null}
                                </Tab>
                                <Tab
                                    eventKey={'proximos'}
                                    title="Próximos partidos"
                                >
                                    {key === 'proximos' ? (
                                        <SectionNextMatches sport={sport} />
                                    ) : null}
                                </Tab>
                                <Tab eventKey={'mas'} title="Más">
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
                                                md={6}
                                                className="mx-auto my-1 h-50"
                                            >
                                                <SectionTeams
                                                    style={
                                                        sport?._id === ID_TENNIS
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
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </>
    )
}

export default Sports
