import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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

    const [key, setKey] = useState('proximos')
    const { data: player, isLoading, isError } = useGetPlayer(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los jugadores!')
    return (
        <>
            <NavBar />

            <Container fluid>
                <Row className="my-2 mx-auto">
                    <Col xs={12} md={10} className=" mx-auto rounded-top  ">
                        <CardPlayer player={player} setKey={setKey} />
                    </Col>

                    <Col
                        xs={12}
                        md={10}
                        className=" bg-light text-dark my-3 rounded  mx-auto shadow-lg"
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
