import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SectionPlayers from './components/SectionPlayers'

const Players = () => {
    return (
        <>
            <Container fluid>
                <Row className="m-2 mx-auto">
                    <Col md={12} className=" rounded mx-auto my-1 fs-4">
                        <SectionPlayers />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Players
