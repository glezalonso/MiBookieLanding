import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetLeague } from '../../features/leagues.features'
import { toast } from 'react-hot-toast'
import Loading from '../../ui/Loading'
import { Container, Row, Col } from 'react-bootstrap'
import SectionLeague from './components/SectionLeague'
import SectionSeasons from './components/SectionSeasons'
import SectionMatches from './components/SectionMatches'

const Leagues = () => {
    const { id } = useParams()
    const { data: league, isLoading, isError } = useGetLeague(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar la liga!')
    return (
        <>
            <Container fluid>
                <Row className="my-2 mx-auto ">
                    <Col md={10} className="mx-auto my-1">
                        <SectionLeague league={league} />
                    </Col>
                </Row>
                <Row className="my-2 mx-auto">
                    <Col md={3} className="mx-auto my-1">
                        <SectionSeasons league={league} />
                    </Col>
                    <Col md={8} className="mx-auto my-1">
                        <SectionMatches league={league} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Leagues
