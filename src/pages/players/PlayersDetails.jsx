import React, { useState } from 'react'
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap'
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
                <Row className="my-2 mx-auto">
                    <Col
                        xs={12}
                        md={10}
                        className=" bg-dark rounded-top mx-auto"
                    >
                        <CardPlayer player={player} />
                    </Col>
                    <Col
                        xs={12}
                        md={10}
                        className="bg-dark rounded-bottom mx-auto justify-content-center "
                    >
                        <ButtonGroup className="d-flex  mx-auto my-2">
                            {player?.sport?._id === ID_FUTBOL ? null : (
                                <Button
                                    size="sm"
                                    className=" mx-auto  btn-dark rounded "
                                    onClick={() => setKey('posiciones')}
                                >
                                    Posiciones
                                </Button>
                            )}
                            <Button
                                size="sm"
                                className=" mx-auto  btn-dark rounded "
                                onClick={() => setKey('proximos')}
                            >
                                Póximos Partidos
                            </Button>

                            <Button
                                size="sm"
                                className=" mx-auto  btn-dark rounded "
                                onClick={() => setKey('pasados')}
                            >
                                Úlimos Partidos
                            </Button>
                        </ButtonGroup>
                    </Col>
                    <Col
                        xs={12}
                        md={10}
                        className=" bg-light text-dark my-3 rounded  mx-auto"
                    >
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
