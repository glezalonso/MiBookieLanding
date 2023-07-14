import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { toast } from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import Loading from '../../ui/Loading'
import { useGetTeam } from '../../features/teams.features'
import CardTeam from './components/CardTeam'
import SectionStats from './components/SectionStats'
import SectionMatches from './components/SectionMatches'
import SectionRoster from './components/SectionRoster'

const TeamDetails = () => {
    const { id } = useParams()

    const { data: team, isLoading, isError } = useGetTeam(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los equipos!')
    return (
        <>
            <Container fluid>
                <Row className="my-2 mx-auto">
                    <Col md={10} className=" rounded mx-auto fs-4">
                        <CardTeam team={team} />
                    </Col>
                </Row>
                <Row className="my-2 mx-auto">
                    <Col md={11} className=" mx-auto my-1 ">
                        <SectionStats />
                    </Col>
                </Row>
                <Row className="my-2 mx-auto">
                    <Col md={6} className=" mx-auto my-1">
                        <SectionMatches team={team} />
                    </Col>
                    <Col md={5} className="mx-auto my-1 ">
                        <SectionRoster team={team} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default TeamDetails
