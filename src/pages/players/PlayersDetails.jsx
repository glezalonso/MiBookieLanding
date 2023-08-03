import React, { useState } from 'react'
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import { toast } from 'react-hot-toast'
import NavBar from '../../ui/Navbar'
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
            <NavBar />

            <Container fluid>
                <Row className="my-2 ">
                    <Col xs={12} md={8} className="p-1 mx-auto ">
                        <CardPlayer player={player} setKey={setKey} />
                    </Col>

                    <Col xs={12} md={8} className="p-1 mx-auto ">
                        <ButtonGroup className="d-flex mx-auto my-3 gap-1  ">
                            {key === 'posiciones' ? (
                                player?.sport?._id === ID_FUTBOL ? null : (
                                    <Button
                                        size="sm"
                                        className="btn-warning"
                                        onClick={() => setKey('posiciones')}
                                    >
                                        Posiciones
                                    </Button>
                                )
                            ) : player?.sport?._id === ID_FUTBOL ? null : (
                                <Button
                                    size="sm"
                                    className="btn-light"
                                    onClick={() => setKey('posiciones')}
                                >
                                    Posiciones
                                </Button>
                            )}

                            {key === 'proximos' ? (
                                <Button
                                    size="sm"
                                    className="btn-warning"
                                    onClick={() => setKey('proximos')}
                                >
                                    Póximos
                                </Button>
                            ) : (
                                <Button
                                    size="sm"
                                    className="btn-light"
                                    onClick={() => setKey('proximos')}
                                >
                                    Póximos
                                </Button>
                            )}
                            {key === 'pasados' ? (
                                <Button
                                    size="sm"
                                    className="btn-warning"
                                    onClick={() => setKey('pasados')}
                                >
                                    Úlimos Partidos
                                </Button>
                            ) : (
                                <Button
                                    size="sm"
                                    className="btn-light"
                                    onClick={() => setKey('pasados')}
                                >
                                    Úlimos Partidos
                                </Button>
                            )}
                        </ButtonGroup>
                        {key === 'posiciones' ? (
                            <SectionStandings player={player} />
                        ) : null}
                        {key === 'proximos' ? (
                            <SectionMatches
                                player={player}
                                open={true}
                                title={'Próximos Partidos'}
                            />
                        ) : null}
                        {key === 'pasados' ? (
                            <SectionMatches
                                player={player}
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

export default PlayerDetails
