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
import { PeopleFill, PersonCheckFill } from 'react-bootstrap-icons'
import SectionRating from './components/SectionRating'

const Profile = () => {
    const { id } = useParams()
    const { data: user } = useGetBookie(id)
    const [key, setKey] = useState('proximos')

    return (
        <>
            <NavBar />
            <Container>
                <Row className="my-2">
                    <Col xs={12} md={3} xl={4} className="my-1 ">
                        <CardProfile user={user} />
                        <SectionRating user={user} />
                    </Col>
                    <Col xs={12} md={8} xl={7} className="my-1 ">
                        <ButtonGroup className="d-flex mx-auto mb-2 gap-1  ">
                            {key === 'proximos' ? (
                                <Button
                                    size="sm"
                                    className=" btn-warning rounded "
                                    onClick={() => setKey('proximos')}
                                >
                                    Próximos
                                </Button>
                            ) : (
                                <Button
                                    size="sm"
                                    className=" btn-light rounded "
                                    onClick={() => setKey('proximos')}
                                >
                                    Próximos
                                </Button>
                            )}
                            {key === 'ultimos' ? (
                                <Button
                                    size="sm"
                                    className=" btn-warning rounded "
                                    onClick={() => setKey('ultimos')}
                                >
                                    Últimos
                                </Button>
                            ) : (
                                <Button
                                    size="sm"
                                    className=" btn-light rounded "
                                    onClick={() => setKey('ultimos')}
                                >
                                    Últimos
                                </Button>
                            )}

                            {key === 'contactos' ? (
                                <Button
                                    size="sm"
                                    className=" btn-warning rounded "
                                    onClick={() => setKey('contactos')}
                                >
                                    <PeopleFill color="dark" className="mx-1" />
                                    Contáctos
                                </Button>
                            ) : (
                                <Button
                                    size="sm"
                                    className=" btn-light rounded "
                                    onClick={() => setKey('contactos')}
                                >
                                    <PeopleFill color="dark" className="mx-1" />
                                    Contáctos
                                </Button>
                            )}
                            {key === 'seguidores' ? (
                                <Button
                                    size="sm"
                                    className=" btn-warning rounded "
                                    onClick={() => setKey('seguidores')}
                                >
                                    <PersonCheckFill
                                        color="dark"
                                        className="mx-1"
                                    />
                                    Seguidores
                                </Button>
                            ) : (
                                <Button
                                    size="sm"
                                    className=" btn-light rounded "
                                    onClick={() => setKey('seguidores')}
                                >
                                    <PersonCheckFill
                                        color="dark"
                                        className="mx-1"
                                    />
                                    Seguidores
                                </Button>
                            )}
                        </ButtonGroup>
                        <section>
                            {key === 'proximos' ? (
                                <SectionNext id={id} />
                            ) : null}
                            {key === 'ultimos' ? <SectionLast id={id} /> : null}
                            {key === 'contactos' ? (
                                <SectionFollows user={user} />
                            ) : null}
                            {key === 'seguidores' ? (
                                <SectionFollowers user={user} />
                            ) : null}
                        </section>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Profile
