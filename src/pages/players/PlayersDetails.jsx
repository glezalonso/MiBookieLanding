import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { toast } from 'react-hot-toast'
import CardPlayer from './components/CardPlayer'
import { useGetPlayer } from '../../features/players.features'
import { useParams } from 'react-router-dom'
import Loading from '../../ui/Loading'
import SectionStats from './components/SectionStats'
import SectionMatches from './components/SectionMatches'
import SectionStandings from './components/SectionStandings'

const PlayerDetails = () => {
    const { id } = useParams()
    const { data: player, isLoading, isError } = useGetPlayer(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los jugadores!')
    return (
        <>
            <Container fluid>
                <Row className="my-2 mx-auto">
                    <Col md={10} className=" rounded mx-auto my-1 fs-6">
                        <CardPlayer player={player} />
                    </Col>
                </Row>
                <Row className="m-2 mx-auto">
                    <Col md={10} className="mx-auto my-1">
                        <SectionStats />
                    </Col>
                </Row>
                <Row className="m-2 mx-auto">
                    <Col md={6} className=" mx-auto my-1">
                        <SectionMatches player={player} />
                    </Col>
                    <Col md={6} className="mx-auto my-1">
                        <SectionStandings player={player} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PlayerDetails
