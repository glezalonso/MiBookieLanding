import React, { useState } from 'react'
import NavBar from '../../ui/Navbar'
import { Container, Row, Col, ButtonGroup, Button, Form } from 'react-bootstrap'
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
    const [limit, setLimit] = useState(15)

    return (
        <>
            <NavBar />
            <Container>
                <Row className="my-2">
                    <Col xs={12} sm={5} md={5} xl={4} className="my-1 ">
                        <CardProfile user={user} />

                        <SectionRating user={user} />
                    </Col>
                    <Col xs={12} sm={7} md={7} xl={7} className="my-1 ">
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
                            <div className="d-flex my-1 justify-content-end">
                                <Form.Select
                                    style={{ fontSize: '15px' }}
                                    className="rounded w-50"
                                    onChange={(e) => setLimit(e.target.value)}
                                >
                                    <option value="15">Últimos 15</option>
                                    <option value="30">Últimos 30</option>
                                    <option value="0">Todos</option>
                                </Form.Select>
                            </div>
                            {key === 'proximos' ? (
                                <SectionNext id={id} limit={limit} />
                            ) : null}
                            {key === 'ultimos' ? (
                                <SectionLast id={id} limit={limit} />
                            ) : null}
                            {key === 'contactos' ? (
                                <SectionFollows user={user} setKey={setKey} />
                            ) : null}
                            {key === 'seguidores' ? (
                                <SectionFollowers user={user} setKey={setKey} />
                            ) : null}
                        </section>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Profile
