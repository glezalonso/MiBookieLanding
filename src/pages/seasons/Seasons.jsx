import React from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import Loading from '../../ui/Loading'

import { Container, Row, Col } from 'react-bootstrap'
import { useGetSeason } from '../../features/seasons.features'
import CardSeason from './components/CardSeason'
import SectionRounds from './components/SectionRounds'
import SectionStandings from './components/SectionStandings'

const Seasons = () => {
    const { id } = useParams()
    const { data: season, isLoading, isError } = useGetSeason(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar las temporadas')

    return (
        <>
            <Container fluid>
                <Row className="my-2  mx-auto">
                    <Col md={10} className="rounded my-1 mx-auto  ">
                        <CardSeason season={season} />
                    </Col>
                </Row>
                <Row className="my-2 mx-auto">
                    <Col md={5} className="mx-auto my-1">
                        <SectionRounds season={season} />
                    </Col>
                    <Col md={6} className="mx-auto my-1">
                        <SectionStandings season={season} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Seasons
