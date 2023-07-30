import React from 'react'
import NavBar from '../../ui/Navbar'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import SectionContent from './components/SectionContent'
import CardProfile from './components/CardProfile'
import { useGetBookie } from '../../features/users.features'

const Profile = () => {
    const { id } = useParams()
    const { data: user } = useGetBookie(id)
    return (
        <>
            <NavBar />
            <Container>
                <Row className="my-2">
                    <Col xs={12} md={8} xl={7} className="mx-auto">
                        <CardProfile id={id} user={user} />
                    </Col>
                    <Col xs={12} md={8} xl={7} className="mx-auto">
                        <SectionContent id={id} user={user} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Profile
