import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import Loading from '../../ui/Loading'
import NavBar from '../../ui/Navbar'
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap'
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
            <NavBar />
            <Container fluid>
                <Row className="my-2  mx-auto">
                    <Col xs={12} md={10} className="rounded my-1 mx-auto  ">
                        <CardSeason season={season} />
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
                                <Tab eventKey={'posiciones'} title="Posiciones">
                                    {key === 'posiciones' ? (
                                        <SectionStandings season={season} />
                                    ) : null}
                                </Tab>
                                <Tab eventKey={'rondas'} title="Rondas">
                                    {key === 'rondas' ? (
                                        <SectionRounds season={season} />
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
export default Seasons
