import React, { useState } from 'react'
import { Container, Navbar, NavDropdown, Nav, Button } from 'react-bootstrap'
import Login from '../pages/home/components/Login'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authorization'
import { useGetSports } from '../features/sports.features'
import Register from '../pages/home/components/Register'

function NavBar() {
    const username = useAuthStore((state) => state.profile)
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
            <Navbar expand="lg" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>Mi Bookie</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav style={{ fontSize: '13px' }} className="me-auto">
                            <Link to={'../'} className="nav-link">
                                Inicio
                            </Link>
                            {/* <Link to={'../players'} className='nav-link'>Jugadores</Link>
          <Link to={'../teams'} className='nav-link'>Equipos</Link> */}
                            <Link to={'../news'} className="nav-link">
                                Noticias
                            </Link>
                            <NavDropdown
                                title="Deportes"
                                id="basic-nav-dropdown"
                            >
                                {sports?.map((sport) => (
                                    <Link
                                        style={{ fontSize: '13px' }}
                                        to={`../sports/${sport?._id}`}
                                        key={sport?._id}
                                        className="dropdown-item"
                                    >
                                        {sport?.sport}
                                    </Link>
                                ))}
                            </NavDropdown>
                        </Nav>
                        {username ? (
                            <Navbar.Text style={{ fontSize: '13px' }}>
                                Signed in as: <Link>{username}</Link>
                                <Button
                                    style={{ fontSize: '13px' }}
                                    className="btn btn-warning mx-1 my-1"
                                    onClick={() => handleLogOut()}
                                >
                                    Cerrar Sesión
                                </Button>
                            </Navbar.Text>
                        ) : (
                            <Button
                                style={{ fontSize: '13px' }}
                                className="btn btn-warning mx-1 my-1"
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
