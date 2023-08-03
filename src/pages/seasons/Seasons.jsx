import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import Loading from '../../ui/Loading'
import NavBar from '../../ui/Navbar'
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
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
                <Row className="my-2">
                    <Col xs={12} md={8} className=" mx-auto ">
                        <CardSeason season={season} setKey={setKey} />
                    </Col>
                    <Col xs={12} md={8} className="p-1 mx-auto ">
                        <ButtonGroup className="d-flex mx-auto my-3 gap-1  ">
                            {key === 'posiciones' ? (
                                <Button
                                    size="sm"
                                    className="btn-warning "
                                    onClick={() => setKey('posiciones')}
                                >
                                    Clasificación
                                </Button>
                            ) : (
                                <Button
                                    size="sm"
                                    className="btn-light"
                                    onClick={() => setKey('posiciones')}
                                >
                                    Posiciones
                                </Button>
                            )}
                            {key === 'rondas' ? (
                                <Button
                                    size="sm"
                                    className="btn-warning"
                                    onClick={() => setKey('rondas')}
                                >
                                    Rondas
                                </Button>
                            ) : (
                                <Button
                                    size="sm"
                                    className="btn-light"
                                    onClick={() => setKey('rondas')}
                                >
                                    Rondas
                                </Button>
                            )}
                        </ButtonGroup>
                        <section>
                            {key === 'posiciones' ? (
                                <SectionStandings season={season} />
                            ) : null}
                            {key === 'rondas' ? (
                                <SectionRounds season={season} />
                            ) : null}
                        </section>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Seasons
