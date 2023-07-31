import React, { useState } from 'react'
import NavBar from '../../ui/Navbar'
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import SectionNext from './components/SectionNext'
import SectionLast from './components/SectionLast'
import SectionFollowers from './components/SectionFollowers'
import SectionFollows from './components/SectionFollows'
import CardProfile from './components/CardProfile'
import { useGetBookie } from '../../features/users.features'

const Profile = () => {
    const { id } = useParams()
    const { data: user } = useGetBookie(id)
    const [key, setKey] = useState('ultimos')

    return (
        <>
            <NavBar />
            <Container>
                <Row className="my-2">
                    <Col xs={12} md={8} xl={7} className="mx-auto">
                        <CardProfile user={user} />

                        <ButtonGroup className="d-flex mx-auto mt-2 gap-2">
                            <Button
                                size="sm"
                                className=" btn-light rounded "
                                onClick={() => setKey('ultimos')}
                            >
                                <span
                                    style={
                                        key === 'ultimos'
                                            ? { fontWeight: 'bold' }
                                            : null
                                    }
                                >
                                    Últimas predicciones
                                </span>
                            </Button>
                            <Button
                                size="sm"
                                className=" btn-light rounded "
                                onClick={() => setKey('proximos')}
                            >
                                <span
                                    style={
                                        key === 'proximos'
                                            ? { fontWeight: 'bold' }
                                            : null
                                    }
                                >
                                    Próximas predicciones
                                </span>
                            </Button>
                        </ButtonGroup>
                        {key === 'ultimos' ? <SectionLast id={id} /> : null}
                        {key === 'proximos' ? <SectionNext id={id} /> : null}
                    </Col>
                    <Col xs={12} md={3} xl={4}>
                        <SectionFollowers user={user} />
                        <SectionFollows user={user} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Profile
