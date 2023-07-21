import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetLeague } from '../../features/leagues.features'
import { toast } from 'react-hot-toast'
import NavBar from '../../ui/Navbar'
import Loading from '../../ui/Loading'
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap'
import SectionLeague from './components/SectionLeague'
import SectionSeasons from './components/SectionSeasons'
import SectionMatches from './components/SectionMatches'
import {
    useGetMatchesOpenByLeague,
    useGetMatchesClosedByLeague,
} from '../../features/matches.features'

const Leagues = () => {
    const { id } = useParams()
    const [key, setKey] = useState('temporadas')
    const { data: league, isLoading, isError } = useGetLeague(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar la liga!')
    return (
        <>
            <NavBar />
            <Container fluid>
                <Row className="my-2 mx-auto ">
                    <Col xs={12} md={10} className="mx-auto my-1">
                        <SectionLeague league={league} />
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
                                <Tab eventKey={'temporadas'} title="Temporadas">
                                    {key === 'temporadas' ? (
                                        <SectionSeasons league={league} />
                                    ) : null}
                                </Tab>
                                <Tab
                                    eventKey={'proximos'}
                                    title="Próximos Partidos"
                                >
                                    {key === 'proximos' ? (
                                        <SectionMatches
                                            league={league}
                                            query={useGetMatchesOpenByLeague}
                                        />
                                    ) : null}
                                </Tab>
                                <Tab
                                    eventKey={'ultimos'}
                                    title="Últimos Partidos"
                                >
                                    {key === 'ultimos' ? (
                                        <SectionMatches
                                            league={league}
                                            query={useGetMatchesClosedByLeague}
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

export default Leagues
