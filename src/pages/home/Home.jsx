import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SectionMatches from './components/SectionMatches'
import SectionLeagues from './components/SectionLeagues'

const Home = () => {
    return (
        <>
            <Container fluid>
                <Row className="my-2 mx-auto">
                    <Col md={8} className="my-1 mx-auto min-vh-50 ">
                        <SectionMatches />
                    </Col>
                    <Col md={3} className="my-1 mx-auto min-vh-50 ">
                        <SectionLeagues />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
