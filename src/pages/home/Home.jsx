import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SectionMatches from './components/SectionMatches'
import SectionLeagues from './components/SectionLeagues'

const Home = () => {
    return (
        <>
            <Container fluid>
                <Row className="my-2 mx-auto">
                    <Col md={8} className="rounded mx-auto my-1 fs-4">
                        <SectionMatches />
                    </Col>
                    <Col md={3} className="rounded my-1 mx-auto h-50">
                        <SectionLeagues />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
