import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SectionTeams from './components/SectionTeams'

const Teams = () => {
    return (
        <>
            <Container fluid>
                <Row className="my-2 mx-auto">
                    <Col md={12} className="mx-auto">
                        <SectionTeams />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Teams
