import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NavBar from '../../ui/Navbar'
import SectionMatches from './components/SectionMatches'
import SectionLeagues from './components/SectionLeagues'

const Home = () => {
    return (
        <>
            <NavBar />
            <Container>
                <Row className="my-2">
                    <Col xs={12} md={8} className="mx-auto">
                        <SectionMatches />
                    </Col>
                    <Col md={4} className="mx-auto d-none d-md-block">
                        <SectionLeagues />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
