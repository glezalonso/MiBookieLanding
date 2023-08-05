import React, { useState } from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { HouseDoor, Newspaper } from 'react-bootstrap-icons'
import Login from '../pages/home/components/Login'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authorization'
import { useGetSports } from '../features/sports.features'
import Register from '../pages/home/components/Register'
import logo from '../assets/mibookie.png'
import user from '../assets/user.png'

function NavBar() {
    const { username, id } = useAuthStore((state) => state.profile)
    const logOut = useAuthStore((state) => state.logOut)
    const { data: sports } = useGetSports()
    const navigate = useNavigate()

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const [showRegister, setShowRegister] = useState(false)

    const handleCloseRegister = () => setShowRegister(false)

    const handleRegister = () => {
        setShowRegister(true)
        handleClose()
    }

    const handleLogOut = () => {
        logOut()
        navigate('/')
    }
    return (
        <>
            <Navbar expand="lg" bg="dark" sticky="top" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to={'/'} className="nav-link">
                            <div className="d-flex justify-content-center">
                                <div>
                                    <img
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                        }}
                                        src={logo}
                                        alt="Mi Bookie"
                                    />
                                </div>
                                <div className="my-1">
                                    <span className="mx-1">Mi Bookie</span>
                                </div>
                            </div>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav style={{ fontSize: '15px' }} className="ms-auto">
                            <Link to={'/'} className="nav-link">
                                <HouseDoor
                                    color="grey"
                                    width={'20px'}
                                    height={'20px'}
                                />
                                <span className="mx-1"> Inicio</span>
                            </Link>
                            {sports?.map((sport) => (
                                <Link
                                    style={{ fontSize: '14px' }}
                                    to={`../sports/${sport?._id}`}
                                    key={sport?._id}
                                    className="nav-link"
                                >
                                    <img
                                        width={'20px'}
                                        height={'20px'}
                                        className="mx-auto"
                                        src={sport?.poster}
                                        alt={sport?.sport}
                                    />
                                    <span className="mx-1">{sport?.sport}</span>
                                </Link>
                            ))}
                            <Link to={'../news'} className="nav-link">
                                <Newspaper
                                    color="grey"
                                    width={'20px'}
                                    height={'20px'}
                                />
                                <span className="mx-1"> Noticias</span>
                            </Link>
                        </Nav>
                        {username ? (
                            <Navbar.Text>
                                <Link
                                    className="my-1"
                                    style={{ fontSize: '14px' }}
                                    to={`../profile/${id}`}
                                >
                                    <img
                                        src={user}
                                        width={'30px'}
                                        height={'30px'}
                                        alt="Usuario:"
                                        className="mx-1"
                                    />
                                    {username}
                                </Link>
                                <Button
                                    style={{ fontSize: '14px' }}
                                    className="btn btn-warning mx-1 my-1"
                                    onClick={() => handleLogOut()}
                                >
                                    Cerrar Sesión
                                </Button>
                            </Navbar.Text>
                        ) : (
                            <Button
                                style={{ fontSize: '14px' }}
                                className="btn btn-warning mx-1 my-1 "
                                onClick={() => handleShow()}
                            >
                                Iniciar Sesión
                            </Button>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Register show={showRegister} handleClose={handleCloseRegister} />
            <Login
                show={show}
                handleClose={handleClose}
                handleRegister={handleRegister}
            />
        </>
    )
}

export default NavBar
