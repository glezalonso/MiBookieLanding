import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SectionMatches from './components/SectionMatches'
import SectionLeagues from './components/SectionLeagues'

const Home = () => {
    return (
        <>
            <Container fuild>
                <Row className="my-2">
                    <Col sm={8} className="mx-auto">
                        <SectionMatches />
                    </Col>
                    <Col sm={4} className="mx-auto">
                        <SectionLeagues />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
