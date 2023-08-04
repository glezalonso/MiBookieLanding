import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

// UI section
import Loading from '../../ui/Loading'
import NavBar from '../../ui/Navbar'

// Sections
import CardMatch from '../comuncomponents/CardMatch'
import SectionLineUps from './components/SectionLineUps'

import { useGetMatch } from '../../features/matches.features'

const Matches = () => {
    const { id } = useParams()
    const { data: match, isLoading, isError } = useGetMatch(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar el partido!')

    return (
        <>
            <NavBar />
            <Container>
                <Row className="my-2 ">
                    <Col xs={12} md={8} className="rounded mx-auto my-1 ">
                        <CardMatch match={match} />
                    </Col>
                </Row>
                <SectionLineUps match={match} />
            </Container>
        </>
    )
}

export default Matches
