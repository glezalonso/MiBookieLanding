import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { toast } from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import Loading from '../../ui/Loading'
import { useGetTeam } from '../../features/teams.features'
import NavBar from '../../ui/Navbar'
import CardTeam from './components/CardTeam'
import SectionStandings from './components/SectionStandings'
import SectionMatches from './components/SectionMatches'
import SectionRoster from './components/SectionRoster'

const TeamDetails = () => {
    const { id } = useParams()

    const ID_FUTBOL = '648f71dea4ba8860dfe3830f'

    const [key, setKey] = useState('proximos')
    const { data: team, isLoading, isError } = useGetTeam(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los equipos!')
    return (
        <>
            <NavBar />
            <Container fluid>
                <Row className="my-2 ">
                    <Col xs={12} md={10} className=" mx-auto rounded-top  ">
                        <CardTeam team={team} setKey={setKey} />
                    </Col>

                    <Col
                        xs={12}
                        md={10}
                        className=" text-dark my-3 rounded  mx-auto "
                    >
                        <div className="d-flex mx-auto mt-2 mb-4 justify-content-center gap-2">
                            {key === 'proximos' ? (
                                <Button
                                    size="sm"
                                    className="btn-warning"
                                    onClick={() => setKey('proximos')}
                                >
                                    Próximos
                                </Button>
                            ) : (
                                <Button
                                    size="sm"
                                    className="btn-light"
                                    onClick={() => setKey('proximos')}
                                >
                                    Próximos
                                </Button>
                            )}

                            {key === 'posiciones' ? (
                                team?.sport?._id === ID_FUTBOL ? null : (
                                    <Button
                                        size="sm"
                                        className=" btn-warning "
                                        onClick={() => setKey('posiciones')}
                                    >
                                        Calificación
                                    </Button>
                                )
                            ) : team?.sport?._id === ID_FUTBOL ? null : (
                                <Button
                                    size="sm"
                                    className=" btn-light"
                                    onClick={() => setKey('posiciones')}
                                >
                                    Calificación
                                </Button>
                            )}
                            {key === 'plantilla' ? (
                                <Button
                                    size="sm"
                                    className="btn-warning"
                                    onClick={() => setKey('plantilla')}
                                >
                                    Plantilla
                                </Button>
                            ) : (
                                <Button
                                    size="sm"
                                    className="btn-light"
                                    onClick={() => setKey('plantilla')}
                                >
                                    Plantilla
                                </Button>
                            )}

                            {key === 'pasados' ? (
                                <Button
                                    size="sm"
                                    className="btn-warning"
                                    onClick={() => setKey('pasados')}
                                >
                                    Últimos
                                </Button>
                            ) : (
                                <Button
                                    size="sm"
                                    className="btn-light"
                                    onClick={() => setKey('pasados')}
                                >
                                    Últimos
                                </Button>
                            )}
                        </div>
                        {key === 'posiciones' ? (
                            <SectionStandings team={team} />
                        ) : null}
                        {key === 'plantilla' ? (
                            <SectionRoster team={team} />
                        ) : null}
                        {key === 'proximos' ? (
                            <SectionMatches
                                team={team}
                                open={true}
                                title={'Próximos Partidos'}
                            />
                        ) : null}
                        {key === 'pasados' ? (
                            <SectionMatches
                                team={team}
                                open={false}
                                title={'Últimos Partidos'}
                            />
                        ) : null}
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default TeamDetails
