import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import Loading from '../../ui/Loading'
import NavBar from '../../ui/Navbar'
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap'
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
                    <Col
                        xs={12}
                        md={10}
                        className=" bg-dark rounded-top mx-auto"
                    >
                        <CardSeason season={season} />
                    </Col>
                    <Col
                        xs={12}
                        md={10}
                        className="bg-dark rounded-bottom mx-auto justify-content-center "
                    >
                        <ButtonGroup className="d-flex  mx-auto my-2">
                            <Button
                                size="sm"
                                className=" mx-auto  btn-dark rounded "
                                onClick={() => setKey('posiciones')}
                            >
                                Posiciones
                            </Button>
                            <Button
                                size="sm"
                                className=" mx-auto  btn-dark rounded "
                                onClick={() => setKey('rondas')}
                            >
                                Rondas
                            </Button>
                        </ButtonGroup>
                    </Col>
                    <Col
                        xs={12}
                        md={10}
                        className=" bg-light text-dark my-3 rounded  mx-auto"
                    >
                        {key === 'posiciones' ? (
                            <SectionStandings season={season} />
                        ) : null}
                        {key === 'rondas' ? (
                            <SectionRounds season={season} />
                        ) : null}
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Seasons
