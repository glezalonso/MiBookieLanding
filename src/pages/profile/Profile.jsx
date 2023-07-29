import React from 'react'
import NavBar from '../../ui/Navbar'
import { Container, Row, Col } from 'react-bootstrap'
import SectionPicks from './components/SectionPicks'

const Profile = () => {
    return (
        <>
            <NavBar />
            <Container>
                <Row className="my-2">
                    <Col xs={12} md={8} xl={7} className="mx-auto">
                        <SectionPicks />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Profile
